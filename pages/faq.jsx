import Icon from "@icons/question-circle.svg";
import Right from "@icons/chevron-right.svg";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function FaqSection() {
    const faqItems = [
        {
            key: 1,
            title: 'آیا می توان کلاس ها را به صورت قسطی پرداخت کرد؟',
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            key: 3,
            title: "آیا می توان کلاس ها را به صورت قسطی پرداخت کرد؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            key: 4,
            title: "آیا می توان کلاس ها را به صورت قسطی پرداخت کرد؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            key: 5,
            title: "آیا می توان کلاس ها را به صورت قسطی پرداخت کرد؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            key: 6,
            title: "آیا می توان کلاس ها را به صورت قسطی پرداخت کرد؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
    ];

    return (
        <main dir="rtl">
            <div className="container pt-8 px-4">
                <div className="flex items-center lg:justify-center w-full mb-10">
                    <div className="centerOfParent gap-3">
                        <div className="centerOfParent"><Icon className='lg:block hidden' /> <Right className='lg:hidden fill-primary-700' /></div>
                        <h1 className="font-semibold lg:text-xl sm:text-base text-sm">سوالات متداول</h1>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <Tabs
                        variant="underlined"
                        classNames={{
                            base: '',
                            tabList: 'grow gap-0 items-center justify-center',
                            tab: 'w-1/4 h-16 border-b',
                            panel: 'px-0 [&>div>div]:px-0',
                            cursor: "w-full bg-warning",
                            tabContent: "lg:text-base sm:text-sm text-xs group-data-[selected=true]:text-warning"
                        }}
                        aria-label="Options">
                        <Tab key="key1" title="خریداران">
                            <Card className="shadow-none rounded-none">
                                <CardBody>
                                    <Accordion variant="splitted">
                                        {faqItems.map((item) => (
                                            <AccordionItem
                                                classNames={{ title: 'lg:text-base sm:text-sm text-xs' }}
                                                className="mb-6 [&>section>div]:lg:text-base [&>section>div]:sm:text-sm [&>section>div]:text-xs [&>section]:pb-4 [&>section>div]:bg-primary-50 [&>section>div]:rounded-lg [&>section>div]:p-3 [&>section>div]:text-justify"
                                                key={item.key}
                                                aria-label={`Accordion ${item.key}`}
                                                title={item.title}
                                            >
                                                {item.content}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="key2" title="فروشندگان">
                            <Card className="shadow-none rounded-none">
                                <CardBody>
                                    <Accordion variant="splitted">
                                        {faqItems.map((item) => (
                                            <AccordionItem
                                                classNames={{ title: 'lg:text-base sm:text-sm text-xs' }}
                                                className="mb-6 [&>section>div]:lg:text-base [&>section>div]:sm:text-sm [&>section>div]:text-xs [&>section]:pb-4 [&>section>div]:bg-primary-50 [&>section>div]:rounded-lg [&>section>div]:p-3 [&>section>div]:text-justify"
                                                key={item.key}
                                                aria-label={`Accordion ${item.key}`}
                                                title={item.title}
                                            >
                                                {item.content}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>

            </div>
        </main>
    );
}