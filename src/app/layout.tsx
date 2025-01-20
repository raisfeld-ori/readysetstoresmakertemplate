import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מצבשם | בית",
  description: "מצבמידע",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" charSet="UTF-8"></meta>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
