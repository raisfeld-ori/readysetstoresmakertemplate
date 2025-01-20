import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "מצבשם | צור קשר",
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
