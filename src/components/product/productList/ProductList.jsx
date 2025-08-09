import data from '../../../data/data'
import ProductCard from '../productCard/ProductCard';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './ProductList.css'; 

function ProductList(){
    const [visibleCount, setVisibleCount] = useState(25);
    
    const allProducts = Object.values(data).map(category => category.products).flat()
    console.log(allProducts)
    
    function handleLoadMore() 
    {
        setVisibleCount((prevCount) => prevCount + 25)
    }

    return (
        <>
        <h4 style={{marginLeft:"10px"}}>Just for You</h4>
        <div className="product-list" style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
            {allProducts.slice(0, visibleCount).map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
        {visibleCount < allProducts.length && (
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