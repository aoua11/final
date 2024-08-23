'use client'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";



export default function Order() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
           name,
           address , 
           phone,
        }

        await axios.post('http://localhost:8000/orders', data);
        router.push('/products')

    }
    return (
        <>

            <div className="flex justify-center items-center flex-col">
                <h1 className="font-black text-3xl text-center">order <span className="text-[#EC4B9A]">a Product</span> </h1>
                <form onSubmit={submit} className="flex justify-center items-center flex-col">
                    <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                        <MdOutlineProductionQuantityLimits className="text-2xl absolute ml-2" />
                        <input type="text" placeholder="name" className="outline-none  pl-10 w-full placeholder:font-light" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                        <IoDocumentTextOutline className="text-2xl absolute ml-2" />
                        <input type="text" placeholder="Address" className=" outline-none pl-10 placeholder:font-light" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                        <MdPriceCheck className="text-2xl absolute ml-2" />
                        <input type="number" placeholder="phone" className="outline-none  pl-10 w-full placeholder:font-light" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="pt-4">
                        <button className="bg-[#EC4B9A] px-24 py-2 rounded-xl text-white font-black " type="submit">Order</button>
                    </div>
                </form>
            </div>


        </>
    )
}