import React from 'react'
import { ImQuotesLeft } from "react-icons/im"


const Reviewcard = ({ name }) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out'>
      <div>
        <ImQuotesLeft size={25} />
        <h1 className='text-xl font-semibold text-ExtraDarkColor pt-4'>{name}</h1>
      </div>
      <p>Sleek design, intuitive navigation,
        and a seamless checkout process make
        this e-commerce website a user-friendly
        delight. Efficient service and diverse products
        ensure a satisfying shopping experience.</p>
    </div>
  )
}

export default Reviewcard