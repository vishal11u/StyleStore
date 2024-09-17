import React from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        navigate("/")
    };

    return (
        <div className=''>
            <section class="antialiased  md:flex justify-center text-gray-600 border py-8">
                <div className=''>
                    <img className='' src='https://img.freepik.com/free-vector/mobile-banking-concept-illustration_114360-13928.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' />
                </div>

                <div class="h-full mt-5 md:mt-0">
                    <div>
                        <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                            <img class="" src="https://img.freepik.com/free-photo/secure-mobile-payment-with-phone-cards-pos_107791-17380.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais" width="460" height="180" alt="Pay background" />
                        </div>

                        <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                            <div class="bg-white px-8 pb-6 ">
                                <div class="text-center mb-6">
                                    <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">🔥 Payment Methods 🔥</h1>
                                </div>

                                <div class="flex justify-center mb-6">
                                    <div class="relative flex w-full p-1 bg-gray-100 rounded">
                                        <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                            <span class="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out translate-x-full'"></span>
                                        </span>
                                        <button class="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With Card</button>
                                        <Link to="/upi" class="text-center relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With UPI</Link>
                                    </div>
                                </div>

                                <div x-show="card">
                                    <div class="space-y-4">

                                        <div>
                                            <label class="block text-sm font-medium mb-1">Card Number <span class="text-red-500">*</span></label>
                                            <input name='Pin' class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234" {...register("cardNumber", { required: true, maxLength: 12 })} />
                                            <p className='text-red-500 text-[13px] text-center'>
                                                {errors.cardNumber?.type === "required" && "Enter Number"}
                                                {errors.cardNumber?.type === "maxLength" && "Maximum 12 Number's"}
                                            </p>
                                        </div>

                                        <div class="flex space-x-4">
                                            <div class="flex-1">
                                                <label class="block text-sm font-medium mb-1">Expiry Date <span class="text-red-500">*</span></label>
                                                <input class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" {...register("expiryDate", { required: true })} />
                                                <p className='text-red-500 text-[13px] text-center'>
                                                    {errors.expiryDate?.type === "required" && "Enter Expire Date"}
                                                </p>
                                            </div>
                                            <div class="flex-1">
                                                <label class="block text-sm font-medium mb-1" >CVC <span class="text-red-500">*</span></label>
                                                <input class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" {...register("cvc", { required: true })} />
                                                <p className='text-red-500 text-[13px] text-center'>
                                                    {errors.cvc?.type === "required" && "Enter CVC"}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium mb-1" >Name on Card <span class="text-red-500">*</span></label>
                                            <input class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="****-Bank" {...register("cardHolderName", { required: true })} />
                                            <p className='text-red-500 text-[13px] text-center'>
                                                {errors.cardHolderName?.type === "required" && "Enter Bank Detail"}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='pt-4'>
                                    <div>
                                        <div class="">
                                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2" onClick={handleSubmit(onSubmit)}>Pay with PayPal - ₹253.00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Payment