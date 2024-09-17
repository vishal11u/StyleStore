import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { GiLaurelsTrophy } from 'react-icons/gi';

const servicesData = [
    {
        icon: <FaOpencart size={55} className='text-yellow-400' />,
        title: 'Free Shipping',
        description: 'When ordering over $100',
    },
    {
        icon: <IoReload size={55} className='text-yellow-400' />,
        title: 'Free Return',
        description: 'Get Return within 30 days',
    },
    {
        icon: <AiFillSafetyCertificate size={55} className='text-yellow-400' />,
        title: 'Secure Payment',
        description: '100% Secure Online Payment',
    },
    {
        icon: <GiLaurelsTrophy size={55} className='text-yellow-400' />,
        title: 'Best Quality',
        description: 'Original Product Guaranteed',
    },
];

const Services = () => {
    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 px-2 md:pl-8 justify-center py-5 md:py-10'>
                {servicesData.map((service, index) => (
                    <div key={index} className='flex items-center gap-4'>
                        {service.icon}
                        <div className='mt-1 md:mt-0'>
                            <h1 className='font-semibold text-[14px] md:text-[18px]'>{service.title}</h1>
                            <p className='text-gray-500 text-sm text-[11px] md:text-[14px]'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </>
    );
};

export default Services;
