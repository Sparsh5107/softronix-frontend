import FooterCTA from "./footer_SK10/FooterCTA";
import FooterMain from "./footer_SK10/FooterMain";
import FooterBottom from "./footer_SK10/FooterBottom";

const Footer = () => {
    return (
        <footer
            className="
                relative
                mt-24

                overflow-hidden

                bg-[#081320]
                text-white

                border-t
                border-white/10
            "
        >
            {/* Background Accent */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-blue-400/60
                    to-transparent
                "
            />

            {/* CTA */}
            <FooterCTA />

            {/* Main Footer */}
            <FooterMain />

            {/* Bottom Footer */}
            <FooterBottom />
        </footer>
    );
};

export default Footer;