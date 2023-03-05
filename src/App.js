import './App.css';
import React , {useState} from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Footer from './components/Layout/Footer';

const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ];
  
  
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler=()=>{
    setCartIsShown(true)
  }

  const HideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (<React.Fragment>
    
    <div className='container'>
      <div>
        { cartIsShown && <Cart onClose={HideCartHandler}/>}
        <Header onShowCart={ShowCartHandler}/>
          
        <Product Item = {productsArr} />
        <Footer />
        </div>
    </div>
  </React.Fragment>
  );
}

export default App;

