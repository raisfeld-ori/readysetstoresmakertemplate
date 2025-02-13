"use client"
import ProductsBanner from "{product_banner}";
import ProductsSection from "{shoping}";
import Reviews from "{extra}";
import Loading from '@/Loading/Loading1';
import Header2 from "{shop_header}";

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
