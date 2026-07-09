import { useState } from "react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import MegaMenu from "./MegaMenu";

import MobileMenu from "../NavBar_component/mobile/MobileMenu";
import MobileMenuButton from "../NavBar_component/mobile/MobileMenuButton";
import MobileNavLinks from "../NavBar_component/mobile/MobileNavLinks";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="relative w-full bg-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        className="
                    relative
                    mx-auto
                    flex
                    h-20
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                "
      >
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavLinks
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobileMenuButton
            isOpen={mobileOpen}
            onToggle={() => setMobileOpen((prev) => !prev)}
          />
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <div className="hidden lg:block">
        <MegaMenu activeMenu={activeMenu} />
      </div>

      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <MobileMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <MobileNavLinks
            onClose={() => setMobileOpen(false)}
          />
        </MobileMenu>
      </div>
    </header>
  );
};

export default Navbar;