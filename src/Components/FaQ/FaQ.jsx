import React from 'react'

const FaQ = () => {
    return (
        <>
            <div className=' my-20 py-16 '>
                <div className='max-w-[1200px] mx-auto container'>
                    <div className=''>
                        <div className='items-start mx-[-15px] grid md:grid-cols-2 sm:grid-cols-1  '>
                            <div className=' sm:ml-12 md:ml-0'>
                                <img src="/faq-bg.png" alt="" />
                            </div>
                            <div className=' gap-[-5px]'>
                                <div className='mt-5 bg-[#e8e8e8] py-7 '>

                                    <h2 className='ml-8 text-[#090504] text-xl font-semibold '>
                                        Does your product provide value to others?</h2>
                                </div>
                                <div className='mt-1 bg-[#f7f7f7] py-4 '>

                                    <p>Yes, cause we hire only those individuals who are born ready to give their best to our company's given tasks.</p>

                                </div>
                                <div className='mt-4 bg-[#e8e8e8] py-6 '>

                                    <p className=' ml-8 text-[#090504] text-xl font-semibold'>
                                        How likely would you recommend your products to others?</p>

                                </div>
                                <div className='mt-4 bg-[#e8e8e8] py-6 '>

                                    <p className='ml-8 text-[#090504] text-xl font-semibold'>
                                        Why should others prefer Nectar Digit for their business?</p>

                                </div>
                                <div className='bg-[#fff]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaQ