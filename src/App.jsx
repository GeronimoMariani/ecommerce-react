import './App.css';
import ItemListContainer from './components/ItemListContainer';
import  Navbar  from "./components/Navbar";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting="PROXIMAMENTE PODRAS VER TODOS LOS PRODUCTOS" />
      </main>
    </>
  );
}

export default App
