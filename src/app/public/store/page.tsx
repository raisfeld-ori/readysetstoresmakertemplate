"use client"
import ProductsBanner from "@/ProductsBanner/Productbanner1";
import ProductsSection from "@/ProductsShop/ProductsShop1";
import Reviews from "@/Reviews/Reviews1";
import Loading from '@/Loading/Loading1';
import Header2 from "@/Header/Header1/header";

import { useEffect, useState } from "react";
import { DefaultConfig, GetCategories, GetConfig, GetItems, Item } from "@/util";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [config, setConfig] = useState(DefaultConfig());
  useEffect(() => {
    GetItems().then((items) => {
      setProducts(items);
      setLoading(false);
    });
    GetCategories().then((categories) => {setCategories(categories);});
    GetConfig().then((config) => {setConfig(config);});
  }, []);
  return (
    <>
    <Loading isLoading={loading}></Loading>
    <Header2 config={config} products={products} categories={categories}/>
  <ProductsBanner products={products}/>
   <ProductsSection products={products} config={config} categories={categories}/>
   <Reviews config={config}/>
 
    
    </>
  );
}
