import './App.css';
import ItemListContainer from './components/ItemListContainer';
import  Navbar  from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting="PROXIMAMENTE PODRAS VER TODOS LOS PRODUCTOS" />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
