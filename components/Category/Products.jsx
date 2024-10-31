import CardC from '../Card';
import { useRouter } from "next/router";
import Pagination from '../Pagination';
import useGetRequest from '@/hooks/useGetRequest';
import { useCallback, useEffect } from 'react';
import { Skeleton, Card } from '@nextui-org/react';

const Products = ({ edu, currentPage, setCurrentPage }) => {
    const router = useRouter()
    const { slug, ...query } = router.query

    const serializedQuery = JSON.stringify(query);

    const parsedQuery = JSON.parse(serializedQuery);
    const [data, setData, setReload, pagination] = useGetRequest(edu ? '/educational-product' : (slug ? `/product/${slug}` : null), currentPage, parsedQuery);


    const handleReload = useCallback(() => {
        setReload(Math.random());
    }, [serializedQuery]);

    useEffect(() => {
        handleReload();
    }, [handleReload]);

    return (
        <>
            {data
                ? <>
                    <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 px-4">
                        {data.map((d, i) => <CardC key={i} data={d} withTag={edu ? false : true} solid={edu ? true : false} offRed={edu ? true : false} edu={edu} withLabel={edu ? false : true} />)}
                    </div>
                    <div className="centerOfParent">
                        <Pagination total={pagination.total} per_page={pagination.per_page} currentPage={currentPage} onChange={(e) => setCurrentPage(e)} />
                    </div>
                </>
                : <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 px-4">
                    {[...Array(10)].map((_, i) => {
                        return <Card key={i} className="flex flex-col gap-2 p-4" radius="lg">
                            <Skeleton className="rounded-lg">
                                <div className="h-24 rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <div className="space-y-3">
                                <Skeleton className="w-3/5 rounded-lg">
                                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg">
                                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                </Skeleton>
                            </div>
                        </Card>
                    })}
                </div>
            }
        </>
    );
};

export default Products;