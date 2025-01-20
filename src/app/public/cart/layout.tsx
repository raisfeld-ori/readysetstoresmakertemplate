import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "מצבשם | עגלה",
    description: "מצבמידע",
    
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
