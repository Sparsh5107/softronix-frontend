// src/data/educationData.js

import {
    GraduationCap,
    School,
    BookOpen,
    Laptop,
} from "lucide-react";

export const educationData = {
    // ===========================
    // HERO
    // ===========================
    hero: {
        title: "Education",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVw3nsiaoIQFTJcdyD0ri7vijlRU2JM11qDvzJTGS7w&s=10",
    },

    // ===========================
    // OVERVIEW
    // ===========================
    overview: {
        tag: "Overview",

        title: "Transforming Education Through Technology!",

        paragraphs: [
            "The education sector is rapidly embracing digital transformation to create engaging learning experiences, improve institutional efficiency, and prepare students for the future. Technology has become essential in delivering accessible, collaborative, and personalized education.",

            "At Sparsh Technologies, we build innovative education solutions that empower schools, colleges, universities, and training organizations with secure, scalable, and intelligent digital platforms. Our solutions simplify administration while enhancing teaching and learning experiences.",
        ],

        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    },

    // ===========================
    // SECTORS
    // ===========================
    sectors: {
        title: "Sectors We Serve",

        items: [
            {
                title: "Schools",
                icon: School,
            },
            {
                title: "Universities",
                icon: GraduationCap,
            },
            {
                title: "E-Learning",
                icon: Laptop,
            },
            {
                title: "Training Institutes",
                icon: BookOpen,
            },
        ],
    },

    // ===========================
    // FEATURES
    // ===========================
    features: [
        {
            title: "Creating Smarter Learning Experiences!",

            description:
                "Modern education requires connected digital ecosystems that empower students, educators, and administrators alike. We develop technology solutions that improve collaboration, simplify academic processes, and deliver engaging learning experiences across every level of education.",

            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Building Future-Ready Institutions!",

            description:
                "From student information systems and learning management platforms to digital classrooms and online assessments, our education solutions streamline institutional operations while creating flexible and interactive learning environments.",

            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },

        {
            title: "Technology That Inspires Learning!",

            description:
                "We leverage cloud computing, analytics, AI, and automation to help educational institutions improve academic performance, strengthen communication, and provide secure access to educational resources anytime, anywhere.",

            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",

            imageLeft: true,
        },

        {
            title: "Driving Digital Education Forward!",

            description:
                "Our scalable education platforms enable institutions to modernize infrastructure, improve administrative efficiency, and deliver personalized learning experiences that prepare students for a digitally connected future.",

            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",

            imageLeft: false,
        },
    ],

    // ===========================
    // WHY SPARSH
    // ===========================
    whySofttronix: {
        title: "Why Sparsh Technologies?",

        paragraphs: [
            "Sparsh Technologies delivers innovative education technology solutions designed to help institutions embrace digital transformation while improving teaching, learning, and administrative efficiency.",

            "Our experienced team develops customized platforms that simplify student management, streamline academic workflows, and create engaging digital learning experiences for educators and learners alike.",

            "From Learning Management Systems (LMS) and Student Information Systems (SIS) to online examination platforms, mobile applications, cloud solutions, AI-powered analytics, and virtual classrooms, we provide end-to-end education technology services.",

            "By combining innovation, scalability, security, and user-focused design, Sparsh Technologies empowers educational institutions to build smarter campuses and prepare students for tomorrow's opportunities.",
        ],

        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    },

    // ===========================
    // CTA
    // ===========================
    cta: {
        title: "Empower the Future of Education",

        description:
            "Partner with Sparsh Technologies to build secure, intelligent, and future-ready education solutions that enhance learning and transform academic institutions.",

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