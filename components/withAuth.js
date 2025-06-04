import {useLayoutEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {addToast} from '@heroui/react';
import Link from 'next/link';
import Loading from '@/components/Loading';
import Custom404 from "@/pages/404.jsx";
import {useRouter} from "next/router";

const withAuth = (WrappedComponent, show404 = false, showToast = true) => {
    const AuthComponent = (props) => {
        const {back, asPath} = useRouter()
        const [isChecking, setIsChecking] = useState(true);

        const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : {};
        useLayoutEffect(() => {
            if (!token?.access_token) {
                if (showToast) {
                    addToast({
                        title: 'لطفا وارد حساب کاربری خود شوید',
                        color: 'warning',
                        endContent: <Link href={`/auth/login?backUrl=${asPath}`} className='text-rose-700'>ورود</Link>,
                    });
                    back()
                }
            }

            setIsChecking(false);
        }, []);

        if (isChecking) {
            return <Loading/>;
        }

        if (token?.access_token) {
            return <WrappedComponent {...props} />;
        } else if (show404) {
            return <Custom404/>;
        } else {
            return null;
        }
    };

    return AuthComponent;
};

export default withAuth;
