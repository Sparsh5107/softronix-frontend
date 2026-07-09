import {
    MapPin,
    Mail,
    Phone,
} from "lucide-react";

import { contactInfo } from "./footerData";

const FooterContact = () => {
    return (
        <div>
            {/* Heading */}
            <h3
                className="
                    relative
                    inline-block

                    pb-3

                    text-lg
                    font-semibold
                    tracking-wide

                    text-white

                    after:absolute
                    after:left-0
                    after:bottom-0

                    after:h-0.5
                    after:w-10

                    after:rounded-full
                    after:bg-[#0077c8]
                "
            >
                Contact
            </h3>

            <div className="mt-7 space-y-7">
                {/* Address */}
                <div
                    className="
                        group
                        flex
                        items-start
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-white/10

                            bg-white/5

                            text-[#0077c8]

                            transition-all
                            duration-300

                            group-hover:-translate-y-1
                            group-hover:border-[#0077c8]
                            group-hover:bg-[#0077c8]
                            group-hover:text-white
                        "
                    >
                        <MapPin size={18} />
                    </div>

                    <div
                        className="
                            space-y-1

                            text-[15px]
                            leading-7

                            text-gray-400
                        "
                    >
                        {contactInfo.address.map((line, index) => (
                            <p key={index}>
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Email */}
                <div
                    className="
                        group
                        flex
                        items-start
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-white/10

                            bg-white/5

                            text-[#0077c8]

                            transition-all
                            duration-300

                            group-hover:-translate-y-1
                            group-hover:border-[#0077c8]
                            group-hover:bg-[#0077c8]
                            group-hover:text-white
                        "
                    >
                        <Mail size={18} />
                    </div>

                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="
                            pt-2

                            text-[15px]
                            text-gray-400

                            transition-colors
                            duration-300

                            hover:text-white
                        "
                    >
                        {contactInfo.email}
                    </a>
                </div>

                {/* Phone */}
                <div
                    className="
                        group
                        flex
                        items-start
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-white/10

                            bg-white/5

                            text-[#0077c8]

                            transition-all
                            duration-300

                            group-hover:-translate-y-1
                            group-hover:border-[#0077c8]
                            group-hover:bg-[#0077c8]
                            group-hover:text-white
                        "
                    >
                        <Phone size={18} />
                    </div>

                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="
                            pt-2

                            text-[15px]
                            text-gray-400

                            transition-colors
                            duration-300

                            hover:text-white
                        "
                    >
                        {contactInfo.phone}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;