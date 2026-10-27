# WorkFair — Fair Work, Safer Workers 🌐

**A Mobile-First Web Application for Transparent Shift Tracking, Pay Estimation, and Workplace Safety**  
*Built for the UN Sustainable Development Goal Hackathon (UN SDG 8: Decent Work & Economic Growth)*

---

## 1. What WorkFair Does

Across construction worksites and hospital support departments, millions of frontline workers rely on handwritten paper logs, fragmented spreadsheets, or informal chat messages to track hours, overtime, and safety hazards. This lack of transparency causes:
- **Disputed pay and uncompensated overtime**
- **Dangerous fatigue levels** from unmonitored back-to-back shifts
- **Unreported hazards** due to fear of reprisal or lack of confidential reporting channels
- **Poor management oversight** across dynamic worksites

**WorkFair** provides frontline workers and site supervisors with a clean, trustworthy digital companion:
1. **One-Touch Check-in & Attendance** with optional, single-shot GPS verification.
2. **Shift Fatigue Awareness** alerting workers and supervisors when shifts exceed safe thresholds (10+ hours).
3. **Transparent Pay Estimator** showing the exact formula for regular wages, overtime premiums, and deductions.
4. **Confidential Safety Reporting** supporting anonymous hazard submissions with reference tracking.
5. **"Proof of Every Shift" (Shift Receipt)** — our signature feature providing workers with a verifiable, printable receipt detailing hours, pay calculations, fatigue status, and hazard links.
6. **Bilingual Inclusion** with full English and Tamil (தமிழ்) translation across all dashboards and receipts.

---

## 2. Alignment with UN Sustainable Development Goal 8

WorkFair directly addresses **UN SDG 8: Decent Work and Economic Growth**:
- **Target 8.8 (Safe and Secure Working Environments):** By providing instant, non-retaliatory safety hazard reporting, anonymous concern escalation, and proactive fatigue alerts, WorkFair helps prevent injuries and protect physical health.
- **Target 8.5 (Decent Work & Equal Pay for Work of Equal Value):** By making overtime calculations and wage breakdowns 100% transparent, workers understand exactly what they are owed without hidden deductions.

---

## 3. Supported Industries

- 🏗️ **Construction:** Heavy labor tracking, scaffolding/machinery safety checks, daily wage accounting, and optional worksite GPS capture.
- 🏥 **Hospital Support Staff:** Sanitation workers, ward attendants, and nursing aides; continuous shift tracking, night shift overtime multipliers, and patient-safety fatigue alerts.

---

## 4. Project Files & Architecture

WorkFair is purposefully engineered to be **lightweight (<1 MB)**, beginner-friendly, and require **zero build tools, zero npm packages, and zero terminal commands** for local use:

| File | Purpose |
| :--- | :--- |
| `index.html` | Semantic, accessible HTML5 structure containing the Landing Page, Worker Dashboard, Manager Dashboard, and Shift Receipt Modal. |
| `style.css` | Mobile-first CSS design system featuring high-contrast typography, responsive grids, touch-friendly buttons (44px min), status badges, and print styles for shift receipts. |
| `script.js` | Pure browser JavaScript implementing bilingual dictionary switching (`i18n`), real-time timers, pay calculator math, local state persistence, and manager-worker synchronization. |
| `nginx.conf` | Optimized static web server configuration supporting Google Cloud Run's port specification (`8080`), gzip compression, and security headers. |
| `Dockerfile` | Lightweight production container based on `nginx:alpine` to package WorkFair for Google Cloud Run deployment without Node.js. |
| `README.md` | Comprehensive guide, testing checklist, and cloud deployment manual. |

---

## 5. How to Run Locally (Zero Setup)

You **do not need Node.js, npm, or a terminal** to preview or test WorkFair:

1. Locate the project folder on your computer (`c:\workfairantigravity`).
2. **Double-click `index.html`** or right-click `index.html` and choose **Open with Google Chrome** (or Microsoft Edge / Mozilla Firefox / Safari).
3. The application will immediately run in your browser with full offline functionality!

---

## 6. How to Test Major Features

