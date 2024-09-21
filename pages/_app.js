import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <div style={{ maxWidth: '1440px', margin: '3rem auto' }}>
          {/* <Header /> */}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </div>
      </NextUIProvider>
    </>
  );
}
