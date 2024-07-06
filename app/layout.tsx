import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTranscribe | Video to Text",
  description: "Generate text from your videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        {/* <Footer /> */}
      </body>
    </html>
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <main className="flex-grow">{children}</main>
    //   {/* <Footer /> */}
    // </div>
  );
}
