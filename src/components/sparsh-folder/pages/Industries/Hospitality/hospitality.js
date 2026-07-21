// src/data/hospitalityData.js

import { Building2, Utensils, Smartphone, CalendarCheck } from "lucide-react";

export const hospitalityData = {
  // ===========================
  // HERO
  // ===========================
  hero: {
    title: "Hospitality",

    image:
      "https://img.magnific.com/free-photo/friendly-concierge-assisting-guest_482257-103256.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",
  },

  // ===========================
  // OVERVIEW
  // ===========================
  overview: {
    tag: "Overview",

    title: "Your journey to relaxation begins here!",

    paragraphs: [
      "As an industry hospitality delivers services and experiences which welcome guests while offering both comfort and high value to every person who visits.",

      "The industry branches into hotel accommodations and resorts together with restaurants while also offering travel services and event planning to make lasting positive impressions on customers.",

      "The spirit of hospitality rests upon outstanding customer service along with diligent attention to detail as well as total guest satisfaction no matter how brief or important the occasion might be.",
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
        title: "Hotel Management Software",
        icon: Building2,
      },
      {
        title: "Restaurant & Food Service Software",
        icon: Utensils,
      },
      {
        title: "Smart Hotel & IoT Integration",
        icon: Smartphone,
      },
      {
        title: "Online Booking & Reservation Systems",
        icon: CalendarCheck,
      },
    ],
  },

  // ===========================
  // FEATURES
  // ===========================
  features: [
    {
      title:
        "Solutions for reservations, front desk operations, housekeeping, and guest management.",

      description:
        "Hospitality management software centralizes reservations, front desk tasks, and guest profiles for smoother operations. It streamlines check-ins, automates housekeeping schedules, and enhances guest experiences with personalized service. These solutions boost efficiency, reduce errors, and ensure seamless coordination across hotel departments.",

      image:
        "https://img.magnific.com/premium-photo/man-woman-are-sitting-computer-with-word-mac-front_918352-9535.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "POS (Point of Sale) systems, inventory management, and online ordering platforms for restaurants and cafes.",

      description:
        "Modern POS systems handle billing, table orders, and payments efficiently, enhancing customer service. Integrated inventory management tracks stock levels in real time, reducing waste and ensuring availability. Online ordering platforms further improve convenience and help restaurants increase revenue through digital channels.",

      image:
        "https://img.magnific.com/premium-photo/selective-focus-customers-hand-is-touching-touch-screen-order-food-pay-electronically_1199132-27769.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: false,
    },

    {
      title:
        "Automation and IoT-driven systems for smart room controls, keyless entry, and personalized guest experiences.",

      description:
        "IoT-powered systems enable smart room controls like lighting, temperature, and entertainment, all accessible via mobile or voice. Keyless entry enhances security and convenience with digital access through smartphones or wearables. These technologies elevate guest satisfaction while reducing operational overhead.",

      image:
        "https://img.magnific.com/free-vector/person-controlling-smart-home-with-tablet_1284-54603.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

      imageLeft: true,
    },

    {
      title:
        "Platforms for hotel, restaurant, and travel bookings with real-time availability.",

      description:
        "These platforms offer seamless booking experiences by displaying real-time availability for hotels, restaurants, and travel services. Users can instantly compare options, check prices, and secure reservations with live updates. The result is improved customer convenience and higher booking conversion rates.",

      image:
        "https://img.magnific.com/free-photo/hotel-booking-reservation-form-concept_53876-122737.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

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

      "As a company, we focus on building enduring collaborations through dependable services while embracing new technologies to maintain your business leadership position.",
    ],

    image:
      "https://www.cybage.com/sites/default/files/styles/large/public/2024-03/Why-Cybage.webp?itok=pJTFjfXD",
  },

  // ===========================
  // CTA
  // ===========================
  cta: {
    title: "Transform Hospitality Through Technology",

    description:
      "Partner with Softtronix to build intelligent hospitality solutions that streamline operations, enhance guest experiences, automate reservations, and drive sustainable business growth.",

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