### A. Testing English and Tamil (தமிழ்) Language Switcher
1. Look at the top navigation bar. Click the language dropdown (`English (EN) / தமிழ் (Tamil)`).
2. Switch to **தமிழ் (Tamil)**.
3. Observe all headings, labels, button texts, metric labels, pay breakdowns, and table headers translate seamlessly.
4. Switch back to **English** anytime; your selection persists across page refreshes.

### B. Testing Construction Check-in & Optional GPS
1. Select the **Worker View** tab in the navigation bar.
2. Ensure the active industry is set to **Construction** 🏗️.
3. (Optional) Click **Add Worksite GPS**: Your browser will ask for one-time permission. If granted, your GPS coordinates are noted. If denied, a friendly notification confirms you can proceed safely without GPS.
4. Click **Check In (Start Shift)**: The live timer starts counting elapsed duration, the status badge changes to "Shift in Progress", and Check-In is disabled while Check-Out becomes active.
5. Click **Check Out (End Shift)**: The shift is finalized, calculated, logged into history, and automatically opens the **Shift Receipt**!

### C. Testing Hospital Shift Tracking & Fatigue Awareness
1. In Worker Dashboard, switch the active industry to **Hospital Support** 🏥.
2. Expand the accordion **"Log a Past or Completed Shift (Demo Testing)"**.
3. Set the start time to 11.5 hours ago (e.g. 07:00 AM to 06:30 PM).
4. Click **Record Completed Shift**.
5. Observe the high-contrast **Fatigue Advisory Warning** alert banner informing the worker that prolonged shifts (>10 hours) increase exhaustion and injury risk.
6. Notice the disclaimer clarifying that this is an operational guideline and not a medical diagnosis.

### D. Testing the Transparent Pay Estimator
1. Scroll to the **Transparent Pay Estimator** card on the Worker Dashboard.
2. Change the **Regular Hours** to `8` and **Overtime Hours** to `3`.
3. Adjust the **Base Hourly Rate** (e.g., `₹200`) and choose the **2.0× Overtime Multiplier**.
4. Enter `₹100` under **Manual Deductions**.
5. Watch the mathematical breakdown update in real time:
   - Regular Pay: `8 hrs × ₹200 = ₹1,600.00`
   - Overtime Pay: `3 hrs × (₹200 × 2.0) = ₹1,200.00`
   - Gross Pay: `₹2,800.00`
   - Deductions: `- ₹100.00`
   - **Final Estimated Earnings: `₹2,700.00`**

### E. Testing Safety Concern Submission (Voice a Safety Concern)
1. In the **Voice a Safety Concern** form, select **Protective Equipment (PPE)**.
2. Enter a description: *"Welding safety goggles in sector B are cracked."*
3. Keep **"Submit as Anonymous Report"** checked.
4. Click **Submit Safety Report**.
5. You will receive an immediate confirmation with an official Reference Number (e.g., `WF-SAF-2026-XXXX`).
6. Click over to the **Manager View**: your submitted concern appears immediately under **Workplace Safety Triage** with the submitter marked as `🔒 Anonymous Worker`.

### F. Testing Manager Oversight Dashboard
1. Click the **Manager View** tab.
2. Check the 4 KPI summary cards: Total Shifts, Total Work Hours, Fatigue Warnings, and Pending Safety Reports.
3. Test the **Filter Industry** dropdown: filter between *All Industries*, *Construction*, and *Hospital Support*.
4. Under **Workplace Safety Triage**, locate any report and use the **Update Status** dropdown to change its state from `Submitted` to `Under Review` or `Resolved`.
5. Switch back to **Worker View**: the worker's safety concerns table reflects the updated status in real time.

### G. Testing the Signature Feature: "Proof of Every Shift" (Shift Receipt)
1. On any shift in the table, click the **Receipt (🧾)** button.
2. Review the clean, receipt-style modal displaying:
   - Receipt Reference ID & Verification Token
   - Worksite Check-in / Check-out timestamps
   - Regular vs. Overtime hours
   - Complete wage breakdown formula
   - Fatigue advisory status
   - Associated safety records
3. Click **Print Shift Receipt / Save PDF**:
   - The print preview will open with our dedicated print stylesheet (`@media print`), stripping away navigation bars, buttons, and backgrounds so only the official document is printed or saved as a PDF!

---

## 7. Current Prototype Limitations

