import './App.css';
import Contacto from './components/Contact';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import  Navbar  from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/productos' element={<ItemListContainer />} />
            <Route exact path='/productos/:marca' element={<ItemListContainer />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/carrito' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App
