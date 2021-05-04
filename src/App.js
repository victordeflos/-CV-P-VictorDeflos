import React from 'react'
// global Style
import GlobalStyle from "./components/GlobalStyle"
// Import pages
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork"
import Registar from "./pages/Registar"
import Login from "./pages/Login"
import MovieDetail from './pages/MovieDetails';
import {Navbar} from "./components/navbar"
import { Route, Switch, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar/> 
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
        <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
        <Route path="/registar">
          <Registar/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      </AnimatePresence>
     
    </div>
  );
}

export default App;
