"use client"
import Link from "next/link"
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
            {/* <header className="px-32 border-b bg-[#f9f9f9]">
                <nav className=" lg:flex justify-between py-3">
                    <div className="flex justify-center xl:items-center">
                        <img src="/logo.png" className="w-10 pr-2 font-black" />
                        <Link href="/">
                            <h1 className="font-black text-[#EC4B9A] text-2xl text-center">
                                MkM
                            </h1>
                        </Link>
                    </div>
                    <ul className="hidden xl:flex items-center">
                        <Link href="/products"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Product</li></Link>
                        <Link href="/profile"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Profile</li></Link>
                        <Link href="/contact"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">Contact</li></Link>
                        <Link href="/about"><li className="text-sm font-semibold px-3 hover:text-[#EC4B9A]">About us</li></Link>

                    </ul>
                    <div className="hidden lg:flex">
                        <div className="flex items-center border-2 rounded-2xl mx-3">
                            <IoIosSearch className="text-[#EC4B9A] size-5 mx-1" />
                            <input type="text" className="outline-none mx-1 bg-[#f9f9f9] text-sm font-light" />
                        </div>
                        <Link href="/cart">
                            <div className="flex items-center border-2 rounded-2xl py-1 pr-6">
                                <PiShoppingCartSimpleFill className="text-[#EC4B9A] mx-3 size-6" />
                                <h4>cart</h4>
                            </div>
                        </Link>
                        <div className="flex items-center ml-4">
                            <Link href="/login"><button className="text-white font-normal text-xs bg-[#EC4B9A] rounded-2xl px-6 py-2">LOGIN</button></Link>
                        </div>
                    </div>
                </nav>
            </header> */}
            <nav className="border-b bg-[#f9f9f9] text-black">
                <div className="  mx-64 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 right-56 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                 <div className="flex justify-center xl:items-center">
                        <img src="/logo.png" className="w-10 pr-2 font-black" />
                        <Link href="/">
                            <h1 className="font-black text-[#EC4B9A] text-2xl text-center">
                                MkM
                            </h1>
                        </Link>
                    </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                            <Link href="/products"><div className=" px-3 py-2 rounded-md text-sm font-medium">product</div></Link>
                            <Link href="/support"><div className=" px-3 py-2 rounded-md text-sm font-medium">support</div></Link>
                            <div className="relative">
                            <Link href="/contact"><div className=" px-3 py-2 rounded-md text-sm font-medium">
                                        contact
                                    </div>
                                    </Link>
                                </div>
                                <Link href="/about"><div  className=" px-3 py-2 rounded-md text-sm font-medium">about</div></Link>
                            </div>
                            
                        </div>
                        <Link href="/cart">
                            <div className="hidden sm:flex items-center border-2 rounded-2xl py-1 pr-6">
                                <PiShoppingCartSimpleFill className="text-[#EC4B9A] mx-3 size-6" />
                                <h4>cart</h4>
                            </div>
                        </Link>
                        <div className=" hidden sm:flex items-center ml-4">
                            <Link href="/login"><button className="text-white font-normal text-xs bg-[#EC4B9A] rounded-2xl px-6 py-2">LOGIN</button></Link>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/products"><div  className=" px-3 py-2 rounded-md text-base font-medium">product</div></Link>
                    <Link href="/support"><div  className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium">support</div></Link>
                        <div className="relative">
                        <Link href="/contact"><div className=" block px-3 py-2 rounded-md text-base font-medium">
                                contact
                            </div>
                            </Link>
                        </div>
                        <Link href="/about"><div  className="e block px-3 py-2 rounded-md text-base font-medium">About</div></Link>
                    </div>
                </div>
            </nav>


        </>
    )


}