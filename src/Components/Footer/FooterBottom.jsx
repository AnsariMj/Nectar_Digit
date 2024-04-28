import React from 'react';
const FooterBottom = () => {
    return (
        <>
            <div className='w-full py-4  block font-sans bg-[#e4e4e4] '>
                <div className='mx-auto max-w-[1200px] container'>
                    <ul className='flex justify-between'>
                        <li>Copyright &copy; 2024 Nectar Digit. All Right Reserved </li>
                        <li>Desing & Develop By : <a className='text-orange-600 hover:underline font-bold' href="#">MJ Ansari</a> </li>
                    </ul>
                </div>
            </div>
            <div className=' fixed  right-0 bottom-0 left-0  z-[100%]   h-full '>
                <div className='fixed left-5 bottom-5 z-[1021px]'>
                    <ul className=' flex'>
                        <li className='w-12 h-12'><img src="/image.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterBottom