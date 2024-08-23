import axios from "axios";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { TiFlowParallel } from "react-icons/ti";
import AddToCart from './../../AddToCart';




export default async function Single({ params }) {
    const resp = await axios.get('http://localhost:8000/products/' + params.id);
    const product = resp.data;
    return (<>
        <div className="xl:flex mx-14 my-10 xl:mx-32 xl:my-20">
            <div className="flex justify-center">
                <img src={`http://localhost:8000/${product.image}`} className=" w-[600px] rounded-2xl text-center" />
            </div>
            <div className='xl:px-10'>
                <h1 className="text-3xl font-black text-center xl:text-start py-3 px">{product.title}</h1>
                <p className="text-center xl:text-start xl:w-1/2">{product.description}</p>
                <div className="flex justify-center xl:justify-start">
                    <h3 className="px-10 text-xs border rounded-2xl flex items-center py-2 my-4 w-fit "><TiFlowParallel className=" text-lg mr-3 " />{product.category}</h3>
                </div>
                <div className='flex justify-center xl:justify-start'>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                </div>
                <div className='flex justify-center xl:justify-start'>
                    <h5 className="text-[#EC4B9A] font-bold text-4xl py-3">{product.price}$</h5>
                </div>
                <div className="flex justify-center xl:justify-start gap-4 py-6">
                    <button className="bg-[#EC4B9A] px-12 py-3 text-white text-sm rounded-3xl">Buy Now</button>
                    <AddToCart className="px-20"/>
                </div>
            </div>

        </div>
        {/* <div className="xl:flex my-10 xl:p-20 xl:items-center xl:mx-20 ">
            <div className="xl:px-10">
                <img src={`http://localhost:8000/${product.image}`} className=" w-[600px] rounded-2xl text-center" />
            </div>
            <div className='xl:flex xl:justify-center xl:items-center xl:flex-col'>
                <h1 className="font-black text-5xl pt-2 pb-7 ">{product.title}</h1>
                <p className="text-sm font-light w-1/2">{product.description}</p>
                <div>
                    <h3 className="px-10 text-xs border rounded-2xl flex items-center py-2 my-4 w-fit"><TiFlowParallel className=" text-lg mr-3 " />{product.category}</h3>
                </div>
                <div className='xl:flex xl:justify-center xl:items-center xl:flex-col'>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                </div>
                <div className='xl:flex xl:justify-center xl:items-center xl:flex-col'>
                    <h5 className="text-[#EC4B9A] font-bold text-4xl py-3">{product.price}$</h5>
                </div>
                
            </div>
        </div> */}

        {/* <div className="flex gap-4 py-6">
                    <button className="bg-[#EC4B9A] px-12 py-3 text-white text-sm rounded-3xl">Buy Now</button>
                </div> */}


    </>)
}