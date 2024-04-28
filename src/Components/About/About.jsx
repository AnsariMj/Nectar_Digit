import React from 'react';
import { CiAt } from "react-icons/ci";
import { FaCloudUploadAlt, FaHashtag, FaHtml5, FaJava, FaPencilRuler, FaRegLightbulb, FaUserLock } from "react-icons/fa";
import { FaBagShopping, FaDatabase, FaNetworkWired } from "react-icons/fa6";
import { GrWordpress } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { RiAppStoreLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";

const About = () => {
    return (
        <>

            <div className='bg-cover w-full block mt-6' style={{ backgroundImage: 'url("/bg7.png")' }}>
                <div className=' container max-w-[1200px] mx-auto '>
                    <div className=' text-center max-w-[800px] m-auto mb-16 '>
                        <h3 className='text-5xl pt-10 font-semibold text-[#fff]'>How Can Your Company Get Benefit From Nector Digit?</h3>
                        <p className='mt-5 mb-6 text-[#fff] text-xl leading-8'>
                            See some of the industries we have vast experience working in as a full-service.
                        </p>
                        <button className='text-[#fff] bg-[#dc3b05] inline-block rounded-3xl font-bold text-xl p-2  '>View  More Servies</button>
                    </div>
                    <div className=' flex flex-wrap  shadow-indigo-400 bg-[#fff] mb-[-182px]'>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaCloudUploadAlt className=' text-orange-600  ml-[85px] text-4xl mb-2' />
                                <div className=' font-semibold'> Domain Registraion </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <CiAt className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Web/Email Hostign </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <SlScreenDesktop className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Responsive Website Designe </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaHtml5 className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Web Development</div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaRegLightbulb className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Digital Marketing </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <IoSearch className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Search Engine Optimization </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <GrWordpress className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Wordpress/CMS Solutions</div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaBagShopping className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Ecommerce/Online Store Solution </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <RiAppStoreLine className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Custom Application Development </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaDatabase className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>
                                    Software Architect Design and Development </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                < FaHashtag className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Social Media Optimization
                                </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaJava className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Mobile Application Development </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaUserLock className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Data Security
                                </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaNetworkWired className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Graphic Design
                                </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaPencilRuler className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Hardware Networking
                                </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <IoSearch className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'>Search Engine Optimization </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <FaBagShopping className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Ecommerce/Online Store Solution </div>
                            </div>
                        </div>
                        <div className='py-8 border-r-[2px] border-b-[2px] w-[16.66%] text- relative cursor-pointer z-[0  transform transition-transform hover:scale-110'>
                            <div className=' text-center'>
                                <CiAt className=' text-orange-600  font-extrabold ml-[85px] text-4xl mb-2' />
                                <div className='font-semibold'> Web/Email Hostign </div>
                            </div>
                        </div>

                    </div>
                </div>
                <h1>mj</h1>
            </div>
            <div className=' py-20 bloc'>


            </div>
        </>
    )
}

export default About