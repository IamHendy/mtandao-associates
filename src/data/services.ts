// Photo sources: public/services/CREDITS.txt. Slider photos are kept separate so nothing repeats.
export const services = [
  {
    slug: "firewall",
    title: "Firewall Deployment & Support",
    image: "/services/firewall-appliance.jpg",
    summary: "WatchGuard NGFW configuration, deployment, and ongoing support at your network edge.",
    description: [
      "Your firewall is the first thing an attacker meets. We supply, install and configure WatchGuard Next-Generation Firewalls sized for your branch count, internet links and number of users.",
      "After installation we stay on to support it: rule changes as your network grows, firmware updates when vendors release security patches, and troubleshooting when something stops connecting.",
    ],
    details: [
      "Configuration and deployment of WatchGuard Next-Generation Firewalls tailored to your network.",
      "Rule-set design covering traffic control, intrusion prevention, and application filtering.",
      "Ongoing support and troubleshooting so your edge stays protected as your network grows.",
    ],
  },
  {
    slug: "endpoint-security",
    title: "Endpoint Security",
    image: "/services/endpoint-laptop.jpg",
    summary: "Corporate endpoint protection setup and support, with post-training for your admin team.",
    description: [
      "Most attacks start on a single laptop or desktop: a phishing link, an infected USB stick, a fake download. We protect every company device with next-generation antivirus, EDR and DNS filtering managed from one console.",
      "Once it is running we train your ICT admin to manage that console, so day-to-day alerts are handled in-house and we step in when an incident needs more hands.",
    ],
    details: [
      "Deployment of next-gen antivirus, EDR, and DNS filtering across all company devices.",
      "Post-deployment training so your own ICT admin can manage the panel independently.",
      "Ongoing support for incident response when threats are flagged.",
    ],
  },
  {
    slug: "ai-security-automation",
    title: "AI-Driven Security Automation",
    image: "/services/ai-automation.jpg",
    summary: "Automated threat detection and monitoring, plus training your team to run it.",
    description: [
      "Small ICT teams cannot watch logs all day. We set up AI-based tools that watch network and device activity, flag unusual behaviour and handle routine responses automatically.",
      "We tune the detection to your environment so your team is not buried in false alarms, and we train them on how the automation works so they can trust and adjust it.",
    ],
    details: [
      "Setup of AI-based automated threat detection tuned to your environment.",
      "Hands-on training for your team on the automation tools, not just a handover document.",
      "Ongoing monitoring support as threats and tooling evolve.",
    ],
  },
  {
    slug: "systems-audit",
    title: "Systems Audit",
    image: "/services/systems-audit.jpg",
    summary: "Technical audits and vulnerability assessments of your network, servers and devices.",
    description: [
      "A systems audit tells you what is actually on your network, how it is configured, and where the weak points are. We scan and review your servers, network devices and workstations using automated tooling, then check the findings by hand.",
      "You get a written report ranked by risk, with a clear fix for each issue, that you can share with management, your board or an external auditor.",
    ],
    details: [
      "Comprehensive technical systems audits performed on your network using automated tooling.",
      "Vulnerability assessments documented and verified against local data protection requirements.",
      "Clear, shareable audit reports instead of a raw scan dump.",
    ],
  },
  {
    slug: "grc",
    title: "Governance, Risk & Compliance (GRC)",
    image: "/services/grc.jpg",
    summary: "ICT policies, risk assessments and compliance work for regulated organisations.",
    description: [
      "Regulators and auditors want to see that ICT risk is managed on paper as well as in practice. We help you write the policies, assess the risks and keep the evidence that shows it.",
      "This work is especially useful for SACCOs and financial institutions facing SASRA, CBK or Data Protection Act requirements, and for any organisation preparing for an external audit.",
    ],
    details: [
      "Drafting and reviewing ICT security policies, procedures and acceptable use rules.",
      "Risk assessments that map your systems to the threats and controls that matter for your sector.",
      "Compliance support for the Data Protection Act, 2019 and sector regulators such as SASRA and CBK.",
      "Preparation for internal and external audits, including evidence gathering and gap reports.",
    ],
  },
  {
    slug: "software-provision",
    title: "Software Provision Solutions",
    image: "/services/software-code.jpg",
    summary: "Supply, licensing, installation and support of business and security software.",
    description: [
      "We source the software your organisation needs, from security tools to business applications, and make sure it is properly licensed.",
      "We then install and configure it on your servers, desktops or cloud environment, and keep track of renewals and updates so nothing lapses unnoticed.",
    ],
    details: [
      "Sourcing and licensing the software your organisation needs, from security tools to business applications.",
      "Installation and configuration on your servers, desktops or cloud environment.",
      "Licence renewals, updates and ongoing support so nothing lapses unnoticed.",
    ],
  },
  {
    slug: "fosa-bosa-systems",
    title: "Custom Systems (FOSA & BOSA)",
    image: "/services/sacco-systems.jpg",
    summary: "Systems built and customized for SACCO front and back office operations.",
    description: [
      "SACCOs run on two sides: the front office (FOSA) serving members at the counter, and the back office (BOSA) handling shares, loans and dividends. Off-the-shelf systems rarely fit both well.",
      "We develop and customise systems around how your SACCO actually works, with security built in from the start rather than added later.",
    ],
    details: [
      "Development of systems customized to your SACCO's specific FOSA and BOSA needs.",
      "Built to fit how your organization actually operates, not a rigid off-the-shelf template.",
    ],
  },
  {
    slug: "aml-antifraud",
    title: "AML & Antifraud Solutions",
    image: "/services/aml-antifraud.jpg",
    summary: "Deployment support for anti-money-laundering and antifraud tooling in financial institutions.",
    description: [
      "Banks and financial institutions are expected to detect suspicious transactions and report them. We support the deployment of AML and antifraud solutions, from initial setup to connecting them with your core systems.",
      "We configure the rules and thresholds with your compliance team so that alerts match regulatory expectations and real risk.",
    ],
    details: [
      "Support deploying AML and antifraud solutions for banks and financial institutions.",
      "Configuration aligned with regulatory expectations for financial-sector clients.",
    ],
  },
  {
    slug: "crm-customization",
    title: "CRM Customization",
    image: "/services/crm.jpg",
    summary: "Tailoring CRM systems to how your team actually works.",
    description: [
      "A CRM is only useful if your team actually uses it. We help develop and customise CRM systems around your client workflows, so records, follow-ups and reports match how you work.",
      "As your processes change we adjust the system with you, rather than leaving you with a setup that slowly stops fitting.",
    ],
    details: [
      "Assisting in developing and customizing CRM systems around your client workflows.",
      "Ongoing adjustments as your process changes.",
    ],
  },
  {
    slug: "training",
    title: "Training & E-Campus",
    image: "/services/training.jpg",
    summary: "Technical training for staff and students in AI automation, GRC, data protection, and cybersecurity.",
    description: [
      "We train company staff, ICT teams and students in cybersecurity, GRC, data protection and AI automation, in person and through e-campus learning.",
      "Whenever we deploy a new system for you, we also train your ICT admins to run it, so the knowledge stays in your organisation.",
    ],
    details: [
      "Technical training for customers and students on AI automation, GRC, and cybersecurity.",
      "Collaboration on e-campus training development for structured, ongoing learning.",
      "Training for your ICT systems admins on any new technology or service we deploy.",
    ],
  },
];
