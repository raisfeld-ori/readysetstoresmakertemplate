import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "מצבשם | תשלום",
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
