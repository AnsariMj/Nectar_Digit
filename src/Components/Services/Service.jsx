import React from 'react';
import { FaChartBar } from "react-icons/fa6";
import ServiceCard from './ServiceCard';
const Service = () => {
    return (
        <>
            <div className=' w-full block'>
                <div className='max-w-[1200px]   mx-auto container'>
                    <div className=' text-center mb-12'>
                        <div className='flex justify-center gap-2'>
                            <h2 className=' font-bold text-xl uppercase'>OUR LATEST </h2>
                            <h2 className=' font-bold text-xl uppercase text-blue-500 '> Services</h2>
                        </div>
                        <p className=' text-lg mb-6 mt-4'>We provide a range of IT related servies ar reasonable cost and with highest quality possible</p>
                        <span className='px-3 font-bold text-orange-600 relative leading-4 inline-block '>
                            <FaChartBar />
                        </span>
                    </div>
                    <div className=' md:flex    text-center   '>
                        <ServiceCard img={'web-design-development.png'} heading={"Web Designe & Development"} description={'Cross-browser and cross-device compatibility driven by mobile responsiveness all under one roof.Starting from basic website designs, including CMS...'} />
                        <ServiceCard img={'mobile-app-development-01-1.png'} heading={"Mobile App Development"} description={'Creating seamless and intuitive mobile applications that offer the best user experience is what our team of mobile app development professionals at Ne...'} />
                        <ServiceCard img={'digital-marketing-01-1.png'} heading={"Digital Marketing"} description={'Digital marketing comprises of a number of activities for the web apart from marketing and each and every activity needs to be executed with focus on...'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service