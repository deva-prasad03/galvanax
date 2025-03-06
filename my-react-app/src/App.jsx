import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbar';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  AOS.init({
    offset: 120,       // Start animation after 120px scroll
    duration: 1500,    // Animation duration (in ms)
    easing: "ease-in-out",
    once: false,       // Animate every time you scroll
  });
  return (
    <div>
        <div className ="">      
              <Navbarcomponent />
        </div >
        <div >
        <Home/>

        </div>
        
      
    </div>
  )
}

export default App
