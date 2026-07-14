// src/pages/industries/Healthcare/healthcareData.js

import {
    HeartPulse,
    Hospital,
    Stethoscope,
    Activity,
} from "lucide-react";

export const healthcareData = {
    // ===========================
    // HERO
    // ===========================
    hero: {
        title: "Healthcare",

        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    },

    // ===========================
    // OVERVIEW
    // ===========================
    overview: {
        tag: "Overview",

        title: "Empowering Healthcare Through Technology!",

        paragraphs: [
            "The healthcare industry is rapidly transforming through digital innovation, intelligent automation, and patient-centric technologies. Modern healthcare organizations require secure, scalable, and integrated solutions that enhance patient care while improving operational efficiency.",

            "At Sparsh Technologies, we deliver advanced healthcare software solutions that simplify clinical workflows, streamline hospital management, improve patient engagement, and enable data-driven decision-making. Our solutions are designed to help healthcare providers embrace digital transformation with confidence.",
        ],

        image:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
    },

    // ===========================
    // SECTORS
    // ===========================
    sectors: {
        title: "Sectors We Serve",

        items: [
            {
                title: "Hospitals",
                icon: Hospital,
            },
            {
                title: "Primary Care",
                icon: Stethoscope,
            },
            {
                title: "Patient Care",
                icon: HeartPulse,
            },
            {
                title: "Digital Healthcare",
                icon: Activity,
            },
        ],
    },

    // ===========================
    // FEATURES
    // ===========================
    features: [
        {
            title: "Healthcare That Cares Beyond Treatment!",

            description:
                "Healthcare is evolving beyond traditional care by integrating digital technologies that improve patient experiences, enhance operational efficiency, and support better clinical outcomes. Our solutions enable healthcare providers to deliver connected, secure, and personalized care across every touchpoint.",

            image:
                "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Innovation for Better Patient Outcomes!",

            description:
                "From hospital management systems and electronic medical records to telemedicine and patient engagement platforms, we develop intelligent healthcare solutions that simplify workflows, reduce administrative burden, and improve collaboration among healthcare professionals.",

            image:
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },

        {
            title: "Technology That Supports Every Life!",

            description:
                "Our healthcare technologies are designed with security, compliance, and reliability at their core. We help medical organizations modernize their infrastructure while ensuring seamless access to accurate patient information and critical healthcare services.",

            image:
                "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Secure Healthcare for a Connected Future!",

            description:
                "Leveraging cloud computing, artificial intelligence, analytics, and interoperable healthcare platforms, we empower organizations to build resilient healthcare ecosystems that improve efficiency, support innovation, and deliver exceptional patient experiences.",

            image:
                "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },
    ],

    // ===========================
    // WHY SPARSH
    // ===========================
    whySofttronix: {
        title: "Why Sofftronix Technologies?",

        paragraphs: [
            "Sofftronix Technologies combines deep technical expertise with healthcare domain knowledge to deliver secure, scalable, and innovative digital healthcare solutions.",

            "Our experienced team develops customized software that helps hospitals, clinics, laboratories, and healthcare organizations improve patient care, streamline operations, and accelerate digital transformation.",

            "From Hospital Management Systems (HMS) and Electronic Health Records (EHR) to telemedicine platforms, cloud applications, AI-driven analytics, and healthcare automation, we provide end-to-end technology solutions tailored to modern healthcare needs.",

            "With a commitment to quality, innovation, compliance, and long-term partnerships, Sparsh Technologies empowers healthcare providers to deliver better patient outcomes while building a smarter and more connected healthcare ecosystem.",
        ],

        image:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },

    // ===========================
    // CTA
    // ===========================
    cta: {
        title: "Transform Healthcare Through Digital Innovation",

        description:
            "Partner with Sofftronix Technologies to build secure, scalable, and future-ready healthcare solutions that improve patient care and operational excellence.",

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