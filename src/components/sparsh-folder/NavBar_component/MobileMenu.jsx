import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "./navData";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="lg:hidden p-2"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md">
          <div className="flex flex-col p-6">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href || "#"}
                className="
                           border-b
                           border-gray-200
                           py-3
                           text-gray-700
                           hover:text-blue-600
                           transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;