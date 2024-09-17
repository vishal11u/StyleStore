import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className='text-center'>
            <p className="font-semibold text-[25px] pt-4 w-full rounded-lg">
                Your shopping cart is <span className='text-red-600'>empty!</span> Add some products to start <span className='text-green-600'>shopping...</span>
            </p>
            <h1 className="flex justify-center font-semibold text-indigo-600 text-lg mt-3">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                <Link to="/ ">Continue Shopping</Link>
            </h1>
            <div className='flex justify-center pb-8'>
                <img className='md:h-[70vh]' src='https://img.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_114360-8223.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' />
            </div>
        </div>
    )
}

export default EmptyCart