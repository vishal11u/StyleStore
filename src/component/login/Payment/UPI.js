import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const UPI = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        navigate("/")
    };
    return (
        <div>
            <section class="antialiased md:flex justify-center border text-gray-600 py-6">
                <div className=''>
                    <img className='md:h-[66vh]' src='https://img.freepik.com/free-vector/mobile-banking-concept-illustration_114360-12396.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' />
                </div>

                <div class="h-full mt-5 md:mt-0">
                    <div>
                        <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                            <img class="" src="https://img.freepik.com/free-vector/online-bill-payment-via-mobile-phone-concept_107791-16766.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais" width="460" height="180" alt="Pay background" />
                        </div>

                        <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                            <div class="bg-white px-8 pb-6 ">
                                <div class="text-center mb-6">
                                    <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">🔥 Payment Methods 🔥</h1>
                                </div>

                                <div class="flex justify-center mb-6">
                                    <div class="relative flex w-full p-1 bg-gray-100 rounded">
                                        <Link to="/payment" class="relative flex-1 text-sm font-medium text-center p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With Card</Link>
                                        <button class="relative bg-white border rounded-md flex-1 text-sm font-medium text-center p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >Pay With Card</button>
                                    </div>
                                </div>

                                <div x-show="card">
                                    <div class="space-y-4">
                                        <div>
                                            <label class="block text-sm font-medium mb-1">UPI id <span class="text-red-500">*</span></label>
                                            <input name='Pin' class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="********@moye" {...register("Upi", { required: true })} />
                                            <p className='text-red-500 text-[13px] text-center'>
                                                {errors.Upi?.type === "required" && "Upi number is required"}
                                            </p>
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium mb-1" >Mobile no. <span class="text-red-500">*</span></label>
                                            <input class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="+91 **********" {...register("mobile", { required: true })} />
                                            <p className='text-red-500 text-[13px] text-center'>
                                                {errors.mobile?.type === "required" && "Mobile number is required"}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='pt-4'>
                                    <div>
                                        <div class="mb-2">
                                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2" onClick={handleSubmit(onSubmit)}>Pay with UPI - ₹253.00</button>
                                        </div>
                                        <div class="text-xs text-gray-500 italic text-center" >You'll be charged ₹253, including ₹28 for GST in India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UPI