import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Detail from './components/detail/Detail';
import ProductStore from './components/productStore/ProductStore';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductStore />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App;
        
