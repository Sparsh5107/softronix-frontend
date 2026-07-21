// src/data/publicServicesData.js

import { Landmark, ShieldCheck, UsersRound, Route } from "lucide-react";

export const publicServicesData = {
  // ===========================
  // HERO
  // ===========================
  hero: {
    title: "Public Services",

    image:
      "https://img.freepik.com/premium-photo/vertical-video_1313853-199526.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",
  },

  // ===========================
  // OVERVIEW
  // ===========================
  overview: {
    tag: "Overview",

    title: "Building a better society, together!",

    paragraphs: [
      "Nonprofit organizations together with governmental institutions undertake public service activities that serve communities to enhance societal wellness.",

      "Government organizations deliver essential services including education, healthcare, transportation, public safety, and civic administration to meet citizen needs and promote social harmony.",

      "Professionals in public service ensure that resources remain accessible, regulations are followed, and citizens' rights are protected, helping create a stable and well-functioning society.",
    ],

    image:
      "https://img.freepik.com/premium-photo/archery-man-aiming-target-dartboard-blue-pink-background_636537-112500.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",
  },

  // ===========================
  // SECTORS
  // ===========================
  sectors: {
    title: "Sectors We Serve",

    items: [
      {
        title: "E-Governance Software",
        icon: Landmark,
      },
      {
        title: "Public Safety Management Software",
        icon: ShieldCheck,
      },
      {
        title: "Social Services Software",
        icon: UsersRound,
      },
      {
        title: "Transportation & Infrastructure Management Software",
        icon: Route,
      },
    ],
  },

  // ===========================
  // FEATURES
  // ===========================
  features: [
    {
      title:
        "Solutions for digital governance, public records management, and citizen engagement.",

      description:
        "Digital governance solutions enable efficient management of public services and administrative workflows. They digitize public records, streamline approvals, improve transparency, and enhance citizen engagement. Residents can conveniently access services, submit requests, and provide feedback through online platforms.",

      image: "https://img.freepik.com/premium-photo/innovation-techology-concept_670147-103864.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "Tools for law enforcement, disaster response, and emergency communication systems.",

      description:
        "These tools support law enforcement, disaster response, and emergency communication through real-time coordination and data sharing. Features such as incident tracking, GPS mapping, and rapid alert systems help agencies improve response times, optimize resource deployment, and enhance public safety.",

      image: "https://img.freepik.com/free-vector/border-guard-concept_98292-7479.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",

      imageLeft: false,
    },

    {
      title:
        "Systems for managing public health programs, welfare services, and social benefits.",

      description:
        "These systems efficiently manage public health initiatives, welfare services, and social benefit distribution. They track beneficiaries, monitor service delivery, automate eligibility verification, and streamline benefit disbursement. Integrated dashboards provide valuable insights for planning and decision-making.",

      image: "https://img.freepik.com/free-photo/doctor-checking-diagnosis-paralyzed-disabled-senior-woman-wheelchair-sitting-reception-room_482257-3449.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "Software for public transit management, traffic control, and smart city planning.",

      description:
        "This software supports public transit management, traffic control, and smart city planning through automation and real-time data analysis. It optimizes routes, schedules, and traffic signals to improve mobility, reduce congestion, and provide insights for future infrastructure development and environmental sustainability.",

      image: "https://img.freepik.com/premium-photo/diverse-employees-monitoring-traffic-via-radar-cameras-stop-lights_482257-99486.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",

      imageLeft: false,
    },
  ],

  // ===========================
  // WHY SOFTTRONIX
  // ===========================
  whySofttronix: {
    title: "Why Softtronix",

    paragraphs: [
      "Softtronix Software Services Pvt. Ltd. serves as your reliable collaborator in delivering modern software solutions that drive organizational success. With years of industry expertise, we create scalable and customized solutions tailored to the unique needs of public sector organizations.",

      "Our team of professionals develops reliable, cost-effective, and high-performance solutions that streamline operations, improve efficiency, and maximize productivity across public service departments.",

      "We take pride in adapting technology to meet specific organizational requirements, delivering practical, innovative, and impactful outcomes. By leveraging modern frameworks and industry best practices, we create future-ready applications that provide measurable results.",

      "Our commitment extends beyond project delivery. We focus on building long-term partnerships, embracing emerging technologies, and helping organizations remain efficient, transparent, and citizen-focused in a rapidly evolving digital landscape.",
    ],

    image:
      "https://www.cybage.com/sites/default/files/styles/large/public/2024-03/Why-Cybage.webp?itok=pJTFjfXD",
  },

  // ===========================
  // CTA
  // ===========================
  cta: {
    title: "Empowering Public Services Through Technology",

    description:
      "Partner with Softtronix to build innovative public service solutions that enhance governance, improve citizen engagement, strengthen public safety, and support sustainable community development.",

    primaryButton: {
      text: "Contact Us",
      link: "/contact",
    },

    secondaryButton: {
      text: "Explore Services",
      link: "/services",
    },
  },
};
