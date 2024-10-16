import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import Promo from '../../components/promo'
import CartProduct from '../../components/CartProduct'

const Product = () => {
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/product?orderBy=id&sortBy=ASC&limit=100&page=${page}`)
            console.log(response);
            setProduct(response?.data?.data)

        } catch (error) {
            console.log(error);


        }
    }
    useState(() => {
        getProduct([])
    })


    return (
        <div>
            <Navbar />
            <div className='w-full flex flex-row'>
               <Promo/>
                <div className='flex flex-col w-full h-2/3 justify-center items-center gap-10 p-10'>
                    <ul className='flex items-center taxt-md text-gray-500 gap-20'>
                        <li className='hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer'>Favorite Product</li>
                        <li className='hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer'>Coffee</li>
                        <li className='hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer'>Non Coffee</li>
                        <li className='hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer'>Foods</li>
                        <li className='hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer'>Add-on</li>
                    </ul>
                    <div className='grid grid-cols-4 gap-8'>
                        {
                            product.map((item, index) => {
                                return <CartProduct item={item} key={index}/>
                            })
                        }

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Product
