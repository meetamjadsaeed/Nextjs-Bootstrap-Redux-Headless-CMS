import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'
import Header from "../blog/layout/header/Header";
import Footer from "../blog/layout/footer/Footer";
import Main from "../blog/layout/main/Main";
import Recent from "../blog/components/posts/Recent";
import Categories from "../blog/components/categories/Categories";
import Newsletter from "../blog/components/subscribe/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Seek WordPress</title>
        <meta name="google-site-verification" content="kRPlUWkgPo10fw_MDIgv4L-uMjkAkAUWsXXdRyV21qk" />
        <meta name="description" content="Content For Everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="https://img.icons8.com/ios-glyphs/30/000000/search-more.png" /> */}
      </Head>
      <div class="site-wrap">
        {/* Header  */}
        <Header />

        <Main />
        <Recent />
        <Categories />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </>
  );
}
