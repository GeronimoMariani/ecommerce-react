import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar";


function App() {
  return (
    <header>
      <Navbar />
      <ItemListContainer greeting="PROXIMAMENTE PODRAS VER TODOS LOS PRODUCTOS" />
    </header>
  );
}

export default App
