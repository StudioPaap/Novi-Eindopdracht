import './App.css';
import React from "react";
import {Switch, Route} from 'react-router-dom';
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import FormPage from "./Pages/Form/formPage";
import Test from "./Pages/Test pagina/test";
import ThanksPage from "./Pages/Thanks/ThanksPage";
import Weather from "./Pages/Weather/Weather";
import Login from "./Pages/Inlog-test/Inlog--test";
import RegisterTestPage from "./Pages/Register-test/RegisterTestPage";




function App() {

  return (
<>
  <Switch>
    <Route exact path="/">
     <DashboardPage/>
    </Route>
    <Route path="/inlog">
      <Login/>
    </Route>
    <Route path="/registreer">
      <RegisterTestPage/>
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
