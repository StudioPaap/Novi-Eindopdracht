import './App.css';
import React, {useContext} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import DashboardPage from "./Pages/dashboard/DashboardPage";
import Form from "./Pages/form/Form";
import Test from "./components/workdays/Workdays";
import Thanks from "./Pages/thanks/Thanks";
import Weather from "./components/weather/Weather";
import Login from "./Pages/inlog/Inlog";
import RegisterPage from "./Pages/register/Register";
import Home from "./Pages/home/Home";
import {AuthContext} from "./context/AuthContext";


function App() {
    const {loggedIn} = useContext(AuthContext);
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    {loggedIn ? <DashboardPage/> : <Redirect to="/"/>}
                </Route>
                <Route path="/inlog">
                    <Login/>
                </Route>
                <Route path="/registreer">
                    <RegisterPage/>
                </Route>
                <Route path="/bestellijst">
                    <Form/>
                </Route>
                <Route path="/test">
                    <Test/>
                </Route>
                <Route path="/thanks">
                    <Thanks/>
                </Route>
                <Route path="/weer">
                    <Weather/>
                </Route>


            </Switch>


        </>


    );
}

export default App;
