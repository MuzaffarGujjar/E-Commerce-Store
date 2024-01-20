import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaUser, FaShoppingCart } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { RiMenu2Line } from "react-icons/ri"
import { useAppSelector } from '../redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

    const [showCart, setShowCart] = useState(false);

    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();



    const data = useAppSelector((state) => state.cartReducer);

    const getTotal = () => {
        let total = 0;
        data.forEach((item) => (total = total + item.price * item.quantity));
        return total;
    }

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    const cartCount = useAppSelector((state) => state.cartReducer.length);




    return (
        <>
            <header className='fixed w-full z-10'>
                <section>
                    {/* menu section */}
                    <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,-0,_0.24)_0px_3px_8px]'>
                        <div>
                            <Link to="home" spy={true} smooth={true} duration={500}>
                                <h1 className='text-2xl font-semibold text-ExtraDarkColor cursor-pointer'>StyleNestle</h1>
                            </Link>
                        </div>
                        {/* nav elements */}
                        <nav className='hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor'>
                            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out">Home</Link>
                            <Link to="shop" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out">Shop</Link>
                            <Link to="features" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out">Features</Link>
                            <Link to="products" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out">Products</Link>
                            <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out">Review</Link>

                            {
                                isAuthenticated ? (
                                    <button className='bg-ExtraDarkColor text-white px-6 py-2 font-medium active:bg-amber-800 rounded' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
                                )
                                    : (
                                        <button className='bg-ExtraDarkColor text-white px-6 py-2 font-medium active:bg-amber-800 rounded' onClick={() => loginWithRedirect()}>Log In</button>
                                    )
                            }

                        </nav>
                        {/* nav icons */}
                        <div className='flex items-center gap-5'>
                            <FaUser size={25} className='text-DarkColor' />
                            <div className='text-DarkColor relative'>
                                <FaShoppingCart size={25} className='cursor-pointer' onClick={() => setShowCart(true)} />
                                <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center'>{cartCount}</div>

                            </div>
                        </div>
                        {/* menu icons */}
                        <div className='lg:hidden flex items-center'>
                            {menu ? (<AiOutlineClose size={28} onClick={handleChange} />) : <RiMenu2Line size={28} onClick={handleChange} />}

                        </div>
                    </div>

                    {/* mobile menu section */}

                    <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                        <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out" onClick={closeMenu}>Home</Link>
                        <Link to="shop" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out" onClick={closeMenu}>Shop</Link>
                        <Link to="features" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out" onClick={closeMenu}>Features</Link>
                        <Link to="products" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out" onClick={closeMenu}>Products</Link>
                        <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-black transition duration-300 ease-in-out" onClick={closeMenu}>Review</Link>
                        <button onClick={() => loginWithRedirect()}>Log In</button>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
                    </div>
                </section>
            </header>
            {showCart && (
                <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll'>
                    <div className='max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 rounded transition duration-500'>
                        <RxCross1 className='absolute right-0 top-0 w-6 text-[24px] cursor-pointer' onClick={() => setShowCart(false)} />
                        <h3 className='pt-6 text-lg font-medium text-DarkColor uppercase'>Your Cart</h3>

                        <div className='mt-6 space-y-2'>
                            {data?.map((item) => (
                                <CartProduct
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity} />
                            ))}
                        </div>
                        <div className='flex justify-between items-center font-medium text-xl py-4'>
                            <p>Total:</p>
                            <p>${getTotal()}.00</p>
                        </div>
                        <button className='bg-ExtraDarkColor text-white w-full py-2 font-medium rounded'>
                            Proceed to Buy
                        </button>
                        <button className='border-2 border-DarkColor text-black w-full my-2 py-2 rounded'>
                            Go to Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar