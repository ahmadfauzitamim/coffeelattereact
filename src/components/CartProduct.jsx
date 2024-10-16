import React from 'react'
import { formatCurrency } from '../helpers/formatter';
import { Link } from 'react-router-dom';

const CartProduct = ({
    item
}) => {
    return (
        <Link to={`/product/${item?.id}`}>
            <div className='p-4 border shadow-lg cursor-pointer hover:scale-105 transition-all ease-out shadow-gray-400 flex flex-col items-center justify-between py-8 gap-6 rounded-3xl'>
                <img className='rounded-full shadow-lg shadow-gray-400 w-3/4' src={item?.image} alt="product" />
                <div>
                    <div className='font-bold'>{item?.name}</div>
                    <div className='font-bold'>{formatCurrency(item?.price)}</div>
                </div>
            </div>
        </Link>

    )
}

export default CartProduct
