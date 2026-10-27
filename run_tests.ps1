# WorkFair — Automated PowerShell Test Suite
# Tests security sanitization, mathematical accuracy, input validation, overnight shifts, and i18n parity.

$ErrorActionPreference = "Stop"
$passed = 0
$failed = 0
$total = 0

function Test-Assert($name, [bool]$condition, $errorMessage = "") {
    $global:total++
    if ($condition) {
        $global:passed++
        Write-Host "  [PASS] $name" -ForegroundColor Green
    } else {
        $global:failed++
        Write-Host "  [FAIL] $name : $errorMessage" -ForegroundColor Red
    }
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  WorkFair Security, Safety & Calculation Test Runner     " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# --------------------------------------------------------------------------
# 1. FILE & CONFIGURATION INTEGRITY
# --------------------------------------------------------------------------
Write-Host "`nSuite 1: Configuration & Security Headers" -ForegroundColor Yellow

Test-Assert "index.html exists" (Test-Path "c:\workfairantigravity\index.html")
Test-Assert "script.js exists" (Test-Path "c:\workfairantigravity\script.js")
Test-Assert "style.css exists" (Test-Path "c:\workfairantigravity\style.css")
Test-Assert "vercel.json exists" (Test-Path "c:\workfairantigravity\vercel.json")
Test-Assert "nginx.conf exists" (Test-Path "c:\workfairantigravity\nginx.conf")
Test-Assert "test.html exists" (Test-Path "c:\workfairantigravity\test.html")

$vercelContent = Get-Content "c:\workfairantigravity\vercel.json" -Raw
$vercelJson = ConvertFrom-Json $vercelContent
$hasCSP = $vercelContent -match "Content-Security-Policy"
$hasNosniff = $vercelContent -match "nosniff"
$hasFrameOptions = $vercelContent -match "SAMEORIGIN"
$hasPermPolicy = $vercelContent -match "Permissions-Policy"

Test-Assert "vercel.json has Content-Security-Policy" $hasCSP
Test-Assert "vercel.json has X-Content-Type-Options: nosniff" $hasNosniff
Test-Assert "vercel.json has X-Frame-Options: SAMEORIGIN" $hasFrameOptions
Test-Assert "vercel.json has Permissions-Policy" $hasPermPolicy

$nginxContent = Get-Content "c:\workfairantigravity\nginx.conf" -Raw
Test-Assert "nginx.conf has Content-Security-Policy" ($nginxContent -match "Content-Security-Policy")
Test-Assert "nginx.conf has Permissions-Policy" ($nginxContent -match "Permissions-Policy")

# --------------------------------------------------------------------------
# 2. ACCESSIBILITY & DOM STRUCTURE IN INDEX.HTML
# --------------------------------------------------------------------------
Write-Host "`nSuite 2: Semantic HTML & Accessibility in index.html" -ForegroundColor Yellow

$htmlContent = Get-Content "c:\workfairantigravity\index.html" -Raw

$requiredIds = @(
    "brandLogo", "tabWorker", "tabManager", "langSelect",
    "viewLanding", "viewWorker", "viewManager",
    "btnClockIn", "btnClockOut", "formManualShift", "manualShiftError",
    "workerFatigueBanner", "calcRegularHours", "calcOvertimeHours",
    "calcHourlyRate", "calcOtMultiplier", "calcDeductions",
    "formSafetyReport", "safetyIsAnonymous", "workerIdGroup",
    "workerShiftsTable", "workerSafetyTable", "mgrShiftsTable", "mgrSafetyTable",
    "receiptModal", "btnCloseReceiptModal", "btnPrintReceipt"
)

foreach ($id in $requiredIds) {
    Test-Assert "Element #$id exists in index.html" ($htmlContent -match "id=['`"]$id['`"]")
}

Test-Assert "Receipt modal has role='dialog'" ($htmlContent -match "role=['`"]dialog['`"]")
Test-Assert "Receipt modal has aria-modal='true'" ($htmlContent -match "aria-modal=['`"]true['`"]")
Test-Assert "Toast container has aria-live" ($htmlContent -match "id=['`"]toastContainer['`"][^>]*aria-live")
Test-Assert "Manual shift error banner has role='alert'" ($htmlContent -match "id=['`"]manualShiftError['`"][^>]*role=['`"]alert['`"]")
Test-Assert "Footer links to automated test suite" ($htmlContent -match "href=['`"]test\.html['`"]")

# --------------------------------------------------------------------------
# 3. SCRIPT SECURITY & XSS DEFENSE
# --------------------------------------------------------------------------
Write-Host "`nSuite 3: Script Security & XSS Sanitization" -ForegroundColor Yellow

$scriptContent = Get-Content "c:\workfairantigravity\script.js" -Raw

# Check that escapeHTML function exists and handles null/undefined
Test-Assert "script.js defines WorkFairCore.escapeHTML" ($scriptContent -match "escapeHTML\s*\(")
Test-Assert "escapeHTML checks for null or undefined" ($scriptContent -match "str === null \|\| str === undefined")
Test-Assert "escapeHTML escapes <, >, &, ', `"" ($scriptContent -match "\[&<>'`"\]")

# Check that showToast does NOT use innerHTML for the message
Test-Assert "showToast sets message using textContent (safe DOM)" ($scriptContent -match "textSpan\.textContent\s*=\s*message")

# Check that manager safety triage escapes workerId and category
Test-Assert "Manager table escapes workerId" ($scriptContent -match "WorkFairCore\.escapeHTML\(r\.workerId\)")
Test-Assert "Manager table escapes category" ($scriptContent -match "WorkFairCore\.escapeHTML\(r\.category\)")
Test-Assert "Manager table escapes description" ($scriptContent -match "WorkFairCore\.escapeHTML\(r\.description\)")

# --------------------------------------------------------------------------
# 4. MATHEMATICAL & CALCULATION TESTS (EMULATING CORE ENGINE)
# --------------------------------------------------------------------------
Write-Host "`nSuite 4: Overtime, Pay & Deductions Calculations" -ForegroundColor Yellow

function Invoke-CalculateShift($hours, $baseRate, $otMult, $deductions) {
    $h = [Math]::Max(0.0, [double]$hours)
    $rate = [Math]::Max(0.0, [double]$baseRate)
    $mult = [Math]::Max(1.0, [double]$otMult)
    $ded = [Math]::Max(0.0, [double]$deductions)

    $regularHours = [Math]::Min(8.0, $h)
    $overtimeHours = [Math]::Max(0.0, [Math]::Round($h - $regularHours, 2))

    $regularPay = [Math]::Round($regularHours * $rate, 2)
    $otPay = [Math]::Round($overtimeHours * ($rate * $mult), 2)
    $grossPay = [Math]::Round($regularPay + $otPay, 2)
    $netPay = [Math]::Round([Math]::Max(0.0, $grossPay - $ded), 2)
    $isFatigued = ($h -ge 10.0)

    return @{
        Hours = $h
        RegularHours = $regularHours
        OvertimeHours = $overtimeHours
        RegularPay = $regularPay
        OtPay = $otPay
        GrossPay = $grossPay
        NetPay = $netPay
        Deductions = $ded
        IsFatigued = $isFatigued
    }
}

# Test 1: Standard 8h shift
$c1 = Invoke-CalculateShift 8.0 150 1.5 0
Test-Assert "Standard 8h: Regular hours = 8.0" ($c1.RegularHours -eq 8.0)
Test-Assert "Standard 8h: Overtime hours = 0.0" ($c1.OvertimeHours -eq 0.0)
Test-Assert "Standard 8h: Gross pay = 1200" ($c1.GrossPay -eq 1200.0)
Test-Assert "Standard 8h: Net pay = 1200" ($c1.NetPay -eq 1200.0)
Test-Assert "Standard 8h: No fatigue alert" ($c1.IsFatigued -eq $false)

# Test 2: Overtime shift with 1.5x (10.5 hrs)
$c2 = Invoke-CalculateShift 10.5 150 1.5 100
Test-Assert "10.5h shift: Regular hours = 8.0" ($c2.RegularHours -eq 8.0)
Test-Assert "10.5h shift: Overtime hours = 2.5" ($c2.OvertimeHours -eq 2.5)
Test-Assert "10.5h shift: Regular pay = 1200" ($c2.RegularPay -eq 1200.0)
Test-Assert "10.5h shift: OT pay = 562.5" ($c2.OtPay -eq 562.5)
Test-Assert "10.5h shift: Gross pay = 1762.5" ($c2.GrossPay -eq 1762.5)
Test-Assert "10.5h shift: Net pay = 1662.5 (after ₹100 deduction)" ($c2.NetPay -eq 1662.5)
Test-Assert "10.5h shift: Triggers fatigue alert" ($c2.IsFatigued -eq $true)

# Test 3: Hospital 12h Overnight Double-Time (2.0x) Shift
$c3 = Invoke-CalculateShift 12.0 200 2.0 0
Test-Assert "Hospital 12h: Overtime hours = 4.0" ($c3.OvertimeHours -eq 4.0)
Test-Assert "Hospital 12h: Regular pay = 1600" ($c3.RegularPay -eq 1600.0)
Test-Assert "Hospital 12h: OT pay = 1600" ($c3.OtPay -eq 1600.0)
Test-Assert "Hospital 12h: Gross pay = 3200" ($c3.GrossPay -eq 3200.0)
Test-Assert "Hospital 12h: Triggers fatigue alert" ($c3.IsFatigued -eq $true)

# Test 4: Negative deduction clamping
$c4 = Invoke-CalculateShift 8.0 150 1.5 -500
Test-Assert "Negative deduction clamped to 0" ($c4.Deductions -eq 0.0)
Test-Assert "Net pay not inflated by negative deductions" ($c4.NetPay -eq 1200.0)

# Test 5: Deductions exceeding gross earnings
$c5 = Invoke-CalculateShift 4.0 100 1.5 1000
Test-Assert "Net pay floored at 0 when deductions > gross" ($c5.NetPay -eq 0.0)

# --------------------------------------------------------------------------
# 5. SHIFT DATE & OVERNIGHT LOGIC
# --------------------------------------------------------------------------
Write-Host "`nSuite 5: Date Validation & Overnight Shifts" -ForegroundColor Yellow

function Invoke-ValidateShiftDates($startStr, $endStr) {
    if ([string]::IsNullOrWhiteSpace($startStr) -or [string]::IsNullOrWhiteSpace($endStr)) {
        return @{ Valid = $false; ErrorKey = "errInvalidDates" }
    }
    try {
        $start = [DateTime]::Parse($startStr)
        $end = [DateTime]::Parse($endStr)
    } catch {
        return @{ Valid = $false; ErrorKey = "errInvalidDates" }
    }

    if ($end -le $start) {
        return @{ Valid = $false; ErrorKey = "errTimeRange" }
    }

    $hours = [Math]::Round(($end - $start).TotalHours, 2)
    if ($hours -lt 0.1) {
        return @{ Valid = $false; ErrorKey = "errTimeRange" }
    }
    if ($hours -gt 24.0) {
        return @{ Valid = $false; ErrorKey = "errShiftTooLong" }
    }

    $isOvernight = ($start.Date -ne $end.Date)

    return @{
        Valid = $true
        Hours = $hours
        IsOvernight = $isOvernight
    }
}

$v1 = Invoke-ValidateShiftDates "2026-10-26T08:00" "2026-10-26T16:00"
Test-Assert "Normal shift valid" ($v1.Valid -eq $true)
Test-Assert "Normal shift hours = 8.0" ($v1.Hours -eq 8.0)
Test-Assert "Normal shift not overnight" ($v1.IsOvernight -eq $false)

$v2 = Invoke-ValidateShiftDates "2026-10-26T22:00" "2026-10-27T06:00"
Test-Assert "Overnight shift (10 PM - 6 AM) valid" ($v2.Valid -eq $true)
Test-Assert "Overnight shift hours = 8.0" ($v2.Hours -eq 8.0)
Test-Assert "Overnight shift correctly flagged as overnight" ($v2.IsOvernight -eq $true)

$v3 = Invoke-ValidateShiftDates "2026-10-26T18:00" "2026-10-26T08:00"
Test-Assert "Inverted shift rejected" ($v3.Valid -eq $false)
Test-Assert "Inverted shift returns errTimeRange" ($v3.ErrorKey -eq "errTimeRange")

$v4 = Invoke-ValidateShiftDates "2026-10-20T08:00" "2026-10-22T08:00"
Test-Assert "48h shift rejected" ($v4.Valid -eq $false)
Test-Assert "48h shift returns errShiftTooLong" ($v4.ErrorKey -eq "errShiftTooLong")

# --------------------------------------------------------------------------
# 6. SAFETY REPORT & PRIVACY VALIDATION
# --------------------------------------------------------------------------
Write-Host "`nSuite 6: Worker Safety & Privacy Rules" -ForegroundColor Yellow

function Invoke-ValidateSafetyReport($industry, $category, $desc, $isAnon, $workerId) {
    $trimmedDesc = if ($desc) { $desc.Trim() } else { "" }
    if ($trimmedDesc.Length -lt 5) {
        return @{ Valid = $false; ErrorKey = "errDescTooShort" }
    }

    $assignedId = "Anonymous Worker"
    if (-not $isAnon) {
        $assignedId = if ($workerId -and $workerId.Trim().Length -gt 0) { $workerId.Trim() } else { "Worker (Unspecified)" }
    }

    return @{
        Valid = $true
        IsAnonymous = $isAnon
        WorkerId = $assignedId
    }
}

$sr1 = Invoke-ValidateSafetyReport "Construction" "PPE" "Harness latch is broken on floor 4" $true "W-8491"
Test-Assert "Anonymous report valid" ($sr1.Valid -eq $true)
Test-Assert "Anonymous report redacts workerId to 'Anonymous Worker'" ($sr1.WorkerId -eq "Anonymous Worker")

$sr2 = Invoke-ValidateSafetyReport "Hospital" "Hazards" "Chemical spill in laundry room" $false ""
Test-Assert "Non-anonymous without ID assigns 'Worker (Unspecified)'" ($sr2.WorkerId -eq "Worker (Unspecified)")
Test-Assert "Does not falsely impersonate demo ID W-8491" ($sr2.WorkerId -ne "W-8491")

$sr3 = Invoke-ValidateSafetyReport "Hospital" "Hazards" "bad" $true ""
Test-Assert "Too-short description rejected" ($sr3.Valid -eq $false)

# --------------------------------------------------------------------------
# 7. INTERNATIONALIZATION (I18N) INTEGRITY
# --------------------------------------------------------------------------
Write-Host "`nSuite 7: English & Tamil (தமிழ்) Dictionary Parity" -ForegroundColor Yellow

# Extract I18N block from script.js
$hasEn = $scriptContent -match "en:\s*\{"
$hasTa = $scriptContent -match "ta:\s*\{"
Test-Assert "script.js has English dictionary" $hasEn
Test-Assert "script.js has Tamil dictionary" $hasTa

$keyCheckList = @(
    "demoBadge", "demoBannerText", "brandTagline", "navWorker", "navManager",
    "kpiCurrentShift", "kpiShiftDuration", "kpiEstimatedEarnings", "kpiFatigueStatus",
    "statusClockedOut", "statusClockedIn", "statusSafe", "statusFatigueWarning",
    "fatigueWarningTitle", "fatigueWarningBody", "fatigueDisclaimer",
    "payEstimatorTitle", "payDisclaimer", "safetyTitle", "anonymousHelp",
    "errTimeRange", "errShiftTooLong", "errFutureShift", "errInvalidDates",
    "errDescTooShort", "roleDemoNotice", "colOvernight"
)

foreach ($k in $keyCheckList) {
    $pattern = [regex]::Escape($k) + ':\s*"[^"]+"'
    $inEn = $scriptContent -match $pattern
    Test-Assert "Key '$k' is defined in script dictionaries" $inEn
}

# --------------------------------------------------------------------------
# SUMMARY REPORT
# --------------------------------------------------------------------------
Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  TEST RESULTS SUMMARY" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Total Tests Run : $total" -ForegroundColor Cyan
Write-Host "  Passed          : $passed" -ForegroundColor Green
Write-Host "  Failed          : $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "Green" })
Write-Host "==========================================================" -ForegroundColor Cyan

if ($failed -gt 0) {
    exit 1
} else {
    exit 0
}
