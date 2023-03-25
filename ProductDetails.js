import React ,{Fragment}from 'react';
import { useParams,NavLink } from 'react-router-dom';
import { Card ,Navbar,Nav,Container} from 'react-bootstrap';


const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id:1,
    description: "This is a colorful album",
    reviews: [
      {
        id: 1,
        reviewer: "John Smith",
        comment: "Great colors, highly recommend!"
      },
      {
        id: 2,
        reviewer: "Jane Doe",
        comment: "Love the vibrant hues!"
      }
    ]
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id:2,
    description: "This is a black and white album",
    reviews: [
      {
        id: 1,
        reviewer: "Bob Johnson",
        comment: "Classy and timeless"
      },
      {
        id: 2,
        reviewer: "Mary Johnson",
        comment: "Great album for monochrome lovers"
      }
    ]
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id:3,
    description: "This is a yellow and black album",
    reviews: [
      {
        id: 1,
        reviewer: "David Lee",
        comment: "Bold and striking!"
      },
      {
        id: 2,
        reviewer: "Lisa Lee",
        comment: "Perfect album for our road trip photos"
      }
    ]
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id:4,
    description: "This is a blue album",
    reviews: [
      {
        id: 1,
        reviewer: "Tom Wilson",
        comment: "Great quality album, beautiful shade of blue"
      },
      {
        id: 2,
        reviewer: "Samantha Wilson",
        comment: "Highly recommend this album"
      }
    ]
  }
];

const ProductDetails = () => {
  const { Id } = useParams();
  const product = productsArr.find(p => p.id === parseInt(Id));

  if (!product) {
    return <div>Product not found</div>;
  }

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
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: {product.price}</h4>
          <h5>Reviews:</h5>
          {product.reviews.map(review => (
            <Card key={review.id} className="my-2 shadow-sm">
              <Card.Body>
                <Card.Title>{review.reviewer}</Card.Title>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default ProductDetails;