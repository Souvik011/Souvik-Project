import React,{Fragment} from 'react'
import { Link,NavLink } from 'react-router-dom'; // import Link instead of NavLink
import { Card ,Nav,Navbar,Container} from 'react-bootstrap';

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: 1
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: 2
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: 3
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: 4
  },
];

const ProductsOnly = () => {
  return (
    <Fragment>

        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">

              <NavLink className="m-3" to="/home" style={{color:'white',textDecorationColor:'whitesmoke'}}>Home</NavLink>

              <NavLink className="m-3" to="/store" style={{color:'white',textDecorationColor:'whitesmoke'}}>Store</NavLink>

              <NavLink className="m-3" to="/about" style={{color:'white',textDecorationColor:'whitesmoke'}}>About</NavLink>


            <NavLink className="m-3" to="/contactus" style={{color:'white',textDecorationColor:'whitesmoke'}}>Contact Us</NavLink>

            <NavLink className="m-3" to="/product" style={{color:'white',textDecorationColor:'whitesmoke'}}>Product</NavLink>

          </Nav>
        </Container>
      </Navbar>
      {productsArr.map((product)=>(
        <form style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }} className="m-3" key={Math.random()}>
          <Link to={`/Product-Details/${product.id}`}>
            <Card className="shadow-lg m-5" key={Math.random()} style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }}>
              <Card.Img variant="top" src={product.imageUrl}></Card.Img>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <span>Product Details</span>
              </Card.Body>
            </Card>
          </Link>
        </form>
      ))}
    </Fragment>
  )
}

export default ProductsOnly;