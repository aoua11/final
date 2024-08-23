"use client";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


import { useDispatch } from "react-redux";
import { addItem } from "../lib/cartSlice";

export default function AddToCart({ product }) {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addItem(product))}  className="bg-[#EC4B9A] px-5 py-1  text-white text-lg rounded-3xl"><PiShoppingCartSimpleFill/></button>
  );
}
