import React from 'react'

export const NewsLetter = () => {
    return (
        <>
            <div className='py-24 relative'>
                <div className='  container max-w-[720px] mx-auto '>
                    <div className=' max-w-[720px] items-center m-auto'>
                        <h3 className=' text-4xl ml-24 font-bold  mb-5 '> Subscribe to Our Newsletter</h3>
                        <div className='relative '>
                            <form action="">
                                <input className=' h-16 bg-[#fff] rounded-lg pl-5 pr-96 border-l-2 border-t-2 border-b-2' type="text" name="email" id="email" placeholder='Enter your email address' />
                                <button className='cursor-pointer px-8 py-4 absolute top-0 right-0 bottom-0 border bg-orange-700 text-[#fff] text-xl rounded-r'>Subscribe Now</button>

                            </form>

                        </div>
                    </div>
                    <div className=' hidden sm:hidden md:block absolute w-[180px] left-[8%]  bottom-[36%] z-[-1]'>
                        <img src="/shape2.png" alt="shape2" />
                    </div>
                    <div className='hidden sm:hidden md:block absolute w-[150px] right-[7%]  bottom-[36%] z-[-1]'>
                        <img src="/shape3.png" alt="shape2" />
                    </div>
                </div>
            </div>
        </>
    )
}
