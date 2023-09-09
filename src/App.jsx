import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import  Navbar  from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/productos' element={<ItemListContainer />} />
        <Route exact path='/productos/:marca' element={<ItemListContainer />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
