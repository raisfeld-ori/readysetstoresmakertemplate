"use client"
import Header from "@/Header/Header1";
import Footer from "@/Footer/Footer1";
import Loading from "@/Loading/Loading1";

  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header ></Header>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}

