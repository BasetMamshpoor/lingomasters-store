import {Tabs, Tab} from "@heroui/react";

//icons
import Chats from '@icons/chats.svg';
import Video from '@icons/video.svg';
import Mic from '@icons/microphone.svg';
import User from '@icons/user-tick.svg';
import Text from './Text';
import Audio from './Audio';
import Videos from './Videos';
import {useContext} from "react";
import {Information} from "@/providers/InformationProvider";
import {useRouter} from "next/router";

const Comments = ({id, url, showOtherComments = true}) => {
    const {asPath} = useRouter()
    const {student} = useContext(Information)
    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-24"
                id='comments'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Chats className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>نظرات</span>
                </div>
                <div className="flex flex-col gap-3">
                    <Tabs aria-label="Options"
                          variant='underlined'
                          classNames={{
                              tabList: "sm:gap-6 relative",
                              cursor: "w-full bg-natural_gray-950 h-px",
                              tab: "max-w-fit sm:px-4 h-12",
                              tabContent: "group-data-[selected=true]:[&>div>span]:text-natural_gray-950 group-data-[selected=true]:[&>div>svg]:fill-natural_gray-950"
                          }}>
                        <Tab key="text"
                             title={
                                 <div className="flex items-center gap-2">
                                     <User className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                     <span className='sm:text-base text-sm text-natural_gray-900'>متنی</span>
                                 </div>
                             }>
                            <Text id={id} url={url} logged={student} asPath={asPath}
                                  showOtherComments={showOtherComments}/>
                        </Tab>
                        <Tab key="audio"
                             title={
                                 <div className="flex items-center gap-2">
                                     <Mic className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                     <span className='sm:text-base text-sm text-natural_gray-900'>صوتی</span>
                                 </div>
                             }>
                            <Audio id={id} url={url} logged={student} asPath={asPath}
                                   showOtherComments={showOtherComments}/>
                        < /Tab>
                        <Tab key="video"
                             title={
                                 <div className="flex items-center gap-2">
                                     <Video className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                     <span className='sm:text-base text-sm text-natural_gray-900'>ویدیویی</span>
                                 </div>
                             }>
                            <Videos id={id} url={url} logged={student} asPath={asPath}
                                    showOtherComments={showOtherComments}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Comments;