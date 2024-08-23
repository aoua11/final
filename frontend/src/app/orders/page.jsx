"use client"

import { useEffect, useState } from "react"
import axios from "axios";



export default function Orders() {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/orders')
            .then((resp) => {
                setOrder(resp.data)
            })
    }, [])

    return(
        <>
        
        {
            orders.map((order)=>{
                return(
                    <div key={order._id}>
                        {/* <h1>{order.name}</h1>
                        <h1>{order.address}</h1>
                        <h1>{order.phone}</h1> */}
                        <div className="border-2 rounded-lg text-center px-6 py-4 mx-3 my-3 hover:bg-[#EC4B9A] hover:text-white cursor-pointer hover:scale-125 duration-200 transition">
                        <p className="font-medium text-sm">{order.name}</p>
                        <p className="font-medium text-sm">{order.address}</p>
                        <p className="font-medium text-sm">{order.phone}</p>
                    </div>
                    </div>
                )
            })
        }
        
        
        </>
    )

}