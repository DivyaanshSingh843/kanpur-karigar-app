# Kanpur Karigar — Hyperlocal Food Artisan & Halwai Hiring Platform

An interactive mobile application prototype designed for Kanpur's food & catering trade (Halwais, Tandoor Masters, Bawarchis, Chaat Specialists) based on the official wireframe specifications.

## 📱 Live Web Prototype (GitHub Pages)
- **Live URL**: https://divyaanshsingh843.github.io/kanpur-karigar-app/
- **GitHub Repository**: https://github.com/DivyaanshSingh843/kanpur-karigar-app

## 📁 Modular Folder Structure (Designer Prototype Architecture)
Following the modular prototype design pattern (inspired by [baby-tracker-app](https://github.com/ravi26design/baby-tracker-app)):

```text
kanpur-karigar-app/
├── index.html                  # Master Prototype Showcase Hub (Directory of all screen flows)
├── onboarding.html             # Splash → Language → OTP Login → Role Switcher
├── employer-dashboard.html     # Employer Home (SOS urgent banner, demands, metrics)
├── post-job.html               # Post Requirement (dish tags, vacancy counter, salary slider)
├── search.html                 # Search Karigars (Halwai, Bawarchi, Chaat, Tandoor filters)
├── karigar-profile.html        # Detailed Artisan Profile (verified badges, phone masking)
├── employer-reg.html           # Business Registration (Kanpur localities & category chips)
├── karigar-reg.html            # Karigar Worker Registration & selfie onboarding
├── karigar-feed.html           # Karigar Job Feed (₹24,800 monthly earnings tally & gigs)
├── notifications.html          # Alerts & Notifications Center
├── whatsapp-mitra.html         # Authentic WhatsApp Mitra Job Broadcast simulation
├── profile.html                # My Account, Kanpur Helpline (0512) & Settings
├── admin-panel.html            # Admin Dispatch & Matchmaking Operator Desk
├── prototype-all.html          # Legacy All-in-One Multi-Screen Switcher View
└── assets/
    ├── css/
    │   └── style.css           # Design tokens, iPhone shell & responsive rules
    ├── js/
    │   └── app.js              # Dynamic status bar clock, toast helpers & interactivity
    └── images/                 # App assets & illustrations
```

## 🚀 Key Features
- **Master Prototype Hub**: `index.html` showcases all available screens in responsive interactive cards.
- **Self-Contained Mobile Screens**: Each flow is an independent, realistic iPhone container that links seamlessly to other screens.
- **Deep Saffron Theme**: Warm Indian culinary palette with `#F05A28`, `#FF9900`, `#16A34A`, and Plus Jakarta Sans.
- **Local Kanpur Focus**: Pre-configured with major catering hubs (Kidwai Nagar, Gumti No. 5, Swaroop Nagar, Govind Nagar, Civil Lines).

## 🛠️ Tech Stack
- HTML5 / Modern CSS3 / Vanilla JavaScript
- Font Awesome 6.5
- Google Fonts (Plus Jakarta Sans)
