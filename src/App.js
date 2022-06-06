import './App.css';
import React from "react";
import {Switch, Route} from 'react-router-dom';
import InlogPage from "./Pages/Inlog/InlogPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import FormPage from "./Pages/Form/formPage";



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

  </Switch>




</>


  );
}

export default App;
