import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
    </>
  )
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import Home from './pages/Home';
// import Tienda from './pages/Tienda';
// import Categorias from './pages/Categorias';
// import Contacto from './pages/Contacto';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/home" component={Home} />
//         <Route path="/tienda" component={Tienda} />
//         <Route path="/categorias" component={Categorias} />
//         <Route path="/contacto" component={Contacto} />
//       </Switch>
//       {/* Coloca el componente Header aquí para que se muestre en todas las secciones */}
//       {/* Coloca el componente Footer aquí para que se muestre en todas las secciones */}
//     </Router>
//   );
// };

// export default App;
