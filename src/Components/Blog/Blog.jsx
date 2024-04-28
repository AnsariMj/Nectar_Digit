import React from 'react';
import { FaChartBar } from "react-icons/fa6";

const Blog = () => {
    return (
        <>
            <div className=' w-full bg- block mb-8 pt-12'>
                <div className='max-w-[1300px]  px-20 mx-auto container'>
                    <div className=' text-center mb-12'>
                        <div className='flex justify-center gap-2'>
                            <h2 className=' font-bold text-xl uppercase'>OUR LATEST </h2>
                            <h2 className=' font-bold text-xl uppercase text-blue-500 '> BLOG</h2>
                        </div>
                        <p className=' text-lg mb-6 mt-4'>We provide a range of IT related services at reasonable cost and with highest quality possible.

                        </p>
                        <span className='px-3 font-bold text-orange-600 relative leading-4 inline-block '>
                            <FaChartBar />
                        </span>
                    </div>

                    <div className='flex justify-center  flex-wrap  gap-8  '>
                        <div className='   shadow-2xl    text-center '>
                            <img className=' h-64 w-full  ' src='/ss.png' alt="" />
                            <h3 className=' hover:bg-red-900   text-[#090504] font-semibold text-xl p-6 shadow-2xl bg-[#fff]'>What is Market Place?</h3>
                        </div>
                        <div className='   shadow-2xl    text-center '>
                            <img className=' h-64  w-full  ' src='/Seo.jpg' alt="" />
                            <h3 className=' hover:bg-red-900   text-[#090504] font-semibold text-xl p-6 shadow-2xl bg-[#fff]'>Search Engine Optimization (SEO)</h3>
                        </div>
                        <div className='   shadow-2xl   text-center '>
                            <img className=' h-64    w-full ' src='/Tranding.jpg' alt="" />
                            <h3 className=' hover:bg-red-900   text-[#090504] font-semibold text-xl p-6 shadow-2xl bg-[#fff]'>Technologies trends in Nepal</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog