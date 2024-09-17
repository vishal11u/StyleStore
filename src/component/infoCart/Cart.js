import React, { useState } from 'react';
import RatingDemo from '../../redux/RatingDemo';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../redux/Slice/Slice';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Cart = () => {
    const location = useLocation();
    const { item } = location.state;
    const dispatch = useDispatch();

    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [userReview, setUserReview] = useState('');

    const addToCart = (i) => {
        dispatch(add(i));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Added',
            showConfirmButton: false,
            timer: 1000,
        });
    };

    const handleAddReview = () => {
        if (userReview && userRating) {
            setReviews([...reviews, {
                text: userReview,
                rating: userRating,
                avatar: 'https://img.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7770.jpg?t=st=1726568932~exp=1726572532~hmac=e175bd1b461189f6820e81858f1342d02f5cb314d819a9e33703331652c05282&w=360'
            }]);
            setShowModal(false);
            setUserReview('');
            setUserRating(0);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Review Added',
                showConfirmButton: false,
                timer: 1000,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please provide both a rating and review.',
            });
        }
    };

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
                {item && item !== null && item !== undefined ? (
                    <div className="lg:w-4/5 mx-auto py-16 flex flex-wrap">
                        <img
                            alt=""
                            className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[450px] object-contain object-center rounded"
                            src={item.image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
                            <div className="flex mb-4">
                                <RatingDemo rating={item?.rating} />
                            </div>
                            <p className="leading-relaxed">{item.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex justify-between items-center ">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{item.price}</span>
                                <div className='flex items-center gap-x-3 mt-3 md:mt-0'>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="py-2 px-9 md:px-4 bg-indigo-600 text-white rounded"
                                    >
                                        Add Review
                                    </button>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="py-2 px-9 md:px-4 bg-indigo-600 text-white rounded"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {reviews.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
                                    <div>
                                        {reviews.map((review, index) => (
                                            <div key={index} className="mb-4 p-2 border shadow rounded-md">
                                                <div className="flex items-center mb-2">
                                                    <img
                                                        src={review.avatar}
                                                        alt="User"
                                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                                    />
                                                    <div>
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar
                                                                    key={i}
                                                                    color={i < review.rating ? '#ffc107' : '#e4e5e9'}
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="text-gray-700">{review.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-36">
                        <p>No products found</p>
                    </div>
                )}

                {/* Modal for Adding Review */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">Add Review</h2>
                            <textarea
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                                className="w-full p-2 border rounded mb-2"
                                placeholder="Write your review..."
                            />
                            <div className="mb-4">
                                <span>Rating:</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            size={20}
                                            onClick={() => setUserRating(i + 1)}
                                            color={i < userRating ? '#ffc107' : '#e4e5e9'}
                                            className="cursor-pointer"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="py-2 px-4 bg-gray-600 text-white rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddReview}
                                    className="py-2 px-4 bg-indigo-600 text-white rounded"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
