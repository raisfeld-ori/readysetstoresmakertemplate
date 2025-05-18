"use client"
import MakeProduct from "@/MakeProductAdmin/makeproduct"
import { GetCategories } from "@/util";
import { useEffect, useState } from "react";


export default function Page(){
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        GetCategories().then((categories) => setCategories(categories));
    }, [])
    return <>
    <MakeProduct categories={categories}></MakeProduct>
    </>
}
