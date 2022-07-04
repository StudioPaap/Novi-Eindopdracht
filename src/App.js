import './App.css';
import React from "react";
import {Switch, Route} from 'react-router-dom';
import InlogPage from "./Pages/Inlog/InlogPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import FormPage from "./Pages/Form/formPage";
import Test from "./Pages/Test pagina/test";
import ThanksPage from "./Pages/Thanks/ThanksPage";
import Weather from "./Pages/Weather/Weather";



function App() {
  return (
<>
  <Switch>
    <Route exact path="/">
      <DashboardPage/>
    </Route>
    <Route path="/inlog">
      <InlogPage/>
    </Route>
    <Route path="/registreer">
      <RegisterPage/>
    </Route>

    <Route path="/bestellijst">
           <FormPage/>
    </Route>

    <Route path="/test">
      <Test/>
    </Route>

    <Route path="/thanks">
      <ThanksPage/>
    </Route>

    <Route path="/weer">
      <Weather/>
    </Route>


  </Switch>




</>


  );
}

export default App;
