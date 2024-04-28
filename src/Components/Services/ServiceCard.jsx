import React from 'react';

const ServiceCard = ({ img, heading, description }) => {
    return (
        <div className='px-4 w-full relative'>
            <div className='w-full max-w-md mx-auto bg-white rounded-md shadow-2xl text-center px-8 py-10 mb-6'>
                <div className='w-full'>
                    <img src={img} alt="" className='mx-auto mb-6' style={{ maxWidth: '200px' }} />
                </div>
                <div>
                    <h3 className='font-bold mb-4'>{heading}</h3>
                    <p className='text-gray-700 leading-6 mb-4'>{description}</p>
                    <button className='hover:bg-blue-500 bg-orange-600 text-white py-2 px-4 rounded-full'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
