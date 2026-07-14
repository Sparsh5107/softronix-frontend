
// src/pages/industries/BankFinance/financeData.js

import {
    Landmark,
    Wallet,
    Building2,
    ShieldCheck,
} from "lucide-react";

export const financeData = {
    // ===========================
    // HERO
    // ===========================
    hero: {
        title: "Bank Finance",
        image:
            "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80",
    },

    // ===========================
    // OVERVIEW
    // ===========================
    overview: {
        tag: "Overview",

        title: "Strengthening your financial foundation!",

        paragraphs: [
            "The banking and financial services industry is continuously evolving through digital innovation, automation, and customer-centric solutions. Organizations require secure, scalable, and intelligent technologies that simplify operations while delivering seamless customer experiences.",

            "At Softtronix, we help financial institutions modernize their technology landscape through enterprise software, cloud solutions, digital banking platforms, payment systems, and business intelligence solutions that improve operational efficiency and regulatory compliance.",
        ],

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3D2M5Wu7dJ9djS4qvys9_GbVbVeskoHU9rXobLbgHQ&s=10",
    },

    // ===========================
    // SECTORS
    // ===========================
    sectors: {
        title: "Sectors We Serve",

        items: [
            {
                title: "Consumer Banking",
                icon: Landmark,
            },
            {
                title: "Risk & Compliance",
                icon: ShieldCheck,
            },
            {
                title: "Digital Transformation",
                icon: Wallet,
            },
            {
                title: "Power Banking",
                icon: Building2,
            },
        ],
    },

    // ===========================
    // FEATURE SECTIONS
    // ===========================
    features: [
        {
            title: "Smart Banking for Smart People!",

            description:
                "Today's customers expect secure, convenient, and personalized banking experiences. We develop modern financial technology solutions that simplify digital banking, improve operational efficiency, and deliver seamless customer engagement across every touchpoint.",

            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Banking Made Simple, Futures Made Strong!",

            description:
                "We empower banks and financial institutions with intelligent software solutions that streamline business processes, strengthen customer relationships, and accelerate digital transformation while maintaining the highest standards of security and compliance.",

            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },

        {
            title: "Banking with Integrity, Investing in Trust!",

            description:
                "Trust is the foundation of every financial institution. Our technology solutions are designed with reliability, transparency, and security at their core, enabling organizations to build stronger relationships with customers while supporting long-term business growth.",

            image:
                "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Secure. Reliable. Always There!",

            description:
                "From secure payment platforms to enterprise banking applications, we deliver future-ready software backed by robust cybersecurity practices, cloud technologies, and scalable architectures that keep financial operations running efficiently.",

            image:
                "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },
    ],

    // ===========================
    // WHY SOFTTRONIX
    // ===========================
    whySofttronix: {
        title: "Why Softtronix?",

        paragraphs: [
            "Softtronix Software Services Pvt. Ltd. combines technical expertise, domain knowledge, and innovation to deliver digital solutions tailored for the banking and financial industry.",

            "Our experienced professionals understand the challenges of modern financial institutions and develop scalable solutions that improve operational efficiency, strengthen security, and enhance customer experiences.",

            "Whether it's digital banking, enterprise software, payment systems, cloud migration, analytics, or AI-powered automation, our team helps organizations embrace digital transformation with confidence.",

            "We believe in building long-term partnerships by delivering quality solutions, transparent communication, and continuous innovation that drive measurable business outcomes.",
        ],

        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    },

    // ===========================
    // CTA
    // ===========================
    cta: {
        title: "Let's Build the Future of Banking Together",

        description:
            "Transform your banking and financial services with secure, scalable, and innovative digital solutions from Softtronix.",

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