import Card from '../Card';
import Pagination from '../Pagination/Pagination';
import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter()
    const { slug, sort } = router.query
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 px-4">
                {[...Array(30)].map((_, i) => <Card key={i} />)}
            </div>
            <div className="centerOfParent">
                <Pagination />
            </div>
        </>
    );
};

export default Products;