import FooterLogo from "../FooterLogo";
import FooterColumn from "../FooterColumn";
import FooterContact from "../FooterContact";

import {
    companyLinks,
    industries,
    services,
} from "../footerData";

const FooterMain = () => {
    return (
        <section
            className="
                relative
                border-b
                border-white/10
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl

                    px-6
                    py-16

                    sm:px-8
                    lg:px-10
                    lg:py-20
                "
            >
                <div
                    className="
                        grid
                        gap-14

                        sm:grid-cols-2

                        lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr]
                        lg:gap-10

                        xl:gap-14
                    "
                >
                    {/* Logo */}
                    <div>
                        <FooterLogo />
                    </div>

                    {/* Company */}
                    <div>
                        <FooterColumn
                            title="Company"
                            links={companyLinks}
                        />
                    </div>

                    {/* Industries */}
                    <div>
                        <FooterColumn
                            title="Industries"
                            links={industries}
                        />
                    </div>

                    {/* Services */}
                    <div>
                        <FooterColumn
                            title="Services"
                            links={services}
                        />
                    </div>

                    {/* Contact */}
                    <div>
                        <FooterContact />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterMain;