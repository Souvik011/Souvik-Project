import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import Header from './component/Layout/Header';
import CartProvider from './Store/CartProvider';
import Home from './component/Pages/Home';
import Store from './component/Pages/Store';
import About from './component/Pages/About';
import ContactUs from './component/Pages/ContactUs';


const router=createBrowserRouter([
  {path:"/",element:<Store/>},
  {path:"/about",element:<About/>},
  {path:"/home",element:<Home/>},
  {path:"/store", element:<Store/>},
  {path:"/contactus" , element:<ContactUs />}
])

function App() {
  return (
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;
