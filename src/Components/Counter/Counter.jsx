import { default as React } from 'react';
import { FaFolderOpen } from "react-icons/fa";
import { FaBullhorn, FaEye, FaUserPlus } from "react-icons/fa6";

const Counter = () => {
    return (
        <>
            <div className=' my-20 py-16 bg-[#0951a9]'>
                <div className=' max-w-[1200px] mx-auto container' >
                    <div className=' grid md:grid-cols-4 sm:grid-cols-2 gap-8  justify-between mx-[-15px'>
                        <div className='flex justify-center items-center'>
                            <div className='text-orange-700 mr-6 text-7xl'> <FaEye /></div>
                            <div className='text-[#fff] block'>
                                <span className=' font-serif text-5xl'> 1190</span>
                                <p className='pt-2'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-orange-700 mr-6 text-7xl'> <FaUserPlus /></div>
                            <div className='text-[#fff]  block'>
                                <span className='font-serif text-5xl'> 345</span>
                                <p className=' pt-2'> Skilled Experts</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-orange-700 mr-6 text-7xl'> <FaFolderOpen /></div>
                            <div className='text-[#fff] block'>
                                <span className=' font-serif text-5xl'> 548</span>
                                <p className=' pt-2'>Finished Project</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-orange-700 mr-6 text-7xl'> <FaBullhorn /></div>
                            <div className='text-[#fff] block'>
                                <span className=' font-serif text-5xl'> 980</span>
                                <p className=' pt-2'>Media Post</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Counter