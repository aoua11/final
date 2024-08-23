'use client'
import { FaAngleRight } from "react-icons/fa";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Landingpage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((resp) => {
                setProducts(resp.data)
            })
    }, [])
    return (
        <>
            <div className="px-5 text-center lg:text-start lg:px-72 py-20 bg-[#faf9f9] rounded-b-3xl">
                <div className="lg:flex justify-between items-center">
                    <div>
                        <div>
                            <h1 className="text-4xl xl:text-5xl font-black py-7">
                                Discover  Unique <br /> Digital Product In <br />  Our marketplace
                            </h1>
                            <p className="lg:text-sm font-light pb-6">We stand for digital experiences with a wow effect, <br /> Because for us that's the only thing that makes  <br />Lorem ipsum dolor sit, amet consectetur  elit. .</p>
                        </div>
                        <div className="flex gap-5 justify-center my-10 lg:gap-0 lg:my-0 lg:flex">
                            <Link href='/products'> <button className="bg-[#EC4B9A] rounded-2xl px-10 py-1 flex items-center text-white lg:mr-3">
                                Explore
                                <FaAngleRight className="text-white ml-1" />
                            </button>
                            </Link>
                            <Link href="/contact"><button className="border-2 rounded-2xl px-10 py-1 ">Contact</button></Link>
                        </div>
                    </div>
                    <div>
                        <img src="/bg.jpg" className="w-[600px] rounded-3xl" />
                    </div>
                </div>
            </div>
            <div>
                <div className="px-5 lg:px-0 pt-20">
                    <h1 className="text-4xl font-black text-center">
                        Explore In Our Market
                    </h1>
                    <p className="text-xs font-light text-center py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur molestias.</p>
                </div>
                <div className="flex justify-center items-center pt-3">
                    <h3 className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-10 py-2 rounded-2xl">All category</h3>
                </div>
            </div>
            {/* /*----------- seconde part --------*/}

            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-4 gap-y-20 mx-32 lg:px-32 py-10 ">
                {
                    products.map((product) => {
                        return (
                            <div key={product._id} className="h-[470px] w-72 bg-white rounded-2xl shadow-pink-500 shadow-xl my-20 xl:my-0">
                                <div>
                                <Link href={`/products/${product._id}`}><img src={`http://localhost:8000/${product.image}`} className="rounded-t-2xl shadow-lg h-60 w-72" /></Link>
                                    <div className="px-5">
                                        <h1 className="text-2xl font-medium  pt-4 py-1">{product.title}</h1>
                                        <p className="text-sm font-extralight py-1 h-28">{product.description}</p>
                                        <div className="flex justify-between py-5">
                                        <h1 className="text-xl text-pink-500 font-black py-1">{product.price}$</h1>
                                        <button className="bg-[#EC4B9A] px-3 py-0  text-white text-sm rounded-xl">Add to cart</button>
                                        </div>
                                    </div>
                                    {/* <button onClick={() => deleteproduct(product._id)}>delte</button> */}
                                </div>
                            </div>
                        )

                    })
                   
                }
            </div>

           
            <div className="flex justify-center">
                <Link href="/products"><button className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-14 py-2 rounded-3xl">Product</button></Link>
                <Link href="/login"><button className="text-[#EC4B9A] font-light text-sm border-2 ml-3 w-fit px-14 py-2 rounded-3xl">LOGIN</button></Link>

            </div>
        </>
    )
}