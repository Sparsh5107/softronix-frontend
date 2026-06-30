import NavDropdown from "./NavDropdown";
// from navbar data
import { navLinks } from "./navData";

const NavLinks = () => {

    return (
        <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) =>
                item.dropdown ? (
                    <NavDropdown
                        key={item.title}
                        title={item.title}
                        items={item.dropdown}
                    />
                ) : (
                    <a
                        key={item.title}
                        href={item.href}
                        className="relative inline-block
                                   after:absolute after:left-0 after:-bottom-1
                                   after:h-0.5 after:w-full
                                   after:bg-black
                                   after:origin-right after:scale-x-0
                                   after:transition-transform after:duration-300
                                   hover:after:origin-left hover:after:scale-x-100"
                    >
                        {item.title}
                    </a>
                )
            )}
        </div>
    );
};

export default NavLinks;