"use client"
import Header from "@/Header/Header1";
import Hero from "{main_hero}";
import ProductsHome from "{main_products}";
import Reviews from "{main_extra}";
import Socials from "{main_socials}";
import Footer from "@/Footer/Footer1";
import Loading from '@/Loading/Loading1';
import { useEffect, useState } from "react";
import Blog from "{main_blog}";
import { Config, DefaultConfig, GetCategories, GetConfig, GetItems, Item, updateVisits } from "@/util";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [config, setConfig] = useState<Config>(DefaultConfig());
  useEffect(() => {
    updateVisits();
    GetItems().then((items) => {
      setProducts(items);
    });
    GetConfig().then((config) => {
      setConfig(config);
      setLoading(false);
    })
    GetCategories().then((categories) =>{
      setCategories(categories)
    })
  }, [])
  return (
    <>
    <Loading isLoading={loading}></Loading>
    <Header products={products} categories={categories} config={config}></Header>
   <Hero config={config}></Hero>
    <ProductsHome all_products={products}/>
    <Reviews config={config}/>
    <Socials config={config}/>
    <Blog config={config}/>

    <Footer config={config}></Footer>
    
    </>
  );
}
