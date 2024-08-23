'use client'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";



export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, SetCategory] = useState('');
    const [image, setImage] = useState("");

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            price,
            category,
            image,
        }

        await axios.postForm('http://localhost:8000/products', data);
        router.push('/products')

    }
    return (
        <>

            <div className="flex justify-center items-center flex-col">
                <h1 className="font-black text-3xl text-center">Craete <span className="text-[#EC4B9A]">New Product</span> </h1>
                <form onSubmit={submit} className="flex justify-center items-center flex-col">
                    <div className=" border-black border w-[100%] rounded-lg my-3 py-2">
                        <MdOutlineProductionQuantityLimits className="text-2xl absolute ml-2" />
                        <input type="text" placeholder="title" className="outline-none  pl-10 w-full placeholder:font-light" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[100%] rounded-lg my-3 py-2">
                        <IoDocumentTextOutline className="text-2xl absolute ml-2" />
                        <input type="text" placeholder="description" className=" outline-none pl-10 placeholder:font-light" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[100%] rounded-lg my-3 py-2">
                        <MdPriceCheck className="text-2xl absolute ml-2" />
                        <input type="number" placeholder="price" className="outline-none  pl-10 w-full placeholder:font-light" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[100%] rounded-lg my-3 py-2">
                        <BiSolidCategory className="text-2xl absolute ml-2" />
                        <input type="text" placeholder="category" className=" outline-none pl-10 placeholder:font-light" value={category} onChange={(e) => SetCategory(e.target.value)} />
                    </div>
                    <div className=" border-black border w-[100%] rounded-lg my-3 py-2">

                        <input type="file" placeholder="image" className=" outline-none pl-10 placeholder:font-light" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="pt-4">
                        <button className="bg-[#EC4B9A] px-40 py-2 rounded-xl text-white font-black" type="submit">Craete</button>
                    </div>
                </form>
            </div>


        </>
    )
}