- **Local Storage Scope:** Data is saved in the browser's `localStorage`. Shift entries and status updates synchronize instantaneously across tabs in the same browser, but do not yet synchronize across separate physical devices.
- **Demo Pay Rates:** Rates (e.g., ₹150/hr) and multipliers (1.5×) are demonstration figures and clearly labeled as non-official estimates.
- **Fatigue Threshold:** Demonstrated at 10 hours for hackathon evaluation purposes; real-world deployments would tailor thresholds to sector agreements.

---

## 8. Roadmap: How to Integrate Firebase for Multi-Device Shared Storage

To transition WorkFair from a local prototype to a multi-tenant cloud application:

1. **Authentication:**
   - Add Firebase Authentication (`firebase.auth()`) using Phone OTP or Google Sign-In for workers, and Email/Password with Role Claims (`role: 'worker' | 'manager'`) for supervisors.
2. **Cloud Firestore Schema:**
   - `/shifts/{shiftId}`: Store `workerId`, `sector`, `startTime`, `endTime`, `totalHours`, `netPay`, `geoCoords`.
   - `/safety_reports/{reportId}`: Store `category`, `description`, `isAnonymous`, `status`, `timestamp`. If `isAnonymous == true`, Firestore Security Rules prevent non-admin clients from querying `workerId`.
3. **Realtime Synchronization:**
   - Replace `localStorage` calls with Firestore snapshot listeners (`onSnapshot()`) so shifts and safety reports update across workers' and managers' phones in real time.
4. **Cloud Functions:**
   - Automatically trigger SMS alerts (via Twilio / Firebase Extensions) to safety officers when high-priority hazards are filed.

---

## 9. Google Cloud Run Deployment Guide

WorkFair is pre-packaged with a production-ready `Dockerfile` and `nginx.conf` that adhere to Google Cloud Run specifications.

### Prerequisites:
- A Google Cloud Platform (GCP) account.
- The Google Cloud SDK (`gcloud`) installed.

### Step-by-Step Deployment:

1. **Login to Google Cloud:**
   ```bash
   gcloud auth login
   ```

2. **Set your active GCP project:**
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

3. **Build and deploy directly to Cloud Run:**
   Run the following single command from the project root (`c:\workfairantigravity`):
   ```bash
   gcloud run deploy workfair-app --source . --platform managed --region us-central1 --allow-unauthenticated
   ```

4. **What Google Cloud Run does:**
   - Reads the `Dockerfile` in the directory.
   - Packages `nginx:alpine`, `index.html`, `style.css`, and `script.js`.
   - Sets port `8080` automatically.
   - Deploys to a globally accessible HTTPS URL (e.g. `https://workfair-app-xyz.a.run.app`).

---

## 10. Publishing to GitHub

To share your project with hackathon judges or collaborators:

1. Initialize git in the folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: WorkFair UN SDG 8 Prototype"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `workfair`.

3. Link and push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/workfair.git
   git push -u origin main
   ```

---

## 11. Summary of Project Compliance

| Requirement | Status | Verification Detail |
| :--- | :--- | :--- |
| **No Node.js / Frameworks** | ✅ Passed | Built strictly with pure HTML5, CSS3, and browser JavaScript. |
| **Direct File Preview** | ✅ Passed | Works by double-clicking `index.html` directly in any web browser. |
| **Separate Files** | ✅ Passed | Modularized into `index.html`, `style.css`, `script.js`, and `README.md`. |
| **Size Limit (<10 MB)** | ✅ Passed | Entire project is under 150 KB (well below the 10 MB limit). |
| **Bilingual Support (EN & Tamil)** | ✅ Passed | Complete interface dictionary for English and Tamil. |
| **Construction & Hospital Sectors**| ✅ Passed | Sector toggles, fatigue tracking, and worksite-specific hazard categories. |
| **Transparent Pay Estimator** | ✅ Passed | Interactive formula showing regular pay, overtime, and deductions step-by-step. |
| **Proof of Every Shift** | ✅ Passed | Signature feature generating printable, verifiable shift receipts. |
| **Google Cloud Run Ready** | ✅ Passed | Packaged with `Dockerfile` and `nginx.conf` (port 8080, zero Node.js). |

*WorkFair — Empowering Frontline Workers with Dignity, Transparency, and Safety.*
