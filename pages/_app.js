import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";
import CartContextProvider from "@/providers/CartContextProvider";
import { useEffect } from "react";
import Head from "next/head";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const get = async () => {
      await axios.get('/category')
        .then(res => {
          localStorage.setItem('category', JSON.stringify(res.data.response.data))
        })
        .catch(err => alert(err.response?.data.message))
    }
    get()
  }, [])  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <NextUIProvider>
        <CartContextProvider>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </CartContextProvider>
      </NextUIProvider>
    </>
  );
}
