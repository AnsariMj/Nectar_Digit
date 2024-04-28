import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='sticky top-0 z-50 bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex-shrink-0'>
                        <a href="#">
                            <img className='w-40' src="/main logo.png" alt="Nectar Digit" />
                        </a>
                    </div>
                    <div className='hidden md:flex md:space-x-4'>
                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>

                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                ABOUT
                            </NavLink>
                        </li>

                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                SERVICES
                            </NavLink>
                        </li>

                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/addMarketing"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                ADD MARKETING
                            </NavLink>
                        </li>
                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    ` ${isActive ? " text-orange-600 " : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                BLOG
                            </NavLink>
                        </li>
                        <li className=' font-sans text-l font-bold px-5  inline-block'>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    ` ${isActive ? "text-orange-600" : "text-gray-600 hover:underline "}  hover:text-orange-600`
                                }
                            >
                                CONTACT
                            </NavLink>
                        </li>

                    </div>
                    <div className=''>
                        <button onClick={toggleMenu} className=' text-orange-600'>
                            <HiBars3BottomRight className='w-8 h-8' />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden   overflow-hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        <NavLink
                            exact
                            to="/"
                            className='text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium'
                            activeClassName='text-orange-600'
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/about"
                            className='text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium'
                            activeClassName='text-orange-600'
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to="/services"
                            className='text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium'
                            activeClassName='text-orange-600'
                        >
                            SERVICES
                        </NavLink>

                        {/* Add other NavLinks here */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
