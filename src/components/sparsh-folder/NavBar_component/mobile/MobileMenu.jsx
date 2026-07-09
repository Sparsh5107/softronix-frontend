import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, children }) => {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`
                z-40
                bg-black/40
                transition-all
                fixed inset-0 backdrop-blur-sm duration-300
                ${isOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                    }
              `}
            />

            {/* Drawer */}
            <aside
                className={`
                z-50 flex flex-col
                h-screen w-[85vw] max-w-90
                bg-white
                shadow-2xl transition-transform
                fixed top-0 right-0 duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
              `}
            >
                {/* Header */}
                <div
                    className="
                    flex
                    h-20
                    px-6
                    border-b border-gray-200
                    items-center justify-between
                  "
                >
                    <h2
                        className="
                        text-lg font-semibold text-gray-800
                      "
                    >
                        Menu
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                        p-2
                        rounded-md
                        transition-colors
                        duration-300 hover:bg-gray-100
                      "
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div
                    className="
                    flex-1 overflow-y-auto
                    px-6 py-6
                  "
                >
                    {children}
                </div>
            </aside>
        </>
    );
};

export default MobileMenu;
