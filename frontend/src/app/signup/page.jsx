'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const Sign = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.postForm('http://localhost:8000/users', { email, password, name, number , image });
            localStorage.setItem('token', data.token);
            router.push('/products')

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>


            <div>
                <div className="lg:flex justify-center py-14 rounded">
                    <div className="bg-[#EC4B9A]  lg:w-[500px] h-[600px] lg:rounded-l-3xl flex flex-col ">
                        <h1 className="text-white text-6xl font-black text-center pt-44">Welcome TO WebSite</h1>
                        <p className="text-center pt-5 font-light text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam vel necessitatibus illum?</p>
                    </div>
                    <form onSubmit={Sign}>
                        <div className="bg-[#f8f8f8] lg:w-[500px] h-[600px] lg:rounded-r-3xl flex flex-col justify-center items-center">
                            <h1 className="font-black text-4xl py-5"> LOGIN</h1>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaUserAstronaut className="text-2xl absolute ml-2" />
                                <input type="text" placeholder="name" className="outline-none  pl-10 w-full bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaPhone className="text-2xl absolute ml-2" />
                                <input type="number" placeholder="phone number" className=" outline-none pl-10 bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <MdOutlineEmail className="text-2xl absolute ml-2" />
                                <input type="email" placeholder="Email" className="outline-none  pl-10 w-full bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaLock className="text-2xl absolute ml-2" />
                                <input type="password" placeholder="password" className=" outline-none pl-10 bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaLock className="text-2xl absolute ml-2" />
                                <input type="file" placeholder="image" className=" outline-none pl-10 bg-[#f8f8f8] placeholder:font-light"  onChange={(e) => setImage(e.target.files[0])}/>
                            </div>
                            <div className="pt-4">
                                <button className="bg-[#EC4B9A] px-36 py-2 rounded-xl text-white font-black " type="submit">SIGN UP</button>
                            </div>
                            <div className="flex flex-col gap-1 my-2">
                                {error && <p className="text-sm text-red-500">{error}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            



        </>
    )
}