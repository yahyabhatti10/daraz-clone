import Card from 'react-bootstrap/Card';
import './CategoryCard.css'; 
import { useNavigate } from 'react-router-dom';

function CategoryCard({ categoryKey, category }) {

  const navigate = useNavigate(); 

  function handleClick(){
    navigate(`/products/${categoryKey}`)
  }
  return (
    <Card className="category-card" onClick={handleClick}>
      <Card.Img className="category-img" variant="top" src={category.img} alt={category.name} />
      <Card.Body className="category-card-body">
        <Card.Title style={{fontSize:'15px'}}>{category.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
