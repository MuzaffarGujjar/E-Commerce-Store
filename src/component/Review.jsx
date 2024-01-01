import React from 'react'
import Reviewcard from './layouts/Reviewcard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
        {/* heading */}
        <h1 className='font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24'>Feedback Corner</h1>

        {/* review card section */}
        <div className='flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8'>
            <Reviewcard name="Emmily Davis"/>
            <Reviewcard name="Madison Mitchell"/>
            <Reviewcard name="Aubrey Carter"/>
        </div>
    </div>
  )
}

export default Review