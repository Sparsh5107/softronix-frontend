// src/data/contactData.js

import { MapPin } from "lucide-react";

export const contactData = {
    hero: {
        title: "Let's Get Moving!",
        subtitle:
            "Your purpose, our passion. Connect with us and let's make things happen.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },

    offices: [
        {
            icon: MapPin,
            country: "India (IND)",
            city: "Nagpur",
            flag: "fi fi-in",

            address: [
                "Flat No. 201, Gayatri Apartment, Plot No. 6,",
                "IT Park Rd, near Prasad Nursing Home, Gayatri Nagar,",
                "Trimurtee Nagar, Nagpur, Maharashtra 440022.",
            ],

            email: "sales@softtronix.in",
            phone: "+91 9765073480",
        },

        {
            icon: MapPin,
            country: "India (IND)",
            city: "Mumbai",
            flag: "fi fi-in",

            address: [
                "Haware Infotech Park, 1005, opp. Inorbit Mall,",
                "Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703.",
            ],

            email: "sales@softtronix.in",
            phone: "+91 9156633480",
        },

        {
            icon: MapPin,
            country: "United Kingdom (UK)",
            city: "Leicester",
            flag: "fi fi-gb",

            address: [
                "303 Narborough Rd,",
                "Leicester LE3 2RB,",
                "United Kingdom",
            ],

            email: "sales@softtronix.uk",
            phone: "",
        },

        // {
        //     icon: MapPin,
        //     country: "United States (USA)",
        //     city: "Dallas",
        //     flag: "fi fi-gb",

        //     address: [
        //         "700 Central Expressway South,",
        //         "Suite 400, Allen,",
        //         "Texas 75013, USA",
        //     ],

        //     email: "sales@softtronix.us",
        //     phone: "",
        // },
    ],
};