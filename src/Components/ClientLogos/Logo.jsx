import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Logo = () => {
    return (
        <>
            <div className='mb-12  overflow-hidden'>
                <div className=' container max-w-[1200px] mx-auto px-4'>
                    <div className='p-9 bg-[#022d62] relative shadow-2xl rounded-md flex justify-between text-white '>
                        <div className=' absolute text-white bg-[#dc3224] rounded-full w-52 h-52 top-[-42px] left-[0px]  '></div>
                        <div className='font-bold z-[1] '>Our Clients</div>
                        <div className='ml-8  z-[1] w-[140px] h-10 gap-5 flex  justify-center items-center mx-[-15px] '>
                            <img src="/panache.png" alt="" />
                            <img src="/om.png" alt="" />
                            <img src="/pardafas.png" alt="" />
                            <img src="/pata.png" alt="" />
                            <img src="/fn.png" alt="" />
                            <div className=' w-[150px] h-10'>
                            </div>

                        </div>
                        <div className=' font-bold  px-4'>
                            <div className=' flex gap-2 justify-center items-baseline'>
                                <div>View More Clients</div>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo