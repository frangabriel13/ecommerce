import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Detail from './components/detail/Detail';
import ProductStore from './components/productStore/ProductStore';
import ComoComprar from './components/como-comprar/ComoComprar';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<ProductStore />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/como-comprar' element={<ComoComprar />} />
      </Routes>
    </>
  )
}

export default App;
        
