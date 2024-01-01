import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className='bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div>
                    <h1 className='font-semibold text-3xl pb-4'>StyleNestle</h1>
                    <div className='flex gap-5 ml-3'>
                        <FaFacebook size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out' />
                        <RiTwitterXLine size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out' />
                        <RiInstagramFill size={32} className='hover:scale-110 cursor-pointer transition duration-300 ease-in-out' />
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-8'>Shop</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Products
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Overview
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Pricing
                        </Link>
                    </div>
                </div>

                <div>
                    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-8'>Company</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            About Us
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Contact
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Updates
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
                            Support
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/4'>
                    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-8'>Contact Us</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to='/' spy={true} smooth={true} duration={500}>
                            D-Ground, Satiana Road Faisalabad Pakistan
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500}>
                            muzaffar-techs.vercel.app
                        </Link>
                        <Link to='/' spy={true} smooth={true} duration={500}>
                            +92 320 655 7458
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-4'>©copyright developed by <span className='text-black'>Muzaffar Techs</span> | All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer