import IndustriesMenu from "../dropdowns/IndustriesMenu";
import ServicesMenu from "../dropdowns/ServicesMenu";

const MegaMenu = ({ activeMenu }) => {
    return (
        <div
            className={`
        absolute
        left-0
        top-full
        w-full
        z-50
        transition-all
        duration-300
        ease-out

        ${activeMenu
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }
      `}
        >
            <div className="max-w-7xl mx-auto py-4">
                <div
                    key={activeMenu}
                    className="animate-fade"
                >
                    {activeMenu === "industries" && <IndustriesMenu />}
                    {activeMenu === "services" && <ServicesMenu />}
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;