import React, {createContext} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Loading from "@/components/Loading";
import usePostRequest from "@/hooks/usePostRequest";
import {addToast, ModalHeader, Modal, ModalBody, ModalContent, useDisclosure, Button} from "@heroui/react";

export const Information = createContext({})
const InformationProvider = ({children}) => {
        const {isOpen, onOpen, onOpenChange} = useDisclosure();
        const {push} = useRouter()
        const [student, setStudent, setReload, paginations, setPaginations, loading] = useGetRequest(`/buyer/profile`)
        const [wallet, , reloadWallet] = useGetRequest( `/wallet`)
        const {sendPostRequest, isLoading} = usePostRequest()

        const logout = () => {
            onOpen();
        }

        const handlePress = async () => {
            const {
                success,
                successMessage,
                errorMessage
            } = await sendPostRequest("POST", '/logout', undefined, undefined, true)
            if (success) {
                addToast({
                    description: successMessage,
                    color: 'success',
                })
                setReload()
                onOpenChange()
                push('/')
                Cookies.remove('token')
                localStorage.removeItem('student')
                localStorage.removeItem('language')
            } else {
                addToast({
                    description: errorMessage,
                    color: 'danger',
                })
            }
        }
        return (<>
            <Information.Provider value={{student, setReload, logout, wallet, reloadWallet}}>
                {/*{!loading ? children : <Loading/>}*/}
                {children}
            </Information.Provider>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="centerOfParent">آیا میخواهید از حساب کاربری خود خارج
                                شوید؟</ModalHeader>
                            <ModalBody>
                                <div className="flex items-center gap-6 w-full mt-10">
                                    <Button color="danger" variant="bordered" className="flex-1" radius="sm"
                                            isLoading={isLoading} onPress={handlePress}>خروج از
                                        حساب</Button>
                                    <Button className="text-white bg-primary-600 flex-1" radius="sm"
                                            onPress={onClose}>انصراف</Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>);
    }
;

export default InformationProvider;