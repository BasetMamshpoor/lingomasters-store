import Card from '../Card';
import { useRouter } from "next/router";
import Pagination from '../Pagination';
import useGetRequest from '@/hooks/useGetRequest';
import { useEffect, useState } from 'react';

const Products = ({ edu }) => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1)
    const { slug, ...query } = router.query

    const [data, setData, setReload, pagination] = useGetRequest(edu ? '/educational-product' : `/product/${slug}`, currentPage, query)

    // useEffect(() => {
    // setReload(Math.random);
    // }, [query]);

    return (
        <>
            {data ? <>
                <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 px-4">
                    {data.length ? data.map((d, i) => <Card key={i} data={d} withTag={edu ? false : true} solid={edu ? true : false} offRed={edu ? true : false} edu={edu} withLabel={edu ? false : true} />) : ''}
                </div>
                <div className="centerOfParent">
                    <Pagination total={pagination.total} per_page={pagination.per_page} onChange={(e) => setCurrentPage(e)} />
                </div>
            </> : ''
            }
        </>
    );
};

export default Products;