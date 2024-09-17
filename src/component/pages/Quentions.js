import React from 'react';
import Accordion from './Accordion'

const Quentions = () => {
    return (
        <div className='bg-gray-50'>
            <div className='text-center py-12 bg-yellow-50'>
                <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
            </div>
            <div className='md:flex justify-center gap-10 w-full items-center py-8'>
                <div>
                    <h1 className='text-4xl font-semibold pb-8'>Frequently asked questions 📑</h1>
                    <Accordion />
                </div>

                <div className="lg:w-1/3 md:w-full bg-white flex flex-col w-full md:py-4 mt-8 md:mt-0 border md:px-8 rounded ">
                    <h2 className="text-gray-900 text-[40px] bg-yellow-50 font-semibold px-2 py-4 rounded-lg text-center title-font">Have Any Qustion❓</h2>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">First Name*</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email*</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message*</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-center text-lg">Button</button>
                </div>
            </div>
        </div>
    )
}

export default Quentions