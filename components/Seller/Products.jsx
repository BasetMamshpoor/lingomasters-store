import CardC from '../Card';
import {useRouter} from "next/router";
import Pagination from '../Pagination';
import useGetRequest from '@/hooks/useGetRequest';
import {useMemo} from 'react';
import {Skeleton} from "@heroui/react";

const Products = ({ currentPage, setCurrentPage}) => {
    const router = useRouter()
    const {id, ...query} = router.query
    const stableQuery = useMemo(() => ({...query}), [JSON.stringify(query)]);

    const [data, setData, setReload, pagination] = useGetRequest(`/product/seller/${id}`, currentPage, stableQuery);

    return (
        <>
            {data
                ? <>
                    {!!data.length
                        ? <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
                            {data.map((d, i) => <CardC
                                key={i} data={d} withTag={!d.is_herper}
                                solid={!!d.is_herper} offRed={!!d.is_herper} edu={d.is_herper}
                                withLabel={!d.is_herper}/>)}
                        </div>
                        : <p className='w-full'>محصولی پیدا نشد لطفا فیلتر ها را تغییر دهید</p>}
                    <div className="centerOfParent">
                        <Pagination total={pagination.total} per_page={pagination.per_page} currentPage={currentPage}
                                    onChange={setCurrentPage}/>
                    </div>
                </>
                : <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
                    {[...Array(6)].map((_, i) => {
                        return <div key={i} dir='ltr'
                                    className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-4 sm:max-w-[302px] w-full h-fit flex-shrink-0 rounded-lg md:p-6 p-4 bg-white`}>
                            <Skeleton
                                className="sm:max-w-[254px] max-w-[210px] w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken"/>
                            <div className="grow flex flex-col gap-4 mt-4">
                                <Skeleton className='rounded w-1/2 h-6 self-end'/>
                                <Skeleton className='rounded w-1/4 h-6'/>
                                <div className="flex items-center sm:gap-6 gap-4 sm:max-w-64 max-w-52 w-full">
                                    <Skeleton className="p-4 sm:w-[60px] w-11 sm:h-12 h-8 rounded-md"/>
                                    <Skeleton
                                        className='sm:text-base text-xs sm:h-12 h-8 flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded '/>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        </>
    );
};

export default Products;