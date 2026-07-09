// footerData.js

import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

import {
    logo,
    industries,
    services,
} from "../NavBar_component/navData";

// Reuse Navbar Data
export { logo, industries, services };

/**
 * Company Links
 */
export const companyLinks = [
    {
        id: 1,
        title: "Who We Are",
        path: "/about",
    },
    {
        id: 2,
        title: "Career",
        path: "/career",
    },
    {
        id: 3,
        title: "Contact",
        path: "/contact",
    },
];

/**
 * Footer Description
 */
export const footerDescription =
    "Empowering businesses through innovative software solutions, digital transformation, and technology consulting.";

/**
 * Contact Information
 */
export const contactInfo = {
    address: [
        "Flat No. 201, Gayatri Apartment",
        "Plot No. 6, IT Park Road",
        "Near Prasad Nursing Home",
        "Trimurti Nagar",
        "Nagpur, Maharashtra 440022",
    ],

    email: "sales@softtronix.in",

    phone: "+91 9765073480",
};

/**
 * Social Media
 */
export const socialLinks = [
    {
        id: 1,
        title: "LinkedIn",
        icon: FaLinkedinIn,
        url: "",
    },
    {
        id: 2,
        title: "Facebook",
        icon: FaFacebookF,
        url: "",
    },
    {
        id: 3,
        title: "Instagram",
        icon: FaInstagram,
        url: "",
    },
    {
        id: 4,
        title: "Twitter / X",
        icon: FaXTwitter,
        url: "",
    },
];

/**
 * Bottom Footer Links
 */
export const bottomLinks = [
    {
        id: 1,
        title: "Privacy Policy",
        path: "/privacy-policy",
    },
    {
        id: 2,
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
    },
];

/**
 * Copyright
 */
export const copyright = `© ${new Date().getFullYear()} Softtronix. All Rights Reserved.`;