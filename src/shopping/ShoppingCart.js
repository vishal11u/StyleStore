import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove, increaseQuantity, decreaseQuantity } from '../redux/Slice/Slice';
import EmptyCart from './EmptyCart';

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(remove(item.id));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item.id));
    };

    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item.id));
    };

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    return (
        <div className=' pb-1'>

            {!cartItems.length ? (
                <EmptyCart />
            ) : (
                <div>
                    <div className=' text-center pt-5 font-semibold '>
                        <h1 className=' text-4xl text-yellow-400'><span className=' text-[40px] text-black'>Your</span> Cart 🛍️</h1>
                    </div>
                    <body className=" md:px-28">
                        <div className="container mx-auto mt-10 bg-gray-100">
                            <div className=" shadow-md border md:py-3 rounded-md md:px-3 my-10 md:flex">
                                <div className="md:w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                        <h2 className="font-semibold text-2xl">Items {cartItems.length}</h2>
                                    </div>
                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                                    </div>
                                    {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    {
                                        cartItems.map((cart) => (
                                            <div className="flex items-center hover:bg-gray-100 -mx-9 px-1 md:px-8 py-5" >
                                                <div className="flex w-2/5">
                                                    <div className="md:w-24 w-[100vw] mr-1 ">
                                                        <img className="h-24" src={cart.image} alt={cart.title} />
                                                    </div>
                                                    <div className="flex flex-col justify-between md:ml-4 flex-grow">
                                                        <span className="font-bold text-[10px] md:text-sm">{cart.title} </span>
                                                        <span className="text-red-500 text-[10px] md:text-xs">{cart.category} </span>
                                                        <p className="font-semibold hover:text-red-500 text-gray-500 text-[10px] md:text-xs cursor-pointer" onClick={() => handleRemove(cart)}>Remove</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center w-1/5">
                                                    <button className='font-semibold text-lg' onClick={() => handleDecreaseQuantity(cart)} >-</button>
                                                    <p className='rounded mx-2 px-2 md:px-2.5 bg-slate-200'>{cart.quantity}</p>
                                                    <button className='font-semibold text-lg' onClick={() => handleIncreaseQuantity(cart)}>+</button>
                                                </div>
                                                <span className="text-center w-1/5 font-semibold text-sm">₹{cart.price}</span>
                                                <span className="text-center w-1/5 font-semibold text-sm">₹{cart.price * cart.quantity}</span>
                                            </div>
                                        ))
                                    }

                                    {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <h1 className="flex font-semibold text-indigo-600 text-sm mt-10">
                                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                        <Link to="/ ">Continue Shopping</Link>
                                    </h1>
                                </div>

                                <div id="summary" className="md:w-1/4 px-8 py-10 ">
                                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                                    <div className="flex justify-between mt-10 mb-5">
                                        <span className="font-semibold text-sm uppercase">Items{cartItems.length}</span>
                                        <span className="font-semibold text-sm">₹{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div>
                                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                        <select className="block py-2 px-3 text-gray-600 w-full shadow border rounded text-sm">
                                            <option className=''>Standard shipping - ₹10.00</option>
                                        </select>
                                    </div>
                                    <div className="py-10">
                                        <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                                    </div>
                                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                                    <div className="border-t mt-8">
                                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                            <span>Total cost</span>
                                            <span>₹{totalPrice.toFixed(2)}</span>
                                        </div>
                                        <Link to='/payment' className="bg-indigo-600 flex justify-center font-semibold hover:bg-indigo-700 py-2  text-sm text-white uppercase w-full">Checkout</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </body>
                </div>
            )}
        </div>

    )
}

export default ShoppingCart;