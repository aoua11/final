import Link from "next/link";
import { FaLevelDownAlt } from "react-icons/fa";



export default function About() {
    return (
        <>


            <div className="h-screen">
                <div className="flex items-center justify-center">
                    <div>
                        <h1 className="text-5xl  text-[#EC4B9A] font-black">ABOUT US</h1>
                        <p className=" py-5 text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos fugiat, <br /> labore laboriosam quam laudantium alias. Nemo accusamus <br/> maxime perferendis doloribus dicta minima perspiciatis,<br/> sapiente illum quis corrupti, autem vel suscipit.
                        </p>
                        <Link href="contact"><button className="bg-[#EC4B9A] px-14 py-2 rounded-3xl text-white ">contact US</button></Link>
                    </div>
                    <div>
                        <img src="/about.png" className="w-[900px]"/>
                    </div>
                </div>
            </div>
























            {/* <div className="flex justify-center items-center flex-col py-20">
                <h1 className="font-light text-2xl lg:text-4xl capitalize text-center px-20 lg:px-32">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br className="hidden lg:flex"/> Unde architecto labore sed, soluta porro quod <br className="hidden lg:flex"/> distinctio omnis, neque reprehenderit eum <br className="hidden lg:flex"/> vero ratione at enim rerum magni <br /> ex maxime, animi non.</h1>
                <p className="font-light lg:text-xs text-center pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita laboriosam commodi qui officiis tempora <br className="hidden lg:flex"/> facere excepturi provident quasi dolores eaque fuga molestiae voluptates maxime quo autem necessitatibus, cum <br /> rem repellat vel sunt in exercitationem ullam eveniet. Ipsa, provident rem.</p>
                <div className="rounded-lg">
                    <img src="/painting.jpg" className="w-80  py-10 shadow-pink-400 shadow-xl rounded-2xl my-10" />
                </div>
                <div className="grid grid-cols-3 grid-rows-2">
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                    <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                </div> 
                <div className="py-8 flex justify-center items-center flex-col">
                    <p className="text-light text-xl py-2  px-2 rounded-lg">Shop whith us</p>
                    <FaLevelDownAlt className="text-5xl text-center py-2"/>
                    <Link href="/products">
                    <button className="bg-[#EC4B9A]  text-white px-14 py-3 rounded-3xl font-black shadow-pink-400 shadow-xl">Find ur Product</button>
                    </Link>
                </div>
            </div> */}

        </>



    )
}