import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-8">
                <NavLogo />
                <NavLinks />
                <MobileMenu />
            </div>
        </header>
    );
};

export default Navbar;