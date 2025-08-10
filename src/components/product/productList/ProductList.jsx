import data from '../../../data/data'
import ProductCard from '../productCard/ProductCard';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './ProductList.css'; 

function ProductList({products}){
    const [visibleCount, setVisibleCount] = useState(25);
    
    function handleLoadMore() 
    {
        setVisibleCount((prevCount) => prevCount + 5)
    }

    return (
        <>
        <div className="product-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {products.slice(0, visibleCount).map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
        {visibleCount < products.length && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button className="load-more-btn" onClick={handleLoadMore}>
                    Load More
                </Button>
            </div>
        )}
        </>
    )
}
export default ProductList;