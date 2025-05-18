"use client"
import SideBar from "@/Sidebar/page";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { DefaultConfig, GetConfig, Login } from "@/util";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [config, setConfig] = useState(DefaultConfig());
  useEffect(() => {
      Login(Cookies.get("user") || "", Cookies.get("password") || "").then((res) => {
      if (!res) router.push("/auth");
      GetConfig().then((config) => setConfig(config));
    }
  }), []);
  useEffect(() => {document.title = "מצבשם | מצב מנהל";}, []);
  return (
    <html lang="en">
        <SideBar headerConfig={{companyName: config.company_name || "readysetstore", emailTitle: config.email || "readysetstore@gmail.com", userEmail: Cookies.get('user') || "readysetstore@gmail.com", logoUrl: config.logo}} children={children}></SideBar>
    </html>
  );
}
