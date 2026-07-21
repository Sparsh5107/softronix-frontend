import {
  ShieldCheck,
  Factory,
  CircleAlert,
  UsersRound,
} from "lucide-react";

export const insuranceData = {
  // ===========================
  // HERO
  // ===========================
  hero: {
    title: "Insurance",

    image:
      "https://img.freepik.com/premium-photo/health-insurance-3d-concept-medical-document-with-checklist-umbrella_776674-577686.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",
  },

  // ===========================
  // OVERVIEW
  // ===========================
  overview: {
    tag: "Overview",

    title: "Protecting what matters most!",

    paragraphs: [
      "As a monetary product, insurance protects against financial risks along with potential losses.",

      "The insurance system requires customers to send frequent payments to insurers who deliver financial assistance to handle costs associated with accidents, illnesses, property destruction, and other unpredictable occurrences.",

      "Through insurance, people, families, and businesses can address and manage risks by receiving financial aid during difficult situations. Insurance includes health, life, auto, home, and business coverage designed to meet specific needs.",
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
        title: "Policy Administration & Management Software",
        icon: ShieldCheck,
      },
      {
        title: "Claims Processing & Fraud Detection Software",
        icon: Factory,
      },
      {
        title: "Underwriting & Risk Assessment Software",
        icon: CircleAlert,
      },
      {
        title: "Customer Relationship Management",
        icon: UsersRound,
      },
    ],
  },

  // ===========================
  // FEATURES
  // ===========================
  features: [
    {
      title:
        "Solutions for policy creation, issuance, renewals, and claims processing.",

      description:
        "Insurance policy administration software streamlines policy creation, issuance, renewals, and claims management. It improves operational efficiency by automating workflows and ensuring accurate policy records. These solutions help insurers provide faster and more reliable customer service.",

      image:
        "https://img.freepik.com/free-photo/insurance-policy-agreement-terms-document-concept_53876-134017.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "Automated systems for handling claims efficiently and detecting fraudulent activities.",

      description:
        "Claims processing solutions automate claim submissions, assessments, approvals, and settlements. Advanced fraud detection tools use analytics and AI to identify suspicious activities, helping insurers reduce losses and improve trust.",

      image:
        "https://img.freepik.com/premium-photo/beware-caution-dangerous-hacking-concept_53876-122857.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: false,
    },

    {
      title:
        "AI-driven tools for evaluating risks, pricing policies, and automating underwriting decisions.",

      description:
        "Underwriting and risk assessment platforms leverage artificial intelligence and data analytics to evaluate risks accurately. These tools support policy pricing, automate underwriting decisions, and improve consistency while reducing processing time.",

      image:
        "https://img.freepik.com/premium-photo/business-visual-data-analyzing-technology-by-creative-computer-software_31965-18523.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "Platforms to manage customer interactions, sales, and retention strategies.",

      description:
        "CRM solutions help insurance providers manage customer relationships, track interactions, and deliver personalized services. Integrated sales and retention tools improve customer engagement, loyalty, and long-term business growth.",

      image:
        "https://img.freepik.com/free-photo/business-people-working-with-ipad-high-angle_23-2150103555.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: false,
    },
  ],

  // ===========================
  // WHY SOFTTRONIX
  // ===========================
  whySofttronix: {
    title: "Why Softtronix",

    paragraphs: [
      "Softtronix Software Services Pvt. Ltd. serves as your reliable collaborator to provide contemporary software solutions that generate organizational achievements. Our company brings years of software industry experience through which we develop business-specific scalable service solutions to address industry-sector needs.",

      "Our group of specialists operates to deliver solutions that offer efficient service alongside reliability and cost-effectiveness to streamline operations while maximizing performance and productivity.",

      "Staff members at our firm demonstrate pride in their ability to adapt solutions specifically to your business requirements resulting in practical and impactful yet innovative outcomes. SoftTronix applies modern technological frameworks together with best practices to deliver applications that will resist upcoming changes while showing quantifiable outcomes.",

      "Softtronix Software Services Pvt. Ltd. demonstrates its dedication through its modern software development of customized solutions that adapt to individual corporate requirements. Our team of expert professionals combines customer-oriented practices to execute projects with precise excellence for each project we undertake.",

      "As a company, we focus on building enduring collaborations through dependable services while embracing new technologies to maintain your business leadership position.",
    ],

    image:
      "https://www.cybage.com/sites/default/files/styles/large/public/2024-03/Why-Cybage.webp?itok=pJTFjfXD",
  },

  // ===========================
  // CTA
  // ===========================
  cta: {
    title: "Transform Insurance Through Technology",

    description:
      "Partner with Softtronix to build intelligent insurance solutions that streamline policy management, accelerate claims processing, improve risk assessment, and enhance customer experiences.",

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
