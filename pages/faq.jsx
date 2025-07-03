import React, {useEffect, useState} from 'react';
import Question from '@icons/question-circle.svg'
import Plus from '@icons/plus.svg'
import {Accordion, AccordionItem, Tab, Tabs} from "@heroui/react";
import FaqQues from 'db/faq.json'
import {useRouter} from "next/router";

const Faq = () => {
    const router = useRouter()
    const {ru} = router.query;
    const [selected, setSelected] = useState()
    useEffect(() => {
        if (ru) setSelected(ru)
    }, [ru]);
    return (
        <>
            <div className="flex flex-col items-center gap-10 my-10">
                <div className="self-center flex items-center gap-4">
                    <span className="sm:text-lg">سوالات متداول</span>
                    <Question/>
                </div>
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    classNames={{
                        tabList: 'border-b pb-0 gap-2 w-full',
                        cursor: "shadow-none w-full",
                        tabContent: 'lg:w-64 w-full sm:text-sm text-xs',
                        tab: "py-4 h-fit",
                        panel: 'w-full',
                        base:'lg:w-fit w-full'
                    }}
                    style={{
                        "--heroui-success": "38 87% 56%",
                    }}
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    color='success'>
                    <Tab title='خریداران' key='buyer'>
                        <Accordion dir="rtl" variant="splitted">
                            {FaqQues.buyer.map((faq, i) => (
                                <AccordionItem key={i} classNames={{content: 'text-sm', title: 'text-sm'}}
                                               indicator={<Plus className="fill-primary-600"/>}
                                               aria-label={faq.question} title={faq.question}>
                                    {faq.answer}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Tab>
                    <Tab title='فروشندگان' key='seller'>
                        <Accordion dir="rtl" variant="splitted">
                            {FaqQues.seller.map((faq, i) => (
                                <AccordionItem key={i} classNames={{content: 'text-sm', title: 'text-sm'}}
                                               indicator={<Plus className="fill-primary-600"/>}
                                               aria-label={faq.question} title={faq.question}>
                                    {faq.answer}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default Faq;