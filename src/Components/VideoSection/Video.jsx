import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";


const Video = () => {
    return (
        <>
            <div className='bg-cover object-fill w-full block mb-16' style={{ backgroundImage: 'url("/public/bg7.png")' }}>
                <div className=' container max-w-[1200px] mx-auto '>
                    <div className=' lg:flex  justify-between mx-[-15px] items-center'>
                        <div className="px-5 py-20 ">
                            <div className='pl-24'>
                                <div className='pl-6'>
                                    <div className='pr-6  mb-8'>
                                        <span className='block ml-[-50px] text-xl font-semibold text-[#fff] relative pl-16 mb-4'> How we satisfy you</span>
                                        <h2 className='text-[#fff] leading-10 font-bold text-4xl mb-7'> We Help You to Grow Your Business Quickly</h2>
                                        <div className='mt-16 ml-52 text-center'>
                                            <a href="">
                                                <i >
                                                    <FaCirclePlay className='h-24 w-24 text-white text-center   ' />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr-20 ">
                            <div className='  mb-[-120px]'>
                                <img src="/video-post.png" alt="" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default Video