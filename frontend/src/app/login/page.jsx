'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const login = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8000/login', { email, password });
            localStorage.setItem('token', data.token);
            router.push('/products')

        } catch {
            setError('Wrong email or password');
        }
    }
    return (
        <>
            <div>
                <div className="lg:flex justify-center py-14 lg:rounded">
                    <div className="bg-[#EC4B9A]  lg:w-[500px] lg:h-[600px] h-[400px] lg:rounded-l-3xl flex flex-col ">
                        <h1 className="text-white lg:text-6xl text-3xl font-black text-center pt-44">Welcome TO WebSite</h1>
                        <p className="text-center pt-5 font-light text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam vel necessitatibus illum?</p>
                    </div>
                    <form onSubmit={login}>
                        <div className="bg-[#f8f8f8] lg:w-[500px] h-[600px] lg:rounded-r-3xl flex flex-col justify-center items-center">
                            <h1 className="font-black text-4xl py-5"> LOGIN</h1>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaUserAstronaut className="text-2xl absolute ml-2" />
                                <input type="email" placeholder="Email" className="outline-none  pl-10 w-full bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className=" border-black border w-[70%] rounded-lg my-3 py-2">
                                <FaLock className="text-2xl absolute ml-2" />
                                <input type="password" placeholder="password" className=" outline-none pl-10 bg-[#f8f8f8] placeholder:font-light" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="">
                                <p className="font-medium text-sm text-[#EC4B9A] text-center">Forget password?</p>
                            </div>



                            <div className="pt-4">
                                <button className="bg-[#EC4B9A] px-36 py-2 rounded-xl text-white font-black " type="submit">LOGIN</button>
                            </div>
                            <div className="flex py-2">
                                <p className="text-sm font-light">dont have an account?</p>
                                <a href="/signup" className="text-[#EC4B9A] font-light text-sm pl-1">signup</a>
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