import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tomiwa Porfolio",
  description: "Website portfolio of Adesipe tomide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <div className=" my-[120px] text-white " >{children}</div>
        <footer className=" text-white bg-[#FFFFFF1A] flex justify-center items-center py-[16px] w-full text-[20px] ">
        ThePackage © 2024
      </footer>
      </body>
    </html>
  );
}
