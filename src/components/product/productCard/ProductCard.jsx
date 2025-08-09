import {Card} from 'react-bootstrap';
import './ProductCard.css';

function ProductCard({product})
{
    return (
        <>
        <Card className="product-card">
            <Card.Img className="product-img" variant="top" src={product.img} alt={product.name} />
            <Card.Body className="product-card-body">
                <Card.Title style={{fontSize:'15px'}}>{product.name}</Card.Title>
                <Card.Subtitle style={{color:"#eb7438ff", fontSize:"20px"}}>{`Rs. ${product.originalPrice}`}</Card.Subtitle>
                <Card.Subtitle style={{color:"#838383ff", fontSize:"10px", paddingTop:"10px"}}>{`⭐⭐⭐⭐⭐   (${product.reviewsCount})`}</Card.Subtitle>
            </Card.Body>
        </Card>
        </>
    )
}
export default ProductCard;