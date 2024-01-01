import React from 'react'
import ProductCard from './layouts/ProductCard'

const Products = () => {

    const data = [

        {
            id: 12,
            img: "src/assets/img/product13.jpg",
            name: "Canvas Sneakers",
            price: "298.00",
            discount: "25% off",
        },
        {
            id: 13,
            img: "src/assets/img/product14.jpg",
            name: "Shirt Combo Pack",
            price: "199.00",
            discount: "33% off",
        },
        {
            id: 14,
            img: "src/assets/img/product15.jpg",
            name: "Hublot Watch",
            price: "198.00",
            discount: "27% off",
        },

    ]


    return (
        <div className='min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16'>
            {/* heading section */}
            <div>
                <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>
                    New Arrivals
                </h1>
            </div>

            {/* cards section */}
            <div className='flex flex-wrap justify-center gap-5 pt-8'>
                {data.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Products