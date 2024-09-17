import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/Slice/Slice';
import Swal from 'sweetalert2';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handlePriceRangeChange = (e) => setPriceRange(e.target.value);
    const handleRatingChange = (e) => setRating(e.target.value);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const isProductInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    const handleAdd = (item) => {
        if (!isProductInCart(item.id)) {
            dispatch(add(item));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                timer: 1000,
            });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Product Already in Cart',
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };

    useEffect(() => {
        const filterProducts = () => {
            let updatedProducts = products;

            // Filter by category
            if (category) {
                updatedProducts = updatedProducts.filter(product => product.category === category);
            }

            // Filter by price range
            if (priceRange) {
                const [min, max] = priceRange.split('-').map(Number);
                updatedProducts = updatedProducts.filter(product => product.price >= min && product.price <= max);
            }

            // Filter by rating
            if (rating) {
                updatedProducts = updatedProducts.filter(product => product.rating.rate >= Number(rating));
            }

            setFilteredProducts(updatedProducts);
        };

        filterProducts();
    }, [category, priceRange, rating, products]);

    if (loading) {
        return <h2 className="text-center text-2xl font-semibold flex justify-center items-center w-full h-72">Loading...</h2>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-6">
            {/* Filter Section */}
            <div className="flex flex-wrap justify-between md:justify-start md:gap-x-6 items-center mb-4 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/4">
                    <label className="block text-gray-700 mb-2">Category:</label>
                    <select onChange={handleCategoryChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">All Categories</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>

                <div className="w-full sm:w-1/4">
                    <label className="block text-gray-700 mb-2">Price Range:</label>
                    <select onChange={handlePriceRangeChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">All Prices</option>
                        <option value="0-50">₹0 - ₹50</option>
                        <option value="51-100">₹51 - ₹100</option>
                        <option value="101-500">₹101 - ₹500</option>
                        <option value="501-1000">₹501 - ₹1000</option>
                    </select>
                </div>

                <div className="w-full sm:w-1/4">
                    <label className="block text-gray-700 mb-2">Rating:</label>
                    <select onChange={handleRatingChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">All Ratings</option>
                        <option value="1">1 ⭐ & above</option>
                        <option value="2">2 ⭐ & above</option>
                        <option value="3">3 ⭐ & above</option>
                        <option value="4">4 ⭐ & above</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map(item => (
                    <div
                        className='shadow-lg rounded-md overflow-hidden border text-center flex flex-col bg-white transition-all hover:scale-[1.05] p-3'
                        key={item.id}
                    >
                        <Link
                            to={`/infocart`}
                            state={{ item }}
                            className='flex flex-col h-full'
                        >
                            <p className='uppercase text-sm font-semibold text-gray-600 py-2 bg-gray-300'>
                                {item.category}
                            </p>
                            <img
                                className='w-full h-[200px] object-contain p-4'
                                src={item.image}
                                alt='Product'
                                loading='lazy'
                            />
                            <h1 className='text-lg font-semibold py-2'>
                                {item.title}
                            </h1>
                            <p className='py-1 text-sm font-semibold'>₹{item.price}</p>
                            <p className='py-1 text-sm'>Rating: ⭐{item.rating.rate}</p>
                        </Link>
                        <button
                            type='button'
                            className='w-full py-2 text-sm justify-center flex items-center gap-x-2 bg-gray-600 text-white transition-all hover:bg-gray-700'
                            onClick={() => handleAdd(item)}
                        >
                            <FaOpencart />
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-5">
                {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => paginate(page + 1)}
                        className={`mx-1 px-4 py-2 border ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-700'} rounded-full hover:bg-blue-600 hover:text-white transition duration-300`}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
