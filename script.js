/**
 * WorkFair — Fair Work, Safer Workers
 * Hackathon Prototype for UN SDG 8: Decent Work & Economic Growth
 * Pure Browser Vanilla JavaScript (No Node.js, No Frameworks, No Build Step)
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARY - ENGLISH & TAMIL (தமிழ்)
     ========================================================================== */
  const I18N = {
    en: {
      demoBadge: "PROTOTYPE DEMO",
      demoBannerText: "Demonstration Mode: Local browser storage only. No login or cloud backend required.",
      brandTagline: "Fair Work, Safer Workers",
      navWorker: "Worker View",
      navManager: "Manager View",
      chooseLanguage: "Choose Language",
      heroBadge: "UN SDG 8 Hackathon Prototype",
      heroTitle: "Fair Work, Transparent Pay & Safer Workplaces",
      heroSubtitle: "Empowering construction builders and hospital support staff with verifiable shift records, transparent wage estimates, early fatigue alerts, and anonymous hazard reporting.",
      ctaOpenWorker: "Open Worker Dashboard",
      ctaOpenManager: "Open Manager Dashboard",
      sdgTarget: "Safe and Secure Working Environments",
      statTransparent: "Transparent Pay Math for Workers",
      statSectors: "Construction & Hospital Support",
      problemTitle: "The Problem",
      problemText: "Informal paper logs, undocumented overtime, unpredictable deductions, and fear of reporting workplace hazards put front-line staff at acute financial and health risk.",
      solutionTitle: "The WorkFair Solution",
      solutionText: "One-touch digital attendance with optional GPS check-in, transparent breakdown of overtime and regular wages, continuous shift fatigue awareness, and instant Proof of Every Shift.",
      featureProofTitle: "Proof of Every Shift",
      featureProofText: "Workers generate a standardized shift receipt complete with hour tallies, exact wage formulas, fatigue status, and hazard links that can be printed or saved on their mobile phones.",
      workerPortalTitle: "Worker Dashboard",
      workerPortalDesc: "Track your working hours, inspect your earnings, monitor fatigue, and voice workplace safety concerns.",
      activeSectorLabel: "Active Industry:",
      sectorConstruction: "Construction",
      sectorHospital: "Hospital Support",
      kpiCurrentShift: "Current Status",
      kpiShiftDuration: "Logged Today",
      kpiEstimatedEarnings: "Estimated Today",
      kpiFatigueStatus: "Fatigue Level",
      statusClockedOut: "Not on shift",
      statusClockedIn: "Shift in Progress",
      statusSafe: "Safe Shift",
      statusFatigueWarning: "Fatigue Risk",
      attendanceTitle: "Shift Attendance & Time Clock",
      attendanceDesc: "Record your shift start and finish times. Geolocation is strictly optional and only captured when you explicitly request it.",
      activeShiftElapsed: "Shift Duration:",
      geoNotCaptured: "Location: Optional (Not captured)",
      geoCaptured: "Location: Worksite GPS Captured",
      btnAddLocation: "Add Worksite GPS",
      geoPrivacyNotice: "Privacy Guard: Browser location is queried only once upon your request and never continuously tracked. You can check in without location.",
      btnCheckIn: "Check In (Start Shift)",
      btnCheckOut: "Check Out (End Shift)",
      demoShiftSummary: "Log a Past or Completed Shift (Demo Testing)",
      lblStartTime: "Start Time",
      lblEndTime: "End Time",
      lblShiftNotes: "Shift Notes (Optional)",
      btnRecordShift: "Record Completed Shift",
      fatigueWarningTitle: "Fatigue Alert: Long Shift Detected",
      fatigueWarningBody: "This shift exceeds the demonstration fatigue threshold (10 hours). Prolonged shifts without adequate rest intervals increase risk of workplace injury and cognitive exhaustion.",
      fatigueDisclaimer: "Note: This warning is an automated shift awareness guideline, not a medical diagnosis or hospital employment policy.",
      payEstimatorTitle: "Transparent Pay Estimator",
      demoRatesBadge: "Demo Rates",
      payEstimatorDesc: "Every calculation is shown clearly so you know exactly how your estimated shift earnings are derived.",
      lblRegularHours: "Regular Hours",
      lblOvertimeHours: "Overtime Hours",
      lblHourlyRate: "Base Hourly Rate (₹ / hr)",
      lblOtMultiplier: "Overtime Multiplier",
      lblDeductions: "Manual Deductions (₹)",
      deductionsHelp: "Enter any agreed deductions (advance pay, meals, safety equipment deposit).",
      calcRegularLine: "Regular Pay",
      calcOvertimeLine: "Overtime Pay",
      calcGrossPay: "Gross Estimated Pay",
      calcDeductionLine: "Total Deductions",
      calcNetEstimate: "Final Estimated Earnings",
      payDisclaimer: "* Explicit Demo Disclaimer: This estimate is produced for demonstration and transparency purposes. It is not an official legal payslip. Actual payments are subject to official employer contracts and statutory withholdings.",
      safetyTitle: "Voice a Safety Concern",
      badgeAnonymousOpt: "Anonymous Option",
      safetyDesc: "Speak up about unsafe equipment, PPE deficiencies, structural hazards, or severe workloads without fear of reprisal.",
      lblSafetyIndustry: "Industry",
      lblSafetyCategory: "Concern Category",
      lblSafetyDesc: "Detailed Description",
      lblReportAnonymous: "Submit as Anonymous Report",
      anonymousHelp: "Your worker ID and name will be omitted from the manager report. Please note that anonymity cannot be preserved if you mention your name inside the text description.",
      lblOptionalWorkerId: "Your Worker ID (Optional)",
      btnSubmitReport: "Submit Safety Report",
      safetySuccessTitle: "Safety Report Filed Successfully",
      safetySuccessBody: "Your concern has been registered and is now visible on the safety log.",
      lblRefNumber: "Reference No:",
      recentShiftsTitle: "My Shift History & Receipts",
      btnLatestReceipt: "View Latest Receipt",
      recentShiftsDesc: "Every shift completed creates an immutable 'Proof of Every Shift' receipt with full hour and pay transparency.",
      colDate: "Date / Shift",
      colSector: "Sector",
      colHours: "Hours",
      colFatigue: "Fatigue Status",
      colEstimated: "Est. Pay",
      colReceipt: "Receipt",
      mySafetyReportsTitle: "My Filed Safety Concerns",
      colRefId: "Ref #",
      colCategory: "Category",
      colSubmitted: "Submitted",
      colStatus: "Current Status",
      managerPortalTitle: "Manager Oversight Dashboard",
      badgeSupervisor: "Site Supervisor / Hospital Admin",
      managerPortalDesc: "Real-time audit of recorded shifts, fatigue risks, overtime hours, and worker safety submissions.",
      lblFilterIndustry: "Filter Industry:",
      optAllSectors: "All Industries",
      kpiTotalShifts: "Recorded Shifts",
      kpiTotalHours: "Total Work Hours",
      kpiFatigueAlerts: "Fatigue Warnings",
      kpiPendingSafety: "Pending Safety Reports",
      mgrShiftsTitle: "Shift Records & Overtime Log",
      badgeSessionSync: "Session Synced",
      colShiftId: "Shift ID",
      colWorkerRef: "Worker Ref",
      colStartEnd: "Start & End",
      colDuration: "Total Hours",
      colOt: "Overtime",
      colAlerts: "Fatigue Alert",
      colAction: "Action",
      mgrSafetyTitle: "Workplace Safety Triage",
      mgrSafetyDesc: "Review submitted worker concerns and update their progress. Anonymous submitters are strictly protected.",
      colDescription: "Description",
      colReporter: "Reporter",
      colUpdateStatus: "Update Status",
      demoResetNotice: "Need fresh demonstration records for your presentation?",
      btnReloadDemo: "Reset to Default Demo Data",
      receiptTitle: "Proof of Every Shift — Shift Receipt",
      receiptSubtitle: "WorkFair Verifiable Shift & Transparent Earnings Record",
      lblReceiptId: "Receipt Ref:",
      lblDateIssued: "Date Issued:",
      lblWorkerRef: "Worker Ref:",
      lblIndustrySector: "Industry / Role:",
      recShiftDetails: "Shift Working Hours",
      lblTotalRecordedHours: "Total Recorded:",
      recPayMathTitle: "Transparent Pay Calculation",
      recRegularPayDesc: "Regular Hours Base Pay",
      recOvertimePayDesc: "Overtime Shift Premium",
      recDeductionsDesc: "Recorded Shift Deductions",
      recNetEstimatedPay: "Estimated Total Earned for Shift",
      recSafetyFatigueTitle: "Worker Safety & Fatigue Record",
      recFatigueWarningTitle: "Fatigue Advisory Triggered",
      recFatigueNormalTitle: "Fatigue Level Normal",
      recFatigueWarningMsg: "Shift duration exceeded demo threshold (10 hours). Rest interval advised.",
      recFatigueNormalMsg: "Shift concluded within regular working limits.",
      recSafetyConcernTitle: "Associated Safety Reports",
      recNoSafetyFiled: "No critical safety hazards logged during this shift window.",
      recLegalDisclaimer: "Notice: This Shift Receipt is a transparent digital record and pay calculation estimate provided to support worker awareness under UN SDG 8. It does not replace an official payslip or legal tax certificate.",
      btnClose: "Close",
      btnPrintReceipt: "Print Shift Receipt / Save PDF",
      footerDemoNotice: "Zero-setup offline-ready demo. Double-click index.html to preview.",
      anonymousWorker: "Anonymous Worker",
      statusSubmitted: "Submitted",
      statusReview: "Under Review",
      statusResolved: "Resolved",
      toastClockInSuccess: "Shift started. Time clock is running.",
      toastClockOutSuccess: "Shift completed! Shift Receipt generated.",
      toastGeoSuccess: "Worksite coordinates captured for this check-in.",
      toastGeoDenied: "Location permission skipped. You can continue without GPS.",
      toastReportSuccess: "Safety concern submitted to manager triage.",
      toastStatusUpdated: "Safety report status updated.",
      toastDemoReset: "Demo data reset successfully."
    },
    ta: {
      demoBadge: "மாதிரி வெள்ளோட்டம் (DEMO)",
      demoBannerText: "செயல்முறை மாதிரி: உலாவி உள்ளக சேமிப்பு மட்டுமே. இணைய சேவையகம் தேவையில்லை.",
      brandTagline: "நியாயமான வேலை, பாதுகாப்பான தொழிலாளர்கள்",
      navWorker: "தொழிலாளர் பக்கம்",
      navManager: "மேலாளர் பக்கம்",
      chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
      heroBadge: "ஐ.நா SDG 8 போட்டி மாதிரி",
      heroTitle: "நியாயமான வேலை, வெளிப்படையான ஊதியம் & பாதுகாப்பான பணியிடம்",
      heroSubtitle: "கட்டுமானத் தொழிலாளர்கள் மற்றும் மருத்துவமனை ஆதரவு ஊழியர்களுக்கு நம்பகமான பணிப் பதிவுகள், வெளிப்படையான சம்பளக் கணக்கீடு, சோர்வு எச்சரிக்கை மற்றும் ரகசிய ஆபத்து புகார்கள்.",
      ctaOpenWorker: "தொழிலாளர் பலகைக்குச் செல்",
      ctaOpenManager: "மேலாளர் பலகைக்குச் செல்",
      sdgTarget: "பாதுகாப்பான மற்றும் உறுதிமிக்க வேலைச் சூழல்",
      statTransparent: "100% வெளிப்படையான ஊதியக் கணிதம்",
      statSectors: "கட்டுமானம் & மருத்துவமனை ஆதரவு",
      problemTitle: "சிக்கல்",
      problemText: "காகிதப் பதிவேடுகள், கணக்கில் வராத கூடுதல் நேரம், திடீர் பிடித்தங்கள் மற்றும் பயம் காரணமாக பணியிட ஆபத்துகளைத் தெரிவிக்க முடியாமல் தொழிலாளர்கள் பாதிக்கப்படுகின்றனர்.",
      solutionTitle: "WorkFair தீர்வு",
      solutionText: "விரல் தொடுதலில் வருகைப் பதிவு, விருப்பத்திற்குரிய GPS, வழக்கமான மற்றும் கூடுதல் நேர ஊதியத்தின் தெளிவான விளக்கம், மற்றும் உடனடி பணி ரசீது.",
      featureProofTitle: "ஒவ்வொரு பணிமுறைக்கான சான்று",
      featureProofText: "வேலை நேரம், துல்லியமான சம்பள வாய்ப்பாடு, சோர்வு நிலை ஆகியவற்றை உள்ளடக்கிய தரப்படுத்தப்பட்ட பணி ரசீதை தொழிலாளர்கள் அச்சிடவோ அல்லது மொபைலில் சேமிக்கவோ முடியும்.",
      workerPortalTitle: "தொழிலாளர் கட்டுப்பாட்டுப் பலகை",
      workerPortalDesc: "வேலை நேரத்தைப் பதிவு செய்யுங்கள், ஊதியக் கணக்கைப் பாருங்கள், சோர்வு எச்சரிக்கையைக் கவனியுங்கள், மற்றும் பாதுகாப்புப் புகார்களை அளியுங்கள்.",
      activeSectorLabel: "நடப்புத் துறை:",
      sectorConstruction: "கட்டுமானம்",
      sectorHospital: "மருத்துவமனை ஆதரவு",
      kpiCurrentShift: "நடப்பு நிலை",
      kpiShiftDuration: "இன்றைய வேலை நேரம்",
      kpiEstimatedEarnings: "இன்றைய உத்தேச ஊதியம்",
      kpiFatigueStatus: "சோர்வு நிலை",
      statusClockedOut: "பணியில் இல்லை",
      statusClockedIn: "பணி நடப்பில் உள்ளது",
      statusSafe: "பாதுகாப்பான நேரம்",
      statusFatigueWarning: "சோர்வு அபாயம்",
      attendanceTitle: "பணி வருகைப் பதிவு & நேரக் கடிகாரம்",
      attendanceDesc: "பணி தொடங்கும் மற்றும் முடியும் நேரத்தைப் பதிவு செய்யுங்கள். இருப்பிடத் தகவல் (GPS) முற்றிலும் உங்கள் விருப்பத்திற்கு உட்பட்டது.",
      activeShiftElapsed: "பணி நேரம்:",
      geoNotCaptured: "இருப்பிடம்: விருப்பத்திற்குரியது (பதிவாகவில்லை)",
      geoCaptured: "இருப்பிடம்: பணியிட GPS இணைக்கப்பட்டது",
      btnAddLocation: "பணியிட GPS-ஐ இணைக்கவும்",
      geoPrivacyNotice: "தனியுரிமைப் பாதுகாப்பு: உங்கள் கோரிக்கையின் போது ஒருமுறை மட்டுமே இருப்பிடம் சரிபார்க்கப்படும். தொடர் கண்காணிப்பு கிடையாது.",
      btnCheckIn: "பணி தொடங்கு (செக்-இன்)",
      btnCheckOut: "பணி நிறைவு (செக்-அவுட்)",
      demoShiftSummary: "கடந்த காலப் பணியைப் பதிவு செய்ய (பரிசோதனைக்கு)",
      lblStartTime: "தொடங்கிய நேரம்",
      lblEndTime: "முடிந்த நேரம்",
      lblShiftNotes: "பணிக் குறிப்புகள் (விருப்பம்)",
      btnRecordShift: "பணிப் பதிவைச் சேமி",
      fatigueWarningTitle: "சோர்வு எச்சரிக்கை: நீண்ட பணி நேரம்",
      fatigueWarningBody: "இந்த பணி நேரம் மாதிரி வரம்பை (10 மணிநேரம்) தாண்டியுள்ளது. போதிய ஓய்வின்றி தொடர்ந்து வேலை செய்வது விபத்துகளுக்கும் உடல் சோர்விற்கும் வழிவகுக்கும்.",
      fatigueDisclaimer: "குறிப்பு: இது தொழிலாளர் நல விழிப்புணர்வு வழிகாட்டல் மட்டுமே; மருத்துவ ஆலோசனையோ அல்லது அதிகாரப்பூர்வ கொள்கையோ அல்ல.",
      payEstimatorTitle: "வெளிப்படையான ஊதியக் கணிப்பான்",
      demoRatesBadge: "மாதிரி விகிதங்கள்",
      payEstimatorDesc: "உங்கள் உத்தேச ஊதியம் எவ்வாறு கணக்கிடப்பட்டது என்பதை முழுமையாகத் தெரிந்துகொள்ளலாம்.",
      lblRegularHours: "வழக்கமான நேரம் (மணி)",
      lblOvertimeHours: "கூடுதல் நேரம் (ஓவர்டைம்)",
      lblHourlyRate: "அடிப்படை மணிநேர ஊதியம் (₹ / மணி)",
      lblOtMultiplier: "கூடுதல் நேர விகிதம் (Multiplier)",
      lblDeductions: "பிடித்தங்கள் (₹)",
      deductionsHelp: "முன்பணம் அல்லது சீருடை போன்ற முன்முடிவு செய்யப்பட்ட பிடித்தங்களை உள்ளிடவும்.",
      calcRegularLine: "வழக்கமான ஊதியம்",
      calcOvertimeLine: "கூடுதல் நேர ஊதியம்",
      calcGrossPay: "மொத்த உத்தேச ஊதியம்",
      calcDeductionLine: "மொத்தப் பிடித்தங்கள்",
      calcNetEstimate: "இறுதி உத்தேச ஊதியம்",
      payDisclaimer: "* மாதிரி அறிவிப்பு: இது வெளிப்படைத்தன்மைக்கான உத்தேசக் கணக்கீடு மட்டுமே. சட்டப்பூர்வ சம்பளச் சீட்டு அல்ல. உண்மையான ஊதியம் நிறுவன விதிகளுக்கு உட்பட்டது.",
      safetyTitle: "பணியிடப் பாதுகாப்புக் குறைபாட்டைப் பதிவு செய்",
      badgeAnonymousOpt: "பெயரற்ற ரகசிய வசதி",
      safetyDesc: "பாதுகாப்பற்ற இயந்திரங்கள், கவச உடைப் பற்றாக்குறை அல்லது அதிகப்படியான வேலைச்சுமை குறித்து அச்சமின்றி தெரிவியுங்கள்.",
      lblSafetyIndustry: "தொழில்துறை",
      lblSafetyCategory: "குறைபாட்டின் வகை",
      lblSafetyDesc: "விளக்கக் குறிப்பு",
      lblReportAnonymous: "பெயரற்ற ரகசியப் புகாராக அனுப்பு",
      anonymousHelp: "மேலாளர் பார்வையில் உங்கள் பெயர் மற்றும் அடையாள எண் மறைக்கப்படும். விளக்க உரையில் உங்கள் பெயரைக் குறிப்பிட்டால் ரகசியம் காக்கப்படாது.",
      lblOptionalWorkerId: "தொழிலாளர் எண் (விருப்பம்)",
      btnSubmitReport: "பாதுகாப்பு அறிக்கையைச் சமர்ப்பி",
      safetySuccessTitle: "பாதுகாப்பு அறிக்கை வெற்றிகரமாகப் பதிவு செய்யப்பட்டது",
      safetySuccessBody: "உங்கள் புகார் பதிவு செய்யப்பட்டு மேலாளர் பார்வைக்கு அனுப்பப்பட்டுள்ளது.",
      lblRefNumber: "குறிப்பு எண்:",
      recentShiftsTitle: "எனது பணி வரலாறு & ரசீதுகள்",
      btnLatestReceipt: "சமீபத்திய ரசீதைப் பார்",
      recentShiftsDesc: "ஒவ்வொரு பணியின் முடிவிலும் வெளிப்படையான 'பணி ரசீது' உடனடியாக உருவாக்கப்படும்.",
      colDate: "தேதி / பணி",
      colSector: "துறை",
      colHours: "நேரம்",
      colFatigue: "சோர்வு நிலை",
      colEstimated: "உத்தேச ஊதியம்",
      colReceipt: "ரசீது",
      mySafetyReportsTitle: "நான் சமர்ப்பித்த பாதுகாப்புக் குறிப்புகள்",
      colRefId: "குறிப்பு #",
      colCategory: "வகை",
      colSubmitted: "சமர்ப்பிக்கப்பட்டது",
      colStatus: "நடப்பு நிலை",
      managerPortalTitle: "மேலாளர் கண்காணிப்புப் பலகை",
      badgeSupervisor: "பணி மேற்பார்வையாளர் / நிர்வாகி",
      managerPortalDesc: "பதிவு செய்யப்பட்ட வேலை நேரங்கள், சோர்வு அபாயங்கள், ஓவர்டைம் மற்றும் தொழிலாளர் பாதுகாப்புப் புகார்களின் நேரலை ஆய்வு.",
      lblFilterIndustry: "துறை வாரியாக வடிகட்டு:",
      optAllSectors: "அனைத்துத் துறைகளும்",
      kpiTotalShifts: "மொத்தப் பணிகள்",
      kpiTotalHours: "மொத்த வேலை நேரம்",
      kpiFatigueAlerts: "சோர்வு எச்சரிக்கைகள்",
      kpiPendingSafety: "நிலுவையிலுள்ள புகார்கள்",
      mgrShiftsTitle: "பணிப் பதிவுகள் & கூடுதல் நேரப் பட்டியல்",
      badgeSessionSync: "நேரலை ஒத்திசைவு",
      colShiftId: "பணி எண்",
      colWorkerRef: "தொழிலாளர் குறிப்பு",
      colStartEnd: "தொடக்கமும் முடிவும்",
      colDuration: "மொத்த நேரம்",
      colOt: "கூடுதல் நேரம்",
      colAlerts: "சோர்வு எச்சரிக்கை",
      colAction: "செயல்",
      mgrSafetyTitle: "பணியிடப் பாதுகாப்பு மேலாண்மை",
      mgrSafetyDesc: "தொழிலாளர்களின் புகார்களை ஆராய்ந்து நிலையை மாற்றவும். பெயரற்ற ஊழியர்களின் விவரங்கள் பாதுகாக்கப்படுகின்றன.",
      colDescription: "விளக்கம்",
      colReporter: "அறிவித்தவர்",
      colUpdateStatus: "நிலையை மாற்று",
      demoResetNotice: "விளக்கக் காட்சிக்கு புதிய மாதிரி தரவுகள் தேவையா?",
      btnReloadDemo: "மாதிரித் தரவுகளை மீட்டமைக்க",
      receiptTitle: "ஒவ்வொரு பணிமுறைக்கான சான்று — பணி ரசீது",
      receiptSubtitle: "WorkFair சரிபார்க்கப்பட்ட பணி & வெளிப்படையான ஊதியப் பதிவு",
      lblReceiptId: "ரசீது எண்:",
      lblDateIssued: "வழங்கப்பட்ட தேதி:",
      lblWorkerRef: "தொழிலாளர் குறிப்பு:",
      lblIndustrySector: "துறை / பணிப்பிரிவு:",
      recShiftDetails: "பணி வேலை நேரம்",
      lblTotalRecordedHours: "பதிவு செய்யப்பட்ட மொத்த நேரம்:",
      recPayMathTitle: "வெளிப்படையான ஊதியக் கணக்கீடு",
      recRegularPayDesc: "வழக்கமான நேர அடிப்படை ஊதியம்",
      recOvertimePayDesc: "கூடுதல் நேரக் கட்டணம்",
      recDeductionsDesc: "பணிக்கான பிடித்தங்கள்",
      recNetEstimatedPay: "பணிக்கான உத்தேச மொத்த ஊதியம்",
      recSafetyFatigueTitle: "தொழிலாளர் பாதுகாப்பு & சோர்வுப் பதிவு",
      recFatigueWarningTitle: "சோர்வு எச்சரிக்கை தூண்டப்பட்டது",
      recFatigueNormalTitle: "சோர்வு நிலை சீராக உள்ளது",
      recFatigueWarningMsg: "பணி நேரம் மாதிரி வரம்பைத் தாண்டியது (10 மணிநேரம்). ஓய்வு அவசியம்.",
      recFatigueNormalMsg: "வழக்கமான வரம்பிற்குள் பணி முடிவடைந்தது.",
      recSafetyConcernTitle: "தொடர்புடைய பாதுகாப்புப் புகார்கள்",
      recNoSafetyFiled: "இந்த பணி நேரத்தில் ஆபத்து புகார்கள் ஏதும் பதிவு செய்யப்படவில்லை.",
      recLegalDisclaimer: "அறிவிப்பு: இந்த பணி ரசீது ஐ.நா SDG 8-ன் கீழ் தொழிலாளர் நல விழிப்புணர்வை ஏற்படுத்த உருவாக்கப்பட்ட வெளிப்படையான மாதிரிப் பதிவே. இது சட்டப்பூர்வ சம்பளச் சீட்டு அல்ல.",
      btnClose: "மூடு",
      btnPrintReceipt: "ரசீதை அச்சிடு / PDF ஆக சேமி",
      footerDemoNotice: "பூஜ்ஜிய அமைவு கொண்ட ஆஃப்லைன் மாதிரி. இயக்க index.html கோப்பைத் திறக்கவும்.",
      anonymousWorker: "பெயரற்ற தொழிலாளர்",
      statusSubmitted: "சமர்ப்பிக்கப்பட்டது",
      statusReview: "பரிசீலனையில்",
      statusResolved: "தீர்க்கப்பட்டது",
      toastClockInSuccess: "பணி தொடங்கியது. நேரக் கடிகாரம் இயங்குகிறது.",
      toastClockOutSuccess: "பணி நிறைவடைந்தது! பணி ரசீது தயாராக உள்ளது.",
      toastGeoSuccess: "பணியிட GPS ஆயத்தொலைவுகள் இணைக்கப்பட்டன.",
      toastGeoDenied: "இருப்பிட அனுமதி தவிர்க்கப்பட்டது. GPS இன்றியே தொடரலாம்.",
      toastReportSuccess: "பாதுகாப்புப் புகார் மேலாளர் பார்வைக்கு அனுப்பப்பட்டது.",
      toastStatusUpdated: "புகாரின் நிலை வெற்றிகரமாக மாற்றப்பட்டது.",
      toastDemoReset: "மாதிரித் தரவுகள் வெற்றிகரமாக மீட்டமைக்கப்பட்டன."
    }
  };

  /* ==========================================================================
     2. DEFAULT SEED DEMO DATA
     ========================================================================== */
  const DEFAULT_SHIFTS = [
    {
      id: "WF-SH-2026-101",
      workerId: "W-8491",
      workerName: "Demo Worker",
      sector: "Construction",
      notes: "Scaffolding Assembly Phase 2",
      startTime: "2026-10-26T08:00",
      endTime: "2026-10-26T17:00",
      totalHours: 9.0,
      regularHours: 8.0,
      overtimeHours: 1.0,
      hourlyRate: 150,
      otMultiplier: 1.5,
      deductions: 50,
      regularPay: 1200,
      otPay: 225,
      netPay: 1375,
      fatigueAlert: false,
      geoCaptured: true,
      geoCoords: "Lat: 13.0827, Lng: 80.2707"
    },
    {
      id: "WF-SH-2026-102",
      workerId: "W-8491",
      workerName: "Demo Worker",
      sector: "Hospital",
      notes: "ICU Sanitation & Patient Transport",
      startTime: "2026-10-25T07:00",
      endTime: "2026-10-25T18:30",
      totalHours: 11.5,
      regularHours: 8.0,
      overtimeHours: 3.5,
      hourlyRate: 150,
      otMultiplier: 1.5,
      deductions: 0,
      regularPay: 1200,
      otPay: 787.5,
      netPay: 1987.5,
      fatigueAlert: true,
      geoCaptured: false,
      geoCoords: "Location Optional"
    }
  ];

  const DEFAULT_SAFETY_REPORTS = [
    {
      id: "WF-SAF-2026-081",
      sector: "Hospital",
      category: "Excessive Workload",
      description: "Continuous 12-hour shifts scheduled across back-to-back weekends in the emergency ward without adequate rest buffers.",
      isAnonymous: true,
      workerId: "Anonymous",
      submittedAt: "2026-10-25 19:15",
      status: "Under Review"
    },
    {
      id: "WF-SAF-2026-082",
      sector: "Construction",
      category: "Protective Equipment (PPE)",
      description: "Harness clamp latch on 4th level scaffolding is worn out and loose. Replaced temporary rope needed immediately.",
      isAnonymous: false,
      workerId: "W-8491",
      submittedAt: "2026-10-26 14:20",
      status: "Submitted"
    },
    {
      id: "WF-SAF-2026-079",
      sector: "Construction",
      category: "Unsafe Equipment",
      description: "Cement mixer grounding wire is frayed near water supply basin.",
      isAnonymous: true,
      workerId: "Anonymous",
      submittedAt: "2026-10-24 11:00",
      status: "Resolved"
    }
  ];

  /* ==========================================================================
     3. APPLICATION STATE STORE
     ========================================================================== */
  const STATE = {
    lang: localStorage.getItem("workfair_lang") || "en",
    activeRole: "worker", // 'worker' or 'manager'
    currentSector: "Construction", // 'Construction' or 'Hospital'
    activeShift: JSON.parse(localStorage.getItem("workfair_active_shift")) || null,
    shifts: JSON.parse(localStorage.getItem("workfair_shifts")) || DEFAULT_SHIFTS,
    safetyReports: JSON.parse(localStorage.getItem("workfair_reports")) || DEFAULT_SAFETY_REPORTS,
    tempGeo: null,
    timerInterval: null
  };

  /* Helper to persist data to localStorage safely */
  function saveState() {
    try {
      localStorage.setItem("workfair_shifts", JSON.stringify(STATE.shifts));
      localStorage.setItem("workfair_reports", JSON.stringify(STATE.safetyReports));
      if (STATE.activeShift) {
        localStorage.setItem("workfair_active_shift", JSON.stringify(STATE.activeShift));
      } else {
        localStorage.removeItem("workfair_active_shift");
      }
      localStorage.setItem("workfair_lang", STATE.lang);
    } catch (err) {
      console.warn("Storage quota or disabled storage:", err);
    }
  }

  /* Helper to get localized text */
  function t(key) {
    const langDict = I18N[STATE.lang] || I18N.en;
    return langDict[key] || I18N.en[key] || key;
  }

  /* Format currency */
  function formatINR(val) {
    const num = Number(val) || 0;
    return "₹" + num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  /* ==========================================================================
     4. UI UPDATE & LOCALIZATION ENGINE
     ========================================================================== */
  function applyLanguage(newLang) {
    STATE.lang = newLang;
    saveState();
    document.documentElement.lang = newLang;

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Update lang select dropdown
    const langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.value = newLang;

    // Refresh dynamic views
    renderWorkerUI();
    renderManagerUI();
    updatePayEstimator();
  }

  /* Toast Notification */
  function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", "status");
    toast.innerHTML = `<span>${type === "success" ? "✅" : type === "warning" ? "⚠️" : "ℹ️"}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  /* ==========================================================================
     5. TIME & CLOCK ENGINE
     ========================================================================== */
  function startLiveClock() {
    const clockEl = document.getElementById("liveClockTime");
    const dateEl = document.getElementById("liveClockDate");

    function tick() {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      }
      if (dateEl) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString(STATE.lang === 'ta' ? 'ta-IN' : 'en-US', options);
      }

      // If shift active, update running duration counter
      if (STATE.activeShift) {
        updateActiveShiftTimer();
      }
    }

    tick();
    setInterval(tick, 1000);
  }

  function updateActiveShiftTimer() {
    if (!STATE.activeShift) return;

    const start = new Date(STATE.activeShift.startTime);
    const now = new Date();
    const diffMs = Math.max(0, now - start);

    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    const digitsEl = document.getElementById("activeShiftElapsedDigits");
    if (digitsEl) {
      digitsEl.textContent = `${pad(diffHrs)}:${pad(diffMins)}:${pad(diffSecs)}`;
    }

    // Check fatigue during active shift (>10 hrs threshold)
    const totalElapsedHrs = diffMs / 3600000;
    const fatigueBanner = document.getElementById("workerFatigueBanner");
    const fatigueKpi = document.getElementById("kpiWorkerFatigueLevel");

    if (totalElapsedHrs >= 10) {
      if (fatigueBanner) fatigueBanner.classList.remove("hidden");
      if (fatigueKpi) {
        fatigueKpi.textContent = t("statusFatigueWarning");
        fatigueKpi.className = "metric-value status-warning";
      }
    } else {
      if (fatigueBanner) fatigueBanner.classList.add("hidden");
      if (fatigueKpi) {
        fatigueKpi.textContent = t("statusSafe");
        fatigueKpi.className = "metric-value status-good";
      }
    }
  }

  /* ==========================================================================
     6. ATTENDANCE & GEOLOCATION LOGIC
     ========================================================================== */
  function handleCheckIn() {
    if (STATE.activeShift) {
      showToast("Shift already in progress", "warning");
      return;
    }

    const now = new Date();
    const newShift = {
      startTime: now.toISOString(),
      sector: STATE.currentSector,
      workerId: "W-8491",
      workerName: "Demo Worker",
      geoCaptured: !!STATE.tempGeo,
      geoCoords: STATE.tempGeo || "Location Optional"
    };

    STATE.activeShift = newShift;
    saveState();

    renderWorkerAttendanceState();
    showToast(t("toastClockInSuccess"), "success");
  }

  function handleCheckOut() {
    if (!STATE.activeShift) return;

    const start = new Date(STATE.activeShift.startTime);
    const end = new Date();
    const durationMs = Math.max(1000 * 60, end - start);
    // Round to 1 decimal place, minimum 0.1 hr for quick demo testing
    const hours = Math.max(0.1, Number((durationMs / 3600000).toFixed(1)));

    const regularHours = Math.min(8.0, hours);
    const overtimeHours = Number(Math.max(0, hours - regularHours).toFixed(1));

    // Rates from current pay estimator or defaults
    const baseRate = Number(document.getElementById("calcHourlyRate")?.value) || 150;
    const otMult = Number(document.getElementById("calcOtMultiplier")?.value) || 1.5;
    const deductions = Number(document.getElementById("calcDeductions")?.value) || 0;

    const regularPay = regularHours * baseRate;
    const otPay = overtimeHours * (baseRate * otMult);
    const netPay = Math.max(0, regularPay + otPay - deductions);

    const isFatigued = hours >= 10;

    const completedShift = {
      id: "WF-SH-" + new Date().getFullYear() + "-" + Math.floor(100 + Math.random() * 900),
      workerId: STATE.activeShift.workerId || "W-8491",
      workerName: STATE.activeShift.workerName || "Demo Worker",
      sector: STATE.activeShift.sector || STATE.currentSector,
      notes: STATE.activeShift.sector === "Hospital" ? "Hospital Shift (Active Tracker)" : "Construction Shift (Active Tracker)",
      startTime: STATE.activeShift.startTime,
      endTime: end.toISOString(),
      totalHours: hours,
      regularHours: regularHours,
      overtimeHours: overtimeHours,
      hourlyRate: baseRate,
      otMultiplier: otMult,
      deductions: deductions,
      regularPay: regularPay,
      otPay: otPay,
      netPay: netPay,
      fatigueAlert: isFatigued,
      geoCaptured: STATE.activeShift.geoCaptured,
      geoCoords: STATE.activeShift.geoCoords
    };

    // Prepend to shifts
    STATE.shifts.unshift(completedShift);
    STATE.activeShift = null;
    STATE.tempGeo = null;
    saveState();

    renderWorkerAttendanceState();
    renderWorkerUI();
    renderManagerUI();

    showToast(t("toastClockOutSuccess"), "success");

    // Automatically open Proof of Every Shift Receipt!
    openShiftReceipt(completedShift);
  }

  /* Manual Shift Logger (For Demo & Quick Evaluations) */
  function handleManualShiftSubmit(e) {
    e.preventDefault();
    const startVal = document.getElementById("manualStartTime")?.value;
    const endVal = document.getElementById("manualEndTime")?.value;
    const notesVal = document.getElementById("manualWorkerNotes")?.value || "";

    if (!startVal || !endVal) {
      alert("Please specify both start and end times.");
      return;
    }

    const start = new Date(startVal);
    const end = new Date(endVal);

    if (end <= start) {
      alert("End time must be after start time.");
      return;
    }

    const durationMs = end - start;
    const hours = Number((durationMs / 3600000).toFixed(1));
    const regularHours = Math.min(8.0, hours);
    const overtimeHours = Number(Math.max(0, hours - regularHours).toFixed(1));

    const baseRate = Number(document.getElementById("calcHourlyRate")?.value) || 150;
    const otMult = Number(document.getElementById("calcOtMultiplier")?.value) || 1.5;
    const deductions = Number(document.getElementById("calcDeductions")?.value) || 0;

    const regularPay = regularHours * baseRate;
    const otPay = overtimeHours * (baseRate * otMult);
    const netPay = Math.max(0, regularPay + otPay - deductions);

    const isFatigued = hours >= 10;

    const shift = {
      id: "WF-SH-" + new Date().getFullYear() + "-" + Math.floor(100 + Math.random() * 900),
      workerId: "W-8491",
      workerName: "Demo Worker",
      sector: STATE.currentSector,
      notes: notesVal || (STATE.currentSector === "Hospital" ? "Hospital Shift" : "Construction Shift"),
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      totalHours: hours,
      regularHours: regularHours,
      overtimeHours: overtimeHours,
      hourlyRate: baseRate,
      otMultiplier: otMult,
      deductions: deductions,
      regularPay: regularPay,
      otPay: otPay,
      netPay: netPay,
      fatigueAlert: isFatigued,
      geoCaptured: !!STATE.tempGeo,
      geoCoords: STATE.tempGeo || "Location Optional"
    };

    STATE.shifts.unshift(shift);
    saveState();

    renderWorkerUI();
    renderManagerUI();
    showToast("Completed shift recorded successfully!", "success");
    openShiftReceipt(shift);
  }

  /* Geolocation Handler (Strictly on user request, single shot) */
  function requestWorksiteLocation() {
    const geoText = document.getElementById("geoStatusText");
    const btn = document.getElementById("btnRequestLocation");

    if (!navigator.geolocation) {
      if (geoText) geoText.textContent = "Geolocation not supported in browser.";
      showToast(t("toastGeoDenied"), "warning");
      return;
    }

    if (geoText) geoText.textContent = "Requesting one-time location...";
    if (btn) btn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);
        STATE.tempGeo = `GPS Verified: ${lat}°N, ${lng}°E`;
        if (geoText) geoText.textContent = t("geoCaptured") + ` (${lat}, ${lng})`;
        if (btn) btn.disabled = false;
        showToast(t("toastGeoSuccess"), "success");
      },
      (error) => {
        console.info("Geolocation skipped or denied:", error.message);
        STATE.tempGeo = "Location Optional (Permission Denied/Unavailable)";
        if (geoText) geoText.textContent = t("geoNotCaptured");
        if (btn) btn.disabled = false;
        showToast(t("toastGeoDenied"), "warning");
      },
      { timeout: 8000, maximumAge: 60000, enableHighAccuracy: false }
    );
  }

  /* Render Attendance Button States */
  function renderWorkerAttendanceState() {
    const btnIn = document.getElementById("btnClockIn");
    const btnOut = document.getElementById("btnClockOut");
    const tag = document.getElementById("clockStatusTag");
    const tagText = document.getElementById("clockStatusText");
    const timerBox = document.getElementById("activeShiftTimerBox");
    const metaEl = document.getElementById("activeShiftStartTimeMeta");
    const kpiStatus = document.getElementById("kpiWorkerShiftStatus");

    if (STATE.activeShift) {
      if (btnIn) btnIn.disabled = true;
      if (btnOut) btnOut.disabled = false;
      if (tag) {
        tag.className = "clock-status-tag status-online";
      }
      if (tagText) tagText.textContent = t("statusClockedIn");
      if (timerBox) timerBox.classList.remove("hidden");
      if (kpiStatus) kpiStatus.textContent = t("statusClockedIn");

      const startDate = new Date(STATE.activeShift.startTime);
      if (metaEl) {
        metaEl.textContent = `Started: ${startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      }
    } else {
      if (btnIn) btnIn.disabled = false;
      if (btnOut) btnOut.disabled = true;
      if (tag) {
        tag.className = "clock-status-tag status-offline";
      }
      if (tagText) tagText.textContent = t("statusClockedOut");
      if (timerBox) timerBox.classList.add("hidden");
      if (kpiStatus) kpiStatus.textContent = t("statusClockedOut");
    }
  }

  /* ==========================================================================
     7. TRANSPARENT PAY ESTIMATOR ENGINE
     ========================================================================== */
  function updatePayEstimator() {
    const regHrsInput = document.getElementById("calcRegularHours");
    const otHrsInput = document.getElementById("calcOvertimeHours");
    const rateInput = document.getElementById("calcHourlyRate");
    const multSelect = document.getElementById("calcOtMultiplier");
    const dedInput = document.getElementById("calcDeductions");

    const regHrs = Math.max(0, parseFloat(regHrsInput?.value) || 0);
    const otHrs = Math.max(0, parseFloat(otHrsInput?.value) || 0);
    const baseRate = Math.max(0, parseFloat(rateInput?.value) || 0);
    const otMult = Math.max(1, parseFloat(multSelect?.value) || 1.5);
    const deductions = Math.max(0, parseFloat(dedInput?.value) || 0);

    const otRate = baseRate * otMult;
    const regPay = regHrs * baseRate;
    const otPay = otHrs * otRate;
    const grossPay = regPay + otPay;
    const netPay = Math.max(0, grossPay - deductions);

    // Update breakdown displays
    const regHrsDisp = document.getElementById("calcRegularHoursDisplay");
    const regRateDisp = document.getElementById("calcRegularRateDisplay");
    const regAmtDisp = document.getElementById("calcRegularAmount");
    const otHrsDisp = document.getElementById("calcOtHoursDisplay");
    const otRateDisp = document.getElementById("calcOtRateDisplay");
    const otAmtDisp = document.getElementById("calcOvertimeAmount");
    const grossDisp = document.getElementById("calcGrossAmount");
    const dedDisp = document.getElementById("calcDeductionsAmount");
    const netDisp = document.getElementById("calcNetAmount");

    if (regHrsDisp) regHrsDisp.textContent = regHrs;
    if (regRateDisp) regRateDisp.textContent = baseRate;
    if (regAmtDisp) regAmtDisp.textContent = formatINR(regPay);

    if (otHrsDisp) otHrsDisp.textContent = otHrs;
    if (otRateDisp) otRateDisp.textContent = otRate.toFixed(0);
    if (otAmtDisp) otAmtDisp.textContent = "+ " + formatINR(otPay);

    if (grossDisp) grossDisp.textContent = formatINR(grossPay);
    if (dedDisp) dedDisp.textContent = "- " + formatINR(deductions);
    if (netDisp) netDisp.textContent = formatINR(netPay);
  }

  /* ==========================================================================
     8. SAFETY REPORTING ENGINE
     ========================================================================== */
  function handleSafetyReportSubmit(e) {
    e.preventDefault();

    const sectorEl = document.getElementById("safetyIndustry");
    const catEl = document.getElementById("safetyCategory");
    const descEl = document.getElementById("safetyDescription");
    const anonEl = document.getElementById("safetyIsAnonymous");
    const workerIdEl = document.getElementById("safetyWorkerId");

    const desc = descEl?.value.trim();
    if (!desc || desc.length < 5) {
      alert("Please provide a clearer description of the workplace safety concern (at least 5 characters).");
      return;
    }

    const isAnon = anonEl ? anonEl.checked : true;
    const enteredId = workerIdEl?.value.trim();
    const reporterId = isAnon ? t("anonymousWorker") : (enteredId || "W-8491");

    const reportId = "WF-SAF-" + new Date().getFullYear() + "-" + Math.floor(100 + Math.random() * 900);
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10) + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newReport = {
      id: reportId,
      sector: sectorEl ? sectorEl.value : STATE.currentSector,
      category: catEl ? catEl.value : "Workplace Hazards",
      description: desc,
      isAnonymous: isAnon,
      workerId: reporterId,
      submittedAt: dateStr,
      status: "Submitted"
    };

    STATE.safetyReports.unshift(newReport);
    saveState();

    // Show Confirmation box with Reference #
    const confBox = document.getElementById("safetyConfirmationBox");
    const refBadge = document.getElementById("safetySuccessRef");
    if (confBox) confBox.classList.remove("hidden");
    if (refBadge) refBadge.textContent = reportId;

    // Reset Form
    if (descEl) descEl.value = "";

    renderWorkerUI();
    renderManagerUI();
    showToast(t("toastReportSuccess"), "success");
  }

  /* ==========================================================================
     9. WORKER DASHBOARD RENDERING
     ========================================================================== */
  function renderWorkerUI() {
    renderWorkerAttendanceState();

    // Industry sector badge & text updates
    const sectorBadge = document.getElementById("attendanceSectorBadge");
    if (sectorBadge) {
      sectorBadge.textContent = STATE.currentSector === "Hospital" ? t("sectorHospital") : t("sectorConstruction");
    }

    // Worker overview KPIs
    const todayStr = new Date().toISOString().slice(0, 10);
    const shiftsToday = STATE.shifts.filter(s => s.startTime && s.startTime.startsWith(todayStr));
    const totalTodayHours = shiftsToday.reduce((acc, s) => acc + (s.totalHours || 0), 0);
    const totalTodayPay = shiftsToday.reduce((acc, s) => acc + (s.netPay || 0), 0);

    const kpiHours = document.getElementById("kpiWorkerLoggedHours");
    const kpiPay = document.getElementById("kpiWorkerEstPay");
    if (kpiHours) kpiHours.textContent = totalTodayHours.toFixed(1) + " hrs";
    if (kpiPay) kpiPay.textContent = formatINR(totalTodayPay);

    // Shifts History Table
    const tbody = document.getElementById("workerShiftsTableBody");
    if (tbody) {
      tbody.innerHTML = "";
      if (STATE.shifts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-light)">No shift records logged yet. Check in to record your shift.</td></tr>`;
      } else {
        STATE.shifts.slice(0, 8).forEach(s => {
          const tr = document.createElement("tr");
          const date = new Date(s.startTime);
          const dateFormatted = date.toLocaleDateString(STATE.lang === "ta" ? "ta-IN" : "en-US", { month: "short", day: "numeric" });
          const sectorName = s.sector === "Hospital" ? t("sectorHospital") : t("sectorConstruction");
          const fatigueTag = s.fatigueAlert
            ? `<span class="status-pill status-submitted">⚠️ ${t("statusFatigueWarning")}</span>`
            : `<span class="status-pill status-resolved">✅ ${t("statusSafe")}</span>`;

          tr.innerHTML = `
            <td>
              <strong>${dateFormatted}</strong>
              <div class="calc-subtext">${s.id}</div>
            </td>
            <td>${sectorName}</td>
            <td><strong>${s.totalHours} hrs</strong> (${s.regularHours}r / ${s.overtimeHours}ot)</td>
            <td>${fatigueTag}</td>
            <td><strong>${formatINR(s.netPay)}</strong></td>
            <td>
              <button type="button" class="btn btn-outline btn-sm btn-view-receipt" data-shift-id="${s.id}">
                🧾 ${t("colReceipt")}
              </button>
            </td>
          `;
          tbody.appendChild(tr);
        });

        // Attach receipt buttons
        tbody.querySelectorAll(".btn-view-receipt").forEach(btn => {
          btn.addEventListener("click", () => {
            const shiftId = btn.getAttribute("data-shift-id");
            const found = STATE.shifts.find(s => s.id === shiftId);
            if (found) openShiftReceipt(found);
          });
        });
      }
    }

    // Worker's Submitted Safety Reports Table
    const safetyTbody = document.getElementById("workerSafetyTableBody");
    if (safetyTbody) {
      safetyTbody.innerHTML = "";
      if (STATE.safetyReports.length === 0) {
        safetyTbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:1rem; color:var(--text-light)">No safety reports submitted yet.</td></tr>`;
      } else {
        STATE.safetyReports.slice(0, 5).forEach(r => {
          const tr = document.createElement("tr");
          let statusPillClass = "status-submitted";
          let statusText = t("statusSubmitted");
          if (r.status === "Under Review") {
            statusPillClass = "status-review";
            statusText = t("statusReview");
          } else if (r.status === "Resolved") {
            statusPillClass = "status-resolved";
            statusText = t("statusResolved");
          }

          tr.innerHTML = `
            <td><code>${r.id}</code></td>
            <td><strong>${r.category}</strong></td>
            <td><small>${r.submittedAt}</small></td>
            <td><span class="status-pill ${statusPillClass}">${statusText}</span></td>
          `;
          safetyTbody.appendChild(tr);
        });
      }
    }
  }

  /* ==========================================================================
     10. MANAGER DASHBOARD RENDERING & ACTIONS
     ========================================================================== */
  function renderManagerUI() {
    const filterEl = document.getElementById("managerSectorFilter");
    const activeFilter = filterEl ? filterEl.value : "ALL";

    // Filter shifts
    const filteredShifts = activeFilter === "ALL"
      ? STATE.shifts
      : STATE.shifts.filter(s => s.sector === activeFilter);

    // Summary KPIs
    const totalHours = filteredShifts.reduce((acc, s) => acc + (s.totalHours || 0), 0);
    const fatigueCount = filteredShifts.filter(s => s.fatigueAlert).length;
    const pendingSafetyCount = STATE.safetyReports.filter(r => r.status !== "Resolved").length;

    const kpiShiftsEl = document.getElementById("kpiMgrTotalShifts");
    const kpiHoursEl = document.getElementById("kpiMgrTotalHours");
    const kpiFatigueEl = document.getElementById("kpiMgrFatigueAlerts");
    const kpiSafetyEl = document.getElementById("kpiMgrPendingSafety");
    const badgeUnresolved = document.getElementById("mgrUnresolvedCountBadge");

    if (kpiShiftsEl) kpiShiftsEl.textContent = filteredShifts.length;
    if (kpiHoursEl) kpiHoursEl.textContent = totalHours.toFixed(1) + " hrs";
    if (kpiFatigueEl) kpiFatigueEl.textContent = fatigueCount;
    if (kpiSafetyEl) kpiSafetyEl.textContent = pendingSafetyCount;
    if (badgeUnresolved) badgeUnresolved.textContent = `${pendingSafetyCount} Unresolved Reports`;

    // Manager Shifts Table
    const mgrShiftsTbody = document.getElementById("mgrShiftsTableBody");
    if (mgrShiftsTbody) {
      mgrShiftsTbody.innerHTML = "";
      if (filteredShifts.length === 0) {
        mgrShiftsTbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-light)">No shifts matching current filter.</td></tr>`;
      } else {
        filteredShifts.forEach(s => {
          const tr = document.createElement("tr");
          const start = new Date(s.startTime);
          const end = new Date(s.endTime);
          const timeRange = `${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
          const sectorLabel = s.sector === "Hospital" ? t("sectorHospital") : t("sectorConstruction");
          const fatigueTag = s.fatigueAlert
            ? `<span class="badge badge-warning">⚠️ High Fatigue</span>`
            : `<span class="badge badge-success">Normal</span>`;

          tr.innerHTML = `
            <td><code>${s.id}</code></td>
            <td><strong>${s.workerId}</strong></td>
            <td>${sectorLabel}</td>
            <td>${timeRange}</td>
            <td><strong>${s.totalHours} hrs</strong></td>
            <td>${s.overtimeHours > 0 ? `<strong class="text-accent">+${s.overtimeHours} hrs</strong>` : "None"}</td>
            <td>${fatigueTag}</td>
            <td>
              <button type="button" class="btn btn-outline btn-sm btn-mgr-view-receipt" data-shift-id="${s.id}">
                🧾 ${t("colReceipt")}
              </button>
            </td>
          `;
          mgrShiftsTbody.appendChild(tr);
        });

        // Receipt view handlers
        mgrShiftsTbody.querySelectorAll(".btn-mgr-view-receipt").forEach(btn => {
          btn.addEventListener("click", () => {
            const shiftId = btn.getAttribute("data-shift-id");
            const found = STATE.shifts.find(s => s.id === shiftId);
            if (found) openShiftReceipt(found);
          });
        });
      }
    }

    // Manager Safety Triage Table
    const mgrSafetyTbody = document.getElementById("mgrSafetyTableBody");
    if (mgrSafetyTbody) {
      mgrSafetyTbody.innerHTML = "";
      if (STATE.safetyReports.length === 0) {
        mgrSafetyTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.5rem; color:var(--text-light)">No safety concerns submitted.</td></tr>`;
      } else {
        STATE.safetyReports.forEach(r => {
          const tr = document.createElement("tr");
          const reporterDisplay = r.isAnonymous
            ? `<span class="badge badge-info">🔒 ${t("anonymousWorker")}</span>`
            : `<strong>${r.workerId}</strong>`;

          tr.innerHTML = `
            <td><code>${r.id}</code></td>
            <td>${r.sector === "Hospital" ? t("sectorHospital") : t("sectorConstruction")}</td>
            <td><strong>${r.category}</strong></td>
            <td style="max-width:280px; font-size:0.85rem;">${escapeHTML(r.description)}</td>
            <td>${reporterDisplay}</td>
            <td>
              <span class="status-pill ${r.status === "Resolved" ? "status-resolved" : r.status === "Under Review" ? "status-review" : "status-submitted"}">
                ${r.status}
              </span>
            </td>
            <td>
              <select class="form-select mgr-status-select" data-report-id="${r.id}" style="min-height:34px; font-size:0.825rem; padding:0.25rem 0.5rem;">
                <option value="Submitted" ${r.status === "Submitted" ? "selected" : ""}>${t("statusSubmitted")}</option>
                <option value="Under Review" ${r.status === "Under Review" ? "selected" : ""}>${t("statusReview")}</option>
                <option value="Resolved" ${r.status === "Resolved" ? "selected" : ""}>${t("statusResolved")}</option>
              </select>
            </td>
          `;
          mgrSafetyTbody.appendChild(tr);
        });

        // Status update change events
        mgrSafetyTbody.querySelectorAll(".mgr-status-select").forEach(sel => {
          sel.addEventListener("change", (e) => {
            const repId = sel.getAttribute("data-report-id");
            const newStatus = e.target.value;
            const targetReport = STATE.safetyReports.find(r => r.id === repId);
            if (targetReport) {
              targetReport.status = newStatus;
              saveState();
              renderManagerUI();
              renderWorkerUI();
              showToast(t("toastStatusUpdated"), "success");
            }
          });
        });
      }
    }
  }

  function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ==========================================================================
     11. SIGNATURE FEATURE: PROOF OF EVERY SHIFT (RECEIPT GENERATOR)
     ========================================================================== */
  function openShiftReceipt(shift) {
    if (!shift) {
      if (STATE.shifts.length > 0) {
        shift = STATE.shifts[0];
      } else {
        showToast("No shift records available yet.", "warning");
        return;
      }
    }

    const modal = document.getElementById("receiptModal");
    if (!modal) return;

    // Fill metadata
    const recShiftId = document.getElementById("recShiftId");
    const recDate = document.getElementById("recDateIssued");
    const recWorkerRef = document.getElementById("recWorkerRef");
    const recSector = document.getElementById("recSector");
    const recStartTime = document.getElementById("recStartTime");
    const recEndTime = document.getElementById("recEndTime");
    const recStartGeo = document.getElementById("recStartGeo");
    const recEndGeo = document.getElementById("recEndGeo");

    const recTotalHours = document.getElementById("recTotalHours");
    const recRegularHours = document.getElementById("recRegularHours");
    const recOvertimeHours = document.getElementById("recOvertimeHours");

    const recRegSub = document.getElementById("recRegularMathSub");
    const recRegAmount = document.getElementById("recRegularPayAmount");
    const recOtSub = document.getElementById("recOvertimeMathSub");
    const recOtAmount = document.getElementById("recOvertimePayAmount");
    const recDedSub = document.getElementById("recDeductionsMathSub");
    const recDedAmount = document.getElementById("recDeductionsAmount");
    const recNetTotal = document.getElementById("recNetTotalAmount");

    const recFatigueBox = document.getElementById("recFatigueBox");
    const recFatigueLabel = document.getElementById("recFatigueLabel");
    const recFatigueText = document.getElementById("recFatigueText");
    const recHashToken = document.getElementById("recHashToken");

    const startDate = new Date(shift.startTime);
    const endDate = new Date(shift.endTime);

    if (recShiftId) recShiftId.textContent = shift.id;
    if (recDate) recDate.textContent = startDate.toLocaleDateString(STATE.lang === "ta" ? "ta-IN" : "en-US", { year: "numeric", month: "short", day: "numeric" });
    if (recWorkerRef) recWorkerRef.textContent = `${shift.workerName} (${shift.workerId})`;
    if (recSector) recSector.textContent = `${shift.sector === "Hospital" ? t("sectorHospital") : t("sectorConstruction")} — ${shift.notes || "Regular Shift"}`;

    if (recStartTime) recStartTime.textContent = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (recEndTime) recEndTime.textContent = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (recStartGeo) recStartGeo.textContent = shift.geoCaptured ? `📍 ${shift.geoCoords}` : "📍 Worksite Verified";
    if (recEndGeo) recEndGeo.textContent = "📍 Regular Exit Completed";

    if (recTotalHours) recTotalHours.textContent = `${shift.totalHours} hrs`;
    if (recRegularHours) recRegularHours.textContent = `${shift.regularHours} hrs`;
    if (recOvertimeHours) recOvertimeHours.textContent = `${shift.overtimeHours} hrs`;

    // Pay breakdown
    const baseRate = shift.hourlyRate || 150;
    const otMult = shift.otMultiplier || 1.5;
    const otRate = baseRate * otMult;

    if (recRegSub) recRegSub.textContent = `${shift.regularHours} hrs @ ${formatINR(baseRate)}/hr`;
    if (recRegAmount) recRegAmount.textContent = formatINR(shift.regularPay);

    if (recOtSub) recOtSub.textContent = `${shift.overtimeHours} hrs @ ${otMult}× (${formatINR(otRate)}/hr)`;
    if (recOtAmount) recOtAmount.textContent = "+ " + formatINR(shift.otPay);

    if (recDedSub) recDedSub.textContent = shift.deductions > 0 ? "Agreed statutory or shift deductions" : "Agreed deductions (None)";
    if (recDedAmount) recDedAmount.textContent = "- " + formatINR(shift.deductions || 0);

    if (recNetTotal) recNetTotal.textContent = formatINR(shift.netPay);

    // Fatigue status
    if (shift.fatigueAlert) {
      if (recFatigueBox) recFatigueBox.style.borderColor = "var(--color-accent)";
      if (recFatigueLabel) recFatigueLabel.textContent = t("recFatigueWarningTitle");
      if (recFatigueText) recFatigueText.textContent = t("recFatigueWarningMsg");
    } else {
      if (recFatigueBox) recFatigueBox.style.borderColor = "var(--color-success)";
      if (recFatigueLabel) recFatigueLabel.textContent = t("recFatigueNormalTitle");
      if (recFatigueText) recFatigueText.textContent = t("recFatigueNormalMsg");
    }

    // Safety Reports association check
    const recSafetyText = document.getElementById("recSafetyText");
    const reportsForSector = STATE.safetyReports.filter(r => r.sector === shift.sector);
    if (recSafetyText) {
      if (reportsForSector.length > 0) {
        recSafetyText.textContent = `${reportsForSector.length} concern(s) on file for ${shift.sector}. Latest: "${reportsForSector[0].category}" (${reportsForSector[0].status}).`;
      } else {
        recSafetyText.textContent = t("recNoSafetyFiled");
      }
    }

    // Random verification hash
    if (recHashToken) {
      recHashToken.textContent = `WF-VRF-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
    }

    modal.classList.remove("hidden");
  }

  function closeShiftReceipt() {
    const modal = document.getElementById("receiptModal");
    if (modal) modal.classList.add("hidden");
  }

  /* ==========================================================================
     12. NAVIGATION & EVENT BINDINGS
     ========================================================================== */
  function setupNavigation() {
    const tabWorker = document.getElementById("tabWorker");
    const tabManager = document.getElementById("tabManager");
    const viewLanding = document.getElementById("viewLanding");
    const viewWorker = document.getElementById("viewWorker");
    const viewManager = document.getElementById("viewManager");
    const brandLogo = document.getElementById("brandLogo");

    function switchToWorker() {
      STATE.activeRole = "worker";
      tabWorker.classList.add("active");
      tabWorker.setAttribute("aria-selected", "true");
      tabManager.classList.remove("active");
      tabManager.setAttribute("aria-selected", "false");

      viewLanding.classList.add("hidden");
      viewWorker.classList.add("active");
      viewManager.classList.remove("active");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchToManager() {
      STATE.activeRole = "manager";
      tabManager.classList.add("active");
      tabManager.setAttribute("aria-selected", "true");
      tabWorker.classList.remove("active");
      tabWorker.setAttribute("aria-selected", "false");

      viewLanding.classList.add("hidden");
      viewWorker.classList.remove("active");
      viewManager.classList.add("active");
      renderManagerUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (tabWorker) tabWorker.addEventListener("click", switchToWorker);
    if (tabManager) tabManager.addEventListener("click", switchToManager);

    const btnHeroWorker = document.getElementById("btnGetStartedWorker");
    const btnHeroMgr = document.getElementById("btnGetStartedManager");
    if (btnHeroWorker) btnHeroWorker.addEventListener("click", switchToWorker);
    if (btnHeroMgr) btnHeroMgr.addEventListener("click", switchToManager);

    if (brandLogo) {
      brandLogo.addEventListener("click", (e) => {
        e.preventDefault();
        viewLanding.classList.remove("hidden");
        viewWorker.classList.remove("active");
        viewManager.classList.remove("active");
        tabWorker.classList.remove("active");
        tabManager.classList.remove("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Language Selector
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = STATE.lang;
      langSelect.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
      });
    }

    // Sector radio selectors
    const radioConst = document.getElementById("radioSectorConstruction");
    const radioHosp = document.getElementById("radioSectorHospital");
    if (radioConst) {
      radioConst.addEventListener("change", () => {
        if (radioConst.checked) {
          STATE.currentSector = "Construction";
          renderWorkerUI();
        }
      });
    }
    if (radioHosp) {
      radioHosp.addEventListener("change", () => {
        if (radioHosp.checked) {
          STATE.currentSector = "Hospital";
          renderWorkerUI();
        }
      });
    }

    // Geolocation Request Button
    const btnGeo = document.getElementById("btnRequestLocation");
    if (btnGeo) btnGeo.addEventListener("click", requestWorksiteLocation);

    // Attendance buttons
    const btnClockIn = document.getElementById("btnClockIn");
    const btnClockOut = document.getElementById("btnClockOut");
    if (btnClockIn) btnClockIn.addEventListener("click", handleCheckIn);
    if (btnClockOut) btnClockOut.addEventListener("click", handleCheckOut);

    // Manual shift form
    const formManual = document.getElementById("formManualShift");
    if (formManual) {
      // Set sensible default times for manual logger
      const now = new Date();
      const past = new Date(now.getTime() - 8.5 * 3600000);
      const startIn = document.getElementById("manualStartTime");
      const endIn = document.getElementById("manualEndTime");
      if (startIn) startIn.value = past.toISOString().slice(0, 16);
      if (endIn) endIn.value = now.toISOString().slice(0, 16);

      formManual.addEventListener("submit", handleManualShiftSubmit);
    }

    // Pay Estimator inputs
    ["calcRegularHours", "calcOvertimeHours", "calcHourlyRate", "calcOtMultiplier", "calcDeductions"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", updatePayEstimator);
        el.addEventListener("change", updatePayEstimator);
      }
    });

    // Anonymous toggle in safety form
    const anonToggle = document.getElementById("safetyIsAnonymous");
    const workerIdGroup = document.getElementById("workerIdGroup");
    if (anonToggle && workerIdGroup) {
      anonToggle.addEventListener("change", () => {
        workerIdGroup.style.display = anonToggle.checked ? "none" : "block";
      });
    }

    // Safety report form
    const formSafety = document.getElementById("formSafetyReport");
    if (formSafety) formSafety.addEventListener("submit", handleSafetyReportSubmit);

    // Latest receipt button
    const btnLatestRec = document.getElementById("btnGenerateLastReceipt");
    if (btnLatestRec) {
      btnLatestRec.addEventListener("click", () => {
        openShiftReceipt(STATE.shifts[0]);
      });
    }

    // Modal close buttons
    const btnCloseRec = document.getElementById("btnCloseReceiptModal");
    const btnDismissRec = document.getElementById("btnDismissReceipt");
    if (btnCloseRec) btnCloseRec.addEventListener("click", closeShiftReceipt);
    if (btnDismissRec) btnDismissRec.addEventListener("click", closeShiftReceipt);

    // Modal background click close
    const modalOverlay = document.getElementById("receiptModal");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeShiftReceipt();
      });
    }

    // Print receipt
    const btnPrint = document.getElementById("btnPrintReceipt");
    if (btnPrint) {
      btnPrint.addEventListener("click", () => {
        window.print();
      });
    }

    // Manager sector filter
    const mgrFilter = document.getElementById("managerSectorFilter");
    if (mgrFilter) {
      mgrFilter.addEventListener("change", renderManagerUI);
    }

    // Reset demo data utility
    const btnReset = document.getElementById("btnResetDemoData");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("Reset all shifts and safety reports back to prototype demonstration defaults?")) {
          STATE.shifts = JSON.parse(JSON.stringify(DEFAULT_SHIFTS));
          STATE.safetyReports = JSON.parse(JSON.stringify(DEFAULT_SAFETY_REPORTS));
          STATE.activeShift = null;
          saveState();
          renderWorkerUI();
          renderManagerUI();
          showToast(t("toastDemoReset"), "success");
        }
      });
    }
  }

  /* ==========================================================================
     13. APPLICATION INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    startLiveClock();
    applyLanguage(STATE.lang);
    renderWorkerUI();
    renderManagerUI();
    updatePayEstimator();
  });

})();
