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

    // useEffect(() => {
    //     const jwt = localStorage.getItem('token')
    //     if (jwt) {
    //         fetchUserData(jwt)
    //     } else {
    //         toggleAuth({
    //             isAuth: false,
    //             user: null,
    //             status: 'done',
    //         });
    //     }
    // }, [])

    function inlog(token) {
        console.log("de user is ingelogd")
        console.log(token);
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);
        const userId = decodedToken.sub;
        console.log(userId);
        localStorage.setItem('token', token);


    //     fetchUserData(jwt,'/')
    // }
    //
    // async function fetchUserData(jwt, redirectUrl) {
    //     try {
    //         const data = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${jwt}`,
    //             }
    //         })
            toggleAuth({
                isAuth: true,
                status: 'done',
                user: {
                    username: userId,
                    // email: data.data.email,
                    // id: data.data.id,
                }
            });
            history.push("/")
        //     if (redirectUrl) {
        //         history.push(redirectUrl)
        //     }
        // } catch (e) {
        //     console.error(e)
        // }
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
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider