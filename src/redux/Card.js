import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, fetchSomeData } from './Slice/Slice';
import Swal from 'sweetalert2';
import Loader from '../scrollUp/Preloader';
import { Link } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";

const CardRedux = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
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

  const filteredProducts = selectedCategory
    ? product.filter((item) => item.category === selectedCategory)
    : product;

  useEffect(() => {
    dispatch(fetchSomeData())
      .then((result) => {
        setProduct(result.payload);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <div>
      <div className='bg-gray-200'>
        <div className='text-center text-3xl md:text-[50px] pt-5 md:pt-8 md:pb-4 font-semibold'>
          <h1>All Products</h1>
        </div>
        {loading ? (
          <div className="text-center font-semibold md:text-[20px] py-8">
            <Loader />
          </div>
        ) : (
          <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-8 w-full lg:px-16 cursor-pointer'>
              {filteredProducts.map((item) => (
                <div
                  className='shadow-lg rounded-md overflow-hidden text-center w-[45vw] mt-5 mx-1.5 md:w-[30vw] lg:w-[19vw] md:mx-3 md:mt-7 bg-white transition-all hover:scale-[1.1] flex flex-col justify-between'
                  key={item.id}
                >
                  <Link
                    to={`/infocart`}
                    state={{ item }}
                    className='flex flex-col h-full'
                  >
                    <p className='uppercase text-[12px] font-semibold text-gray-600 w-full py-1 md:py-2 bg-gray-300'>
                      {item.category}
                    </p>
                    <img
                      className='lg:h-[25vh] lg:w-[10.5vw] md:w-[15vw] flex w-[30vw] h-[18vh] ml-[19%] lg:ml-[25%] p-3'
                      src={item.image}
                      alt='img'
                      loading='lazy'
                    />
                    <h1 className='md:text-[15px] text-[10px] px-1 font-semibold py-1 md:px-2'>
                      {item.title}
                    </h1>
                    <p className='md:py-1 text-sm font-semibold'>₹{item.price}</p>
                    <p className='py-1 text-sm'>Rating: ⭐{item.rating.rate}</p>
                  </Link>
                  <div className='flex py-1 justify-center gap-2 lg:gap-5 mt-auto'>
                    <button
                      type='button'
                      className='w-full -mb-1 py-2 text-[10px] justify-center flex items-center gap-x-2 md:text-base bg-gray-600 text-white transition-all'
                      onClick={() => handleAdd(item)}
                    >
                      <FaOpencart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRedux;
