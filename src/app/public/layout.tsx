"use client"
import Header from "@/Header/Header1/header";
import Footer from "@/Footer/Footer1";
import { useEffect, useState } from "react";
import { Config, DefaultConfig, GetCategories, GetConfig, GetItems, Item, } from "@/util";
import Loading from "@/Loading/Loading1";

  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [config, setConfig] = useState<Config>(DefaultConfig());
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    GetConfig().then((config) => {
      setConfig(config);
      setLoading(false);
    })
    GetItems().then((items) => {
      setProducts(items);
    })
    GetCategories().then((categories) => {
      setCategories(categories);
    })
  }, []);
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Loading isLoading={loading}></Loading>
        <Header config={config} products={products} categories={categories}></Header>
        {children}
        <Footer config={config}/>
        
      </body>
    </html>
  );
}

