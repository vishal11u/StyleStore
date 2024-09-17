import React from 'react';
import { Link } from 'react-router-dom';
import { GiIndianPalace } from 'react-icons/gi'

const Topbar = () => {

    return (
        <div className='gap-6 hidden lg:flex'>
            <div className='flex items-center'>
                <p className='px-1 py-1 rounded-full text-white border'><GiIndianPalace size={17} /></p>
                <select className=' cursor-pointer text-sm px-2 text-white bg-transparent'>
                    <option>India</option>
                </select>
            </div>

            <select className=' cursor-pointer text-sm px-2 text-white bg-transparent'>
                <option>INR</option>
            </select>

            <select className=' cursor-pointer text-sm px-2 bg-transparent text-white'>
                <option>English</option>
            </select>
        </div>
    )
}

export default Topbar