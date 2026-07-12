import { logo } from "../navdata";
import { Link } from "react-router-dom";
const NavLogo = () => {
    return (
        <Link to={logo.path} className="flex items-center">
            <img
                src={logo.src}
                alt={logo.alt}
                className="w-auto h-12"
            />
        </Link>
    );
};

export default NavLogo;