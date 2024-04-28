import React from 'react'
import Particle from '../../Particle'

const Slider = () => {
    return (
        <>
            <Particle />
            <div style={{ backgroundImage: 'linear-gradient(-215deg, #292391 4%, #e53e8e 96%)', borderRadius: ' 0% 0% 30% 30% / 0% 0% 10% 8%' }} className=' relative min-h-[750px] rounded-br-3xl mb-[-80px] z-[-1] '>
                <div className=' container max-w-[720px] mx-auto px- '>
                    <div className='md:flex justify-center items-center min-h-[700px] '>
                        <div className='pt-8 w-[80%] ml-28 pr-2 mr-80'>
                            <h1 className='text-5xl leading-10 font-bold  text-[#fff] mb-8  '>Lets Grow Toghether and Be Success</h1>
                            <p className='text-[#fff]  text-xl font-bold leading-9 mb-20 '>  Nectar Digit</p>
                        </div>
                        <div className='flex w-[70%]'>
                            <div className='w-[585px] ml-8'>
                                <img src="/form-img.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider