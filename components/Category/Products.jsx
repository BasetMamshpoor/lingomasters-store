import Card from '../card';

const Products = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {[...Array(30)].map((_, i) => <Card key={i} />)}
            </div>
        </>
    );
};

export default Products;