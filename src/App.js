import React from 'react'
// global Style
import GlobalStyle from "./components/GlobalStyle"
// Import pages
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork"
import Registar from "./pages/Registar"
import Login from "./pages/Login"
import {Navbar} from "./components/navbar"
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar/>
      <Switch>
        <Route path="/" exact>
        <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork/>
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
     
     
    </div>
  );
}

export default App;
