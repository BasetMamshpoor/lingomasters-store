import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import axios from "axios";
import CartContextProvider from "@/providers/CartContextProvider";
import Head from "next/head";
import CategoriesProviders from "@/providers/CategoriesProviders";
import {useRouter} from "next/router";
import {useState} from "react";
import Sidebar from "@/components/Profile/Sidebar/Sidebar";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import InformationProvider from "@/providers/InformationProvider";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export default function App({Component, pageProps}) {
    const {push, pathname, back} = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [title, setTitle] = useState('')
    const open = pathname.includes('/profile')

    const isAuthPage = (pathname === "/auth/login") || (pathname === "/auth/register");
    const isProfileRoute = pathname.startsWith('/profile');


    return (
        <HeroUIProvider navigate={push}>
            <Head>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </Head>
            <ToastProvider
                placement='top-right'
                toastProps={{
                    dir: 'rtl',
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                }}/>
            {isAuthPage ? (
                    <div className='max-w-[1440px] mx-auto' dir={'rtl'}>
                        <Component {...pageProps} />
                    </div>) :
                <InformationProvider>
                    <CategoriesProviders>
                        <CartContextProvider>
                            {isProfileRoute ?
                                <div
                                    className='max-w-[1440px] w-full mx-auto py-6 sm:px-6 px-2 gap-6 overflow-x-hidden flex min-h-screen relative'
                                    dir='rtl'>
                                    <Sidebar mobileOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}
                                             setTitle={setTitle}/>
                                    <div className=" flex flex-col gap-12 w-full flex-1 min-w-0">
                                        <HeaderProfile
                                            setSidebarOpen={setSidebarOpen}
                                            isSidebarOpen={isSidebarOpen}
                                            title={title}
                                            setTitle={setTitle}/>
                                        <Component {...pageProps}/>
                                    </div>
                                </div> :
                                <div style={{maxWidth: '1440px', margin: '0 auto'}}>
                                    <Header setTitle={setTitle}/>
                                    <Component {...pageProps} />
                                    <Footer/>
                                </div>}
                        </CartContextProvider>
                    </CategoriesProviders>
                </InformationProvider>}
        </HeroUIProvider>
    );
}
