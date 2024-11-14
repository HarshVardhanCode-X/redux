import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './Cartslice';



function Rtk() {

    const [products, setProducts] = useState([]);

    const cart = useSelector((store) => store.cart);

    const [change, setChange] = useState(1);

    const dispatch = useDispatch();

    const getData = async () => {
        const api = await fetch("https://dummyjson.com/products");
        const dataR = await api.json();
        setProducts(dataR.products)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className='flex flex-col items-center justify-evenly'>
                <div className='grid grid-cols-4 justify-self-center gap-4'>
                    {products.map(product => (
                        <div key={product.id}>
                            <div className="mt-5 w-full max-w-[400px] h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#" className="p-8 rounded-t-lg w-full">
                                    <img src={product.images[0]} alt="no....." className='flex items-center justify-center w-full max-w-[250px] h-auto' />
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {product.name}
                                        </h4>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {product.description}
                                        </h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[...Array(4)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                            <svg
                                                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                            {product.rating}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                        <div className='flex items-start justify-center w-full gap-2 mt-4'>
                                            <button
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                onClick={() => dispatch(addItem(product))}>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <div className=' mt-5 flex flex-col items-center'>
                <h2 className='text-blue-700'>Your Cart</h2>

                {!cart.length ? <h4 className='text-red-600'>No Products found !</h4> :

                    <div className='grid grid-cols-4 justify-self-center gap-4'>
                        {cart.map(product =>
                            <div key={product.id}>
                                <div className="mt-5 w-full max-w-[400px] h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#" className="p-8 rounded-t-lg w-full">
                                        <img src={product.images[0]} alt="no....." className='flex items-center justify-center w-full max-w-[250px] h-auto' />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {product.name}
                                            </h4>
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {product.description}
                                            </h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {[...Array(4)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                ))}
                                                <svg
                                                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                            <div className='flex items-center justify-between w-full mt-4'>
                                                <button
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    onClick={() => dispatch(removeItem(product))}>
                                                    Remove from cart
                                                </button>

                                                <div className='flex items-center justify-center gap-2'>
                                                    <div className='text-white text-[40px] cursor-pointer' onClick={() => setChange((change) => change + 1)}>+</div>
                                                    <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">
                                                        {change}
                                                    </div>
                                                    <div className='text-white text-[40px] cursor-pointer' onClick={ change<=1 ? () => dispatch(removeItem(product)) : () => setChange((change) => change - 1)}>-</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>}
            </div>
        </>
    )
}

export default Rtk