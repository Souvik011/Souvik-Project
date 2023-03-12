import './App.css';
import React , {useState} from 'react';
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import CartProvider from './context/CartProvider';
import Store from './components/Pages/Store';
import About from './components/Pages/About';

  
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler=()=>{
    setCartIsShown(true)
  }

  const HideCartHandler=()=>{
    setCartIsShown(false)
  }


  return (
  <React.Fragment>
    <CartProvider>
    
    <div className='container'>
      <div>
        { cartIsShown && <Cart onClose={HideCartHandler}/>}
        <Header onShowCart={ShowCartHandler}/>
         <BrowserRouter>
         <Routes>
        <Route path="/About" element={<About />} />
          
       
        <Route path="/" element={<Store />} />
        </Routes>
        </BrowserRouter> 


        <Footer />
        </div>
    </div>
  </CartProvider>
  </React.Fragment>
  );
}

export default App;

