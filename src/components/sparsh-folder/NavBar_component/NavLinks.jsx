import { NavLink } from "react-router-dom";
import { navLinks } from "./navData";
import { ChevronDown } from "lucide-react";

const linkClasses = `
  relative
  text-[15px]
  font-medium
  text-gray-800
  transition-colors
  duration-300
  hover:text-[#0077c8]

  after:absolute
  after:left-0
  after:-bottom-1.5
  after:h-0.5
  after:w-full
  after:bg-[#0077c8]
  after:content-['']
  after:scale-x-0
  after:origin-right
  after:transition-transform
  after:duration-300
  hover:after:scale-x-100
  hover:after:origin-left
`;

const NavLinks = ({ activeMenu, setActiveMenu }) => {
    console.log("NAv link runnig")
    console.log("Navbar state: ", activeMenu)
    return (
        <nav className="flex items-center gap-10">
            {navLinks.map((link) => {
                // DROPDOWN ITEMS (Industries / Services)
                if (link.menu) {
                    return (
                        <button
                            key={link.id}
                            type="button"
                            onMouseEnter={() => {
                                console.log("Hover : ", link.menu);
                                setActiveMenu(link.menu); // Fix: Removed space
                            }}
                            className={`${linkClasses} flex items-center gap-1`}
                        >
                            {link.title}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-500 ${activeMenu === link.menu ? "rotate-180" : ""}`}
                            />
                        </button>
                    );
                }

                // NORMAL LINKS
                return (
                    <NavLink key={link.id} to={link.path} className={linkClasses}>
                        {link.title}
                    </NavLink>
                );
            })}

        </nav >
    );
};

export default NavLinks;