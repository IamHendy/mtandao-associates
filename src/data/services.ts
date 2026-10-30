// Photo sources: public/services/CREDITS.txt. Slider photos are kept separate so nothing repeats.
export const services = [
  {
    slug: "unified-communication",
    title: "Unified Communication & IP Telephony",
    image: "/services/crm.jpg",
    summary: "End-to-end IP PBX, contact center, IVR and call recording, built on astTECS technology.",
    description: [
      "We implement end-to-end unified communication and e-mobility products in partnership with astTECS, giving you a complete suite of enterprise telecom products with advanced features at an affordable cost.",
      "Our unified communication solutions deliver seamless connectivity, security and automation, which means better customer engagement, more productive staff, faster delivery, lower costs and higher revenue potential.",
    ],
    details: [
      "IP PBX / Telephony: whether you are a large enterprise or a small business, the astTECS IP PBX fits your needs.",
      "Contact Center: an omnichannel call center dialer with a real-time agent monitoring dashboard.",
      "IVR: automated call management that handles high call volumes with limited staff.",
      "Voice Logger: a complete call recording solution for your business.",
    ],
  },
  {
    slug: "firewall",
    title: "UTM / Next-Generation Firewall",
    image: "/services/firewall-appliance.jpg",
    summary: "WatchGuard firewalls that protect your network against zero-day and crypto attacks.",
    description: [
      "The threat landscape changes every day. The firewall you put at your network edge has to stop zero-day and crypto attacks, not just the threats it knew about when it was installed.",
      "We partner with WatchGuard because its firewalls are built to be among the smartest, fastest and most effective network security products available, and they are easy to deploy and manage. WatchGuard gives IT teams enterprise-grade security and threat visibility, whatever the organization's budget, size or complexity.",
    ],
    details: [
      "Supply, configuration and deployment of WatchGuard UTM / Next-Generation Firewalls.",
      "Protection against zero-day threats, ransomware and crypto attacks.",
      "Threat visibility tools that put your IT team back in charge of the network.",
      "Ongoing support as your network grows.",
    ],
  },
  {
    slug: "multi-factor-authentication",
    title: "Identity Security & Multi-Factor Authentication",
    image: "/services/mfa.jpg",
    summary: "WatchGuard AuthPoint MFA, the single most important safeguard for your business and identity.",
    description: [
      "We deploy AuthPoint, the multi-factor authentication solution from our partner WatchGuard. AuthPoint goes beyond traditional two-factor authentication, using Mobile Device DNA to confirm that a login really comes from the user's own phone.",
      "By requiring proof of identity beyond a password, MFA limits the business risk that comes with weak passwords, without making life harder for employees or IT staff.",
    ],
    details: [
      "AuthPoint MFA deployment for your staff and systems.",
      "Mobile Device DNA identification, beyond basic 2FA.",
      "Easy to use for employees and simple to manage for IT.",
      "Talk to us about a free trial.",
    ],
  },
  {
    slug: "dns-protection",
    title: "DNS Protection (DNSWatchGO)",
    image: "/services/software-code.jpg",
    summary: "DNS-level protection and content filtering for staff working anywhere, without a VPN.",
    description: [
      "Has your DNS been compromised? WatchGuard DNSWatchGO provides DNS-level protection and content filtering that keeps your business safe from phishing, ransomware and other attacks, even when users are outside your network and without needing a VPN.",
      "Three-quarters of employees worldwide now work remotely at least one day a week, from home, a coffee shop or a hotel. More of your business is happening off-network, outside your traditional security tools. DNSWatchGO protects your staff wherever they are.",
    ],
    details: [
      "Blocks phishing, ransomware and malicious domains at the DNS level.",
      "Content filtering for company devices.",
      "Protection for remote and travelling staff, with no VPN required.",
    ],
  },
  {
    slug: "endpoint-security",
    title: "Endpoint Security & EDR",
    image: "/services/endpoint-laptop.jpg",
    summary: "Next-gen antivirus, EDR and DNS filtering, delivered by one lightweight agent and one cloud console.",
    description: [
      "Our endpoint security solutions stop advanced cyberattacks on laptops, desktops and servers with next-gen antivirus (EPP), Endpoint Detection and Response (EDR) and DNS filtering.",
      "You can add integrated modules for patch management, sensitive data protection, disk and USB encryption and security insights, all delivered by a single lightweight agent and managed from one cloud-based platform.",
    ],
    details: [
      "Next-generation antivirus (EPP) and Endpoint Detection and Response (EDR).",
      "DNS filtering and patch management.",
      "Sensitive data protection and encryption of disks and USB drives.",
      "One lightweight agent, managed from a single cloud console.",
    ],
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing & Systems Audit (VAPT)",
    image: "/services/systems-audit.jpg",
    summary: "Vulnerability assessment and penetration testing of your applications, network, endpoints and cloud.",
    description: [
      "VAPT is security testing that finds vulnerabilities in your running applications, network, endpoints and cloud. Vulnerability Assessment scans your digital assets and reports existing flaws. Penetration Testing then exploits those vulnerabilities to show the real security gaps.",
      "Each has its own strengths, so we usually do both together for a complete analysis, and give you a clear report of what to fix.",
    ],
    details: [
      "Identify security loopholes.",
      "Improve cyber resilience.",
      "Avoid data breaches.",
      "Inspect your network defence systems.",
      "Protect organizational data.",
      "Comply with security standards.",
    ],
  },
  {
    slug: "sd-wan",
    title: "SD-WAN Connectivity",
    image: "/services/sd-wan.jpg",
    summary: "Connect multiple branches for less, with faster application performance, using WatchGuard SD-WAN.",
    description: [
      "Do you have several remote branches and want to cut costs while improving application performance? Software-Defined WAN (SD-WAN) is a software-based routing solution that automatically sends network traffic across multiple WAN connections, based on policies you set.",
      "SD-WAN keeps measuring each connection and routes traffic over the best one for cost and quality. It reduces reliance on expensive MPLS or 4G/LTE links and can save up to 55% of operating costs. WatchGuard Firebox delivers SD-WAN on the same platform as your firewall, so security stays consistent across every branch.",
    ],
    details: [
      "Optimizes internet service at branch locations.",
      "Cuts costs by reducing reliance on your most expensive connections.",
      "Fast, direct access to cloud applications for staff.",
      "Consistent security across all branches through WatchGuard Firebox.",
    ],
  },
  {
    slug: "email-security",
    title: "Email Security & Archiving",
    image: "/services/email-security.jpg",
    summary: "Cloud-based filtering that stops spam and malware, plus secure, searchable email archiving.",
    description: [
      "85% of email reaching companies is infected or spam, and 94% of malware is delivered by email. Poor email protection leads to latency, mail server downtime, network outages, lost productivity and disrupted business.",
      "Our Email Protection filters out spam and malicious messages with cloud-based scanning on Panda Security's servers. For archiving, we offer a flexible, scalable cloud solution through our partner ArcTitan (TitanHQ) that keeps every email preserved, secure and searchable.",
    ],
    details: [
      "99.97% spam detection with multilayered analysis, including real-time blacklists (RBLs).",
      "Double antivirus protection (Bitdefender and ClamAV) against viruses and malware.",
      "Simple web-based management by user, company or domain, plus whitelisting, blacklisting, reporting and recipient verification.",
      "Cloud or on-premise gateway deployment.",
      "Archiving: pay per live user, unlimited users and storage, no onsite hardware, Office 365 compatible, ready within minutes.",
    ],
  },
  {
    slug: "backup-disaster-recovery",
    title: "Cloud Backup & Disaster Recovery",
    image: "/services/backup-recovery.jpg",
    summary: "Onsite and cloud bare-metal recovery that eliminates ransomware damage, data loss and downtime.",
    description: [
      "Looking for an affordable, custom solution that properly protects your business data? Our onsite and cloud bare-metal disaster recovery protects you from ransomware, data loss and downtime.",
      "In today's mixed ICT environments every business needs a continuity plan for when disaster strikes. We help you design and implement that backup and recovery plan.",
    ],
    details: [
      "Windows computers and servers.",
      "Cloud backup.",
      "VMware backup.",
      "NAS.",
      "Local and cloud virtualization.",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed ICT & Security Services (MSP)",
    image: "/services/managed-services.jpg",
    summary: "Outsource your ICT and security to us and concentrate on growing your business.",
    description: [
      "Overwhelmed by ICT, or short of skilled technical staff? Outsource your ICT services to us. We provide a full suite of managed ICT support and managed security.",
      "You concentrate on growing your business while we handle your ICT.",
    ],
    details: [
      "Full suite of managed ICT support.",
      "Full suite managed security.",
      "Network intelligence and monitoring.",
    ],
  },
  {
    slug: "aml",
    title: "Anti-Money Laundering (AML)",
    image: "/services/aml-antifraud.jpg",
    summary: "AI-driven AML risk data and technology for financial institutions, with ComplyAdvantage.",
    description: [
      "We partner with ComplyAdvantage, a global leader in AML data and technology, to help financial institutions fight fraud and money laundering with AI-driven risk data and next-generation technology.",
      "We help compliance professionals get real-time, high-quality AML risk data so they can make the right risk decisions quickly, and we work closely with clients so they get the most out of the data and technology.",
    ],
    details: [
      "AI-driven AML risk data.",
      "Real-time screening to support fast, accurate risk decisions.",
      "Fraud and money laundering prevention for banks and financial institutions.",
    ],
  },
  {
    slug: "wifi",
    title: "Secure Wi-Fi Access Points",
    image: "/services/wifi-access-point.jpg",
    summary: "Robust, wide-range WatchGuard and Indigo access points with built-in wireless intrusion prevention.",
    description: [
      "We partner with Indigo Networks and WatchGuard to deploy top-rated Wi-Fi access points for clients around the region.",
      "WatchGuard access points are robust and broadcast over a wide range. WatchGuard was the first to patent embedding WIPS (Wireless Intrusion Prevention Service) in the access point itself, so Wi-Fi security for your users is built in.",
    ],
    details: [
      "Supply and deployment of WatchGuard and Indigo Networks access points.",
      "Wide coverage from robust hardware.",
      "Built-in Wireless Intrusion Prevention (WIPS).",
    ],
  },
  {
    slug: "data-protection",
    title: "Data Protection Act Compliance",
    image: "/services/data-protection.jpg",
    summary: "A-Z consultancy to bring your organization into compliance with the Data Protection Act.",
    description: [
      "We offer complete, A-Z consultancy on Data Protection Act compliance, from understanding what the law requires of your organization to putting the right controls in place.",
    ],
    details: [
      "A-Z Data Protection Act compliance consultancy.",
      "Practical controls that protect personal data across your systems.",
    ],
  },
];
