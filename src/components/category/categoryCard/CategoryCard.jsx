import Card from 'react-bootstrap/Card';
import './CategoryCard.css'; 

function CategoryCard({ category }) {
  return (
    <Card className="category-card">
      <Card.Img className="category-img" variant="top" src={category.img} alt={category.name} />
      <Card.Body className="category-card-body">
        <Card.Title style={{fontSize:'15px'}}>{category.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
