import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../../redux/features/cartslice';

const CartProduct = ({ id, img, title, price, quantity }) => {


    const dispatch = useAppDispatch();

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='h-[80px]' src={img} alt="img" />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{title}</h3>
                    <p className='text-gray-600 text-[14px]'>Qty: {quantity}</p>
                    <p className='text-gray-600 text-[14px]'>Price: $ {price}</p>
                </div>
            </div>
            <MdDelete className='cursor-pointer text-red-700' onClick={() => dispatch(removeFromCart(id))} />
        </div>
    )
}

export default CartProduct

