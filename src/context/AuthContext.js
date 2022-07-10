import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [Auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)

        if (token) {
            async function getUserData() {
                try {
                    const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
                    console.log(response.data);
                    toggleAuth({
                        isAuth: true,
                        status: "done",
                        user: {
                            email: response.data.email,
                            username: response.data.username,
                            id: response.data.id,
                            roles: response.data.roles[0],
                        }
                    })
                } catch (e) {
                    toggleAuth({
                        ...Auth,
                        status: 'error'
                    })
                    localStorage.clear()
                    console.error(e);
                }

            }

            getUserData();
        } else {
            toggleAuth({
                ...Auth,
                status: 'done'
            })
        }

    }, []);


    function inlog(token) {
        console.log("de user is ingelogd")
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.sub;
        localStorage.setItem('token', token)

        toggleAuth({
            ...Auth,
            isAuth: true,
            status: 'done',
            user: {
                username: userId,
            }
        });
        history.push("/dashboard")
    }


    function uitlog() {
        toggleAuth({
            isAuth: false,
            user: null,
            status: 'done'
        })
        localStorage.clear()
        history.push('/')
    }

    const contextData = {
        loggedIn: Auth.isAuth,
        login: inlog,
        logout: uitlog,
        user: Auth.user,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {Auth.status === "done" && children}
            {Auth.status === "pending" && <p>Loading..</p>}
            {Auth.status === "error" && <p>Er is iets is mis gegaan <link to="/inlog"> log je opnieuw in!</link></p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider