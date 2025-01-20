"use client"
import ProductDetails from "@/ProductDetails/ProductDetails1";
import RecommendedProducts from "@/RecomenededProducts/RecomendedProducts1";
import Loading from '@/Loading/Loading1';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { GetItems, Item } from "@/util";
import OutOfStock from "@/outofstock/outofstock";


export default function Page(){
    const path = (usePathname() || "").split("/");
    const item = decodeURI(path[path.length - 1]);
    const [product, setProduct] = useState<Item>();
    const [products, setProducts] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetItems().then((items) => {
            setProduct(items.find((product) => product.name === item));
            setProducts(items);
            setLoading(false);
        })
    }, [item]);
    if (!loading && (!product || product.amount === 0)) return <>
        <OutOfStock productName={item || ''} shopUrl="/public/store"></OutOfStock>
    </>;
    return <>
    <Loading isLoading={loading}></Loading>
    <ProductDetails product={product}></ProductDetails>
    {/*//@ts-expect-error wrong type ):*/}
    <RecommendedProducts allProducts={products} currentProduct={product?.name} currentCategory={product?.category}/>
    </>
}