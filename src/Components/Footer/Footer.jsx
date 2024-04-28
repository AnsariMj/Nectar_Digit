import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaRegMap } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight, MdOutlineLocalPhone } from "react-icons/md";
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <>
            <div className='w-full py-16  block font-sans bg-[#f8f8f8] '>
                <div className='mx-auto max-w-[1200px] container'>
                    <div className='  sm:grid-cols-2 grid md:grid-cols-4 mx-[-15px] '>
                        <div className='w-72'>
                            <div>
                                <img className='mb-4' src="/main logo.png" alt="Nectar Digit" />
                            </div>
                            <p className='text-[#444] leading-7'>
                                Best and reliable Digital Marketing company with expertise in SEO, Software Development, Web Design / Development, and Mobile application</p>
                        </div>


                        <div className='w-72'>
                            <div className=' pl-16'>
                                <h3 className='font-bold'>USEFUL LINKS</h3>
                                <div className=' text-orange-700 border-orange-950 line-through'>-------</div>
                                <ul className=' leading-8' >
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Home</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">About</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Team</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Career</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Contact</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Privay and Policy</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='w-72'>
                            <div className=' pl-16'>
                                <h3 className='font-bold'>OUR SERVICES</h3>
                                <div className=' text-orange-700 border-orange-950 line-through'>-------</div>
                                <ul className='leading-8 ' >
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Web Design & Development</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Mobile App. Development</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Digital Marketing</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Branding & Identity</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">Software Development</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center'> <MdKeyboardDoubleArrowRight /><a href="#">IT Consultancy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-72'>
                            <div className=' pl-16'>
                                <h3 className='font-bold'>QUICK CONTACT</h3>
                                <div className=' text-orange-700 border-orange-950 line-through'>-------</div>
                                <ul className=' leading-6 ' >
                                    <div className=' flex gap-2 '>
                                        <FaRegMap className='text-3xl' />
                                        <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center mb-8'>   <a href="#"> Nepalgunj-4, Banke, Lumbini Province Nepal</a></li>
                                    </div>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center gap-2 mb-8 '>  <AiOutlineMail className='text-2xl' /> <a href="#"> ansarimj14@gmail.com</a></li>
                                    <li className=' flex hover:text-orange-600 hover:underline text-[#444] items-center gap-2'>  <MdOutlineLocalPhone className='text-2xl' /> <a href="#">  9815598650  9868166231</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </>


    )
}

export default Footer