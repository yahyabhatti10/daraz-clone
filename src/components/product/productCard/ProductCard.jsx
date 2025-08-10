import {Card} from 'react-bootstrap';
import './ProductCard.css';


function ProductCard({product, showSale=false})
{
    function calDiscountedPercent() 
    {
        if (product.onSale) 
        {
           return Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);
        }
        else
        {
            return 0;
        }
    }
    const discountPercent = calDiscountedPercent();
        
    return (
        <>
        <Card className="product-card">
            <Card.Img className="product-img" variant="top" src={product.img} alt={product.name} />
            <Card.Body className="product-card-body">
                <Card.Title style={{fontSize:'15px'}}>{product.name}</Card.Title>

                {showSale && product.onSale ? (
                    <>
                        <Card.Subtitle style={{color:"#eb7438ff", fontSize:"20px"}}>{`Rs. ${product.discountedPrice}`}</Card.Subtitle>
                        <div style={{gap: "8px", display: "flex", flexDirection: "row"}}>
                            <span style={{color:"#979797ff", fontSize:"12px", paddingTop:"5px", fontWeight:"400", textDecoration:"line-through"}}>{`Rs. ${product.originalPrice}`}</span>
                            <span style={{color:"#000000ff", fontSize:"12px", paddingTop:"5px"}}>{`-${discountPercent}%`}</span>
                        </div>
                    </>
                ):(
                    <>
                        <Card.Subtitle style={{color:"#eb7438ff", fontSize:"20px"}}>{`Rs. ${product.originalPrice}`}</Card.Subtitle>
                        <Card.Subtitle style={{color:"#838383ff", fontSize:"12px", paddingTop:"10px"}}>{`⭐⭐⭐⭐⭐   (${product.reviewsCount})`}</Card.Subtitle>
                    </>
                )}
            </Card.Body>
        </Card>
        </>
    )
}
export default ProductCard;