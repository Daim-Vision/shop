import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Products from "./Products";
import styles from "./Card.css";

function Product(props) {
  return (
    <Card style={{ width: "30%"}} className="Card">
      <div className="image_container">
        <Card.Img variant="top" src={props.img} />
      </div>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {props.name} {props.price}
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
