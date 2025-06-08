import React, {useState} from 'react';
import {Chip, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import Dots from "@icons/threedots.svg";
import I from "@icons/building.svg";
import NewTicket from "@/components/Profile/Support/NewTicket";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import Link from "next/link";

const Support = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, , , paginations, , loading] = useGetRequest( '/user/tickets', currentPage)
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="self-end">
                    <NewTicket/>
                </div>
                <Table
                    radius="sm"
                    aria-label="Example static collection table"
                    className="sm:flex hidden"
                    classNames={{
                        wrapper: 'p-0',
                        th: 'bg-natural_gray-50 !rounded-none text-black text-center',
                        td: 'text-center whitespace-nowrap',
                    }}
                >
                    <TableHeader>
                        <TableColumn width={60}>ردیف</TableColumn>
                        <TableColumn>شماره</TableColumn>
                        <TableColumn>موضوع</TableColumn>
                        <TableColumn>دپارتمان</TableColumn>
                        <TableColumn>آخرین پیام</TableColumn>
                        <TableColumn>وضعیت</TableColumn>
                        <TableColumn>جزئیات</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={loading}
                        loadingContent={<Spinner color="success"/>}
                        loadingState={loading}
                    >
                        {data?.map((item, i) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.row_number}</TableCell>
                                <TableCell>{item.ticket_number}</TableCell>
                                <TableCell>{item.subject}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat('fa-IR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(new Date(item.last_message_at))}</TableCell>
                                <TableCell>
                                    <Chip
                                        color={item.status === 'answered' ? 'success' : item.status === 'pending' ? 'warning' : 'danger'}
                                        radius='sm'
                                        className={`font-semibold max-w-full w-full ${
                                            item.status === 'answered' ? 'text-success-700 bg-success-50' :
                                                item.status === 'pending' ? 'text-warning-700 bg-warning-50' :
                                                    'text-danger-700 bg-danger-50'
                                        }`}>
                                        {item.status === 'answered' ? 'پاسخ داده شده' : item.status === 'pending' ? 'در انتظار بررسی' : 'بسته شده'}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <Link
                                        className="centerOfParent w-fit mx-auto gap-2 border border-primary-700 rounded-lg p-1"
                                        href={`/profile/support/${item.id}`}>
                                        <Dots className="w-5 h-5 fill-primary-700 rotate-90"/>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {loading ?
                    <Spinner color="success"/>
                    : <div className="flex sm:hidden flex-col gap-6">
                        {data?.map((item, i) => (
                            <Link href={`/profile/support/${item.id}`} key={item.id}
                                  className="p-3 border border-natural_gray-200 bg-white rounded-xl flex flex-col gap-4">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-primary-700 font-bold text-sm">{item.subject}</p>
                                        <Chip size="sm"
                                              color={item.status === 'answered' ? 'success' : item.status === 'pending' ? 'warning' : 'danger'}
                                              radius='sm'
                                              className={`font-semibold ${
                                                  item.status === 'answered' ? 'text-success-700 bg-success-50' :
                                                      item.status === 'pending' ? 'text-warning-700 bg-warning-50' :
                                                          'text-danger-700 bg-danger-50'
                                              }`}>
                                            {item.status === 'answered' ? 'پاسخ داده شده' : item.status === 'pending' ? 'در انتظار بررسی' : 'بسته شده'}
                                        </Chip>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="centerOfParent gap-1"><I className="fill-primary-700"/> <span
                                            className="text-xs text-natural_gray-900">{item.department}</span></div>
                                        <p className="text-natural_gray-950 text-xs">{new Intl.DateTimeFormat('fa-IR', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        }).format(new Date(item.last_message_at))}</p>
                                    </div>
                                </div>
                                <hr className="border-natural_gray-200"/>
                                <div className="flex items-center justify-between text-natural_gray-950 text-xs">
                                    <p>{new Intl.DateTimeFormat('fa-IR', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit'
                                    }).format(new Date(item.created_at))}</p>
                                    <p>شماره تیکت: {item.ticket_number}</p>
                                </div>
                            </Link>
                        ))}
                    </div>}
                {paginations ?
                    <div className="flex items-center justify-center">
                        <PaginationApp total={paginations.total} per_page={paginations.per_page}
                                       onChange={(page) => setCurrentPage(page)}/>
                    </div> : null}
            </div>
        </>
    );
};

export default Support;