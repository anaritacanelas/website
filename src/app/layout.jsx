import { Comfortaa, Roboto, Josefin_Sans, Inter } from "next/font/google";
import Head from "next/head";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const confortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-confortaa",
  weight: ["700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "100"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "Hey! I'm Rita",
  description: "I'm a front-end developer and this is my website ⭐️",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${confortaa.variable} ${roboto.variable} ${josefin.variable} ${inter.variable} antialiased bg-my-bg`}
      >
        <Head>
          <link rel="icon" href="/icon.jpg" sizes="any" />
        </Head>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="grow">{children}</div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
