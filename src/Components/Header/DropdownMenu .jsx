import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const DropdownMenu = () => {
    const [OpenMenu, setOpenMenu] = useState(false);

    const toggle = () => {
        setOpenMenu(!OpenMenu);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type=""
                    className="inline-flex justify-center w-full  px-4 py- text-base font-bold text-gray-600 "
                    // onMouseEnter={() => setOpenMenu(true)}
                    // onMouseLeave={() => setOpenMenu(false)}
                    onClick={toggle}
                >
                    AD MARKETING <FaAngleDown className="ml-2 mt-1" />
                </button>
            </div>

            {
                OpenMenu && (
                    <div className="origin-top-right absolute mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50  ">
                        <div className="py-1">
                            <a
                                href="#"
                                className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow"
                            >
                                Facebook Ad Marketing
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow"
                            >
                                Instagram Ad Marketing
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow"
                            >base
                                Google AdWords
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow"
                            >
                                Google Ad Marketing
                            </a>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default DropdownMenu;