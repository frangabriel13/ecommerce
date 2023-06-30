import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>
    </>
  )
}

export default App;
