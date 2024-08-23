import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaRedditSquare } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

export default function Footre() {
    return (
        <>

            <div className="bg-[#f9f9f9] mt-32 py-10 rounded-t-3xl">

                <div>
                    <h1 className="text-5xl font-black text-center">let's Get Our Latest Produts Update</h1>
                    <p className="font-light text-xs text-center py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe illum aperiam culpa nam impedit id, quasi itaque expedita inventore.</p>
                </div>
                <div className="flex justify-center py-10">
                    <div className="flex justify-center items-center border-2 border-black w-fit rounded-3xl">
                        <div className="flex items-center">
                            <MdOutlineEmail className="text-[#EC4B9A] size-6 ml-2" />
                            <input type="text" className="outline-none w-60 bg-[#f9f9f9]" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-xs bg-[#EC4B9A] py-3 px-2 rounded-r-3xl text-white">Get in Touch</h5>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <h1 className="text-black font-black text-2xl pl-20 text-center">Our Social Media</h1>
                    <FaHandPointRight className="text-black mx-3 text-3xl" />
                    <FaFacebookF className="mx-3 text-3xl text-blue-500" />
                    <FaInstagram className="mx-3 text-3xl text-pink-500" />
                    <FaTwitter className="mx-3 text-3xl text-blue-400" />
                    <FaLinkedinIn className="mx-3 text-3xl text-blue-700" />
                    <FaYoutube className="mx-3 text-3xl text-red-600" />
                    <FaRedditSquare className="mx-3 text-3xl text-orange-500" />
                </div>
            </div>


        </>

    )
}