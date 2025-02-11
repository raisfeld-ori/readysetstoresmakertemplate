"use client"
import GetInTouch from "{contact}";
import Loading from "{contact_loading}";
import { DefaultConfig, GetConfig } from "@/util";
import { useEffect, useState } from "react";
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [config, setConfig] = useState(DefaultConfig());
  useEffect(() => {GetConfig().then((new_config) => {setConfig(new_config);setLoading(false);})});
  return (
    <>
    <Loading isLoading={isLoading}></Loading>
    <GetInTouch config={config}/>
    </>
  );
}
