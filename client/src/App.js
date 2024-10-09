
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from "./components/navbar.js"
import Home from "./components/home.js"
import Register from "./components/register.js"
import {Routes,Route } from 'react-router-dom';
import Edit from './components/Edit.js';
import Details from './components/Details.js';







function App() {
  return (
    <>
      <Navbaar/>
       
          <Routes>
            <Route  exact path="/" Component={Home}/>
            
            <Route exact path="/register" Component={Register}/>
            
            <Route exact path="/edit/:id" Component={Edit}/>
            
            <Route exact path="/view/:id" Component={Details}/>



          </Routes>

          


        
        
      
      {/* <Home/>
      
      <Register/> */}


    </>
  );
}

export default App;
