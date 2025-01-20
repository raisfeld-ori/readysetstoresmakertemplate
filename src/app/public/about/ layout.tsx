import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "מצבשם | אודות",
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
