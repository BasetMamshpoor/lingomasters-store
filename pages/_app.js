import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{ maxWidth: '1440px', margin: '3rem auto' }}>
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
 