"use client"
import MonochromeAuthForm from "@/Auth/Auth1";
import BackButton from "@/Back/back1";
import { useRouter } from 'next/navigation'


export default function Page(){
    const router = useRouter();
    return <>
    <BackButton></BackButton>
     <MonochromeAuthForm router={router}></MonochromeAuthForm>
    </>
}