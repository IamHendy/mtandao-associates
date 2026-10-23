// Media lives in public/slides/. Sources are listed in public/slides/CREDITS.txt.
// To use your own photos, drop them in that folder and update the paths below.
export type Slide = {
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  caption: string;
};

export const slides: Slide[] = [
  {
    type: "image",
    src: "/slides/network-cables.jpg",
    title: "Firewall and network setup",
    caption: "We configure WatchGuard firewalls and tidy up the network behind them.",
  },
  {
    type: "image",
    src: "/slides/engineer-servers.jpg",
    title: "Systems audit",
    caption: "Technical audits of your servers, network and devices, with a clear written report.",
  },
  {
    type: "video",
    src: "/slides/network-cables.mp4",
    poster: "/slides/network-cables-poster.jpg",
    title: "Monitoring that keeps running",
    caption: "Automated threat detection watching your network after we hand over.",
  },
  {
    type: "image",
    src: "/slides/endpoint-security.jpg",
    title: "Endpoint protection",
    caption: "Antivirus, EDR and DNS filtering on every company laptop and desktop.",
  },
  {
    type: "image",
    src: "/slides/grc-presentation.jpg",
    title: "Governance, risk and compliance",
    caption: "Policies, risk assessments and audit preparation for SACCOs and banks.",
  },
  {
    type: "image",
    src: "/slides/training-class.jpg",
    title: "Training",
    caption: "Hands-on cybersecurity and ICT training for staff and students.",
  },
];
