// src/data/aboutData.js

import {
    BriefcaseBusiness,
    Factory,
    CircleHelp,
    RefreshCw,
    Handshake,
    Users,
    HeartHandshake,
} from "lucide-react";

export const aboutData = {
    // =======================
    // HERO SECTION
    // =======================
    hero: {
        subtitle: "About Us",
        title: "Creating a Modern Tomorrow, Together!",
        description:
            "We dream of building an efficient and sustainable future that converts!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmE421487nEqZr3jAkVhYD7sfcimKCm92njGY0UvSdw&s=10",
    },

    // =======================
    // OVERVIEW SECTION
    // =======================
    overview: {
        badge: "Overview",

        title: "Every journey starts with a vision.",

        paragraphs: [
            "Creating a smarter, more connected world through technology! We believe innovation and connectivity open new possibilities to solve real-world challenges. Developing intelligent solutions that help businesses achieve their goals is at the heart of our mission. Through advanced technologies, we create solutions that improve productivity, strengthen collaboration, and build a sustainable future.",

            "We have been working toward empowering people and organizations to make intelligent decisions on faster efficiencies and facilitate new avenues of development by integrating intelligent, advanced digital solutions.",

            "With a scalable, reliable, and customer-focused approach, we continue to build technology solutions that connect people, transform businesses, and create meaningful impact across industries worldwide.",
        ],

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_zUijas1Evj87Ym1V7LCBiwfnlMm_zB4tUN8MwsEhA&s=10",
    },

    // =======================
    // MORE SECTION
    // =======================
    more: {
        title: "And There's More...",

        intro:
            "Our unique offerings span the technological spectrum—from cutting-edge software development to transformative digital strategies. We don't simply follow industry trends; we help shape them.",

        description:
            "Since our beginning, our mission has remained the same: delivering innovation with purpose. Sparsh Technologies is more than a technology company—it's a trusted partner committed to helping businesses grow through digital excellence.",

        points: [
            "We are passionate about delivering innovative, future-ready technology solutions.",
            "We genuinely care about our employees, customers, and the communities we serve.",
            "We foster an inclusive workplace where everyone is respected, valued, and encouraged to succeed.",
        ],
    },

    // =======================
    // WHAT WE DO
    // =======================
    whatWeDo: {
        title: "What We Do",

        circleItems: [
            {
                title: "Services",
                icon: BriefcaseBusiness,
                path: "/services",
            },
            {
                title: "Industries",
                icon: Factory,
                path: "/industries",
            },
            {
                title: "Why Sparsh",
                icon: CircleHelp,
                path: "/about",
            },
        ],

        accordion: [
            {
                title: "Services",
                content:
                    "We provide custom software development, web applications, mobile apps, cloud solutions, AI-powered systems, ERP, CRM, UI/UX design, DevOps, quality assurance, and digital transformation services tailored to business needs.",
            },

            {
                title: "Industries",
                content:
                    "Our solutions empower Banking, Healthcare, Retail, Manufacturing, Logistics, Education, Government, Finance, Insurance, and many other industries through secure, scalable, and intelligent technologies.",
            },

            {
                title: "Why Sofftronix",
                content:
                    "We combine innovation, technical expertise, customer-first thinking, and agile development practices to deliver reliable, scalable, and future-ready software solutions that help businesses succeed.",
            },
        ],
    },

    // =======================
    // CORE VALUES
    // =======================
    coreValues: {
        title: "Core Values",

        values: [
            {
                title: "Consistency",
                icon: RefreshCw,
            },

            {
                title: "Collaboration",
                icon: Handshake,
            },

            {
                title: "Community",
                icon: Users,
            },

            {
                title: "Commitment",
                icon: HeartHandshake,
            },
        ],
    },

    // =======================
    // DIVERSITY & INCLUSION
    // =======================
    diversity: {
        title: "Diversity & Inclusion",

        cards: [
            {
                title: "Women Leadership",
                image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
            },

            {
                title: "Employees",
                image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
            },

            {
                title: "Inclusive Policies",
                image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
            },

            {
                title: "Equal Opportunity",
                image:
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
            },

            {
                title: "Data-Science Driven Company",
                image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            },

            {
                title: "Supplier Diversity",
                image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            },
        ],
    },
};