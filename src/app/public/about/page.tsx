"use client"
import AboutPage from "{about_hero}"
import Loading from "@/Loading/Loading1";
import { Config, DefaultConfig, GetConfig } from "@/util";
import { useEffect, useState } from "react";

export default function Page(){
    const [config, setConfig] = useState<Config>(DefaultConfig());
    const [loading, setLoading] = useState(true);
    useEffect(() => {GetConfig().then((newConfig) => setConfig(newConfig));setLoading(false);}, [])
    return <>
        <Loading isLoading={loading}></Loading>

    <AboutPage config={config}/>
    
    </>
}
