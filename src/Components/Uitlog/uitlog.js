import React,{useContext} from "react";
import {AuthContext} from "../../context/AuthContext--test";
import "./uitlog.css"


function Uitlog(){
    const { logout } = useContext(AuthContext);

    return(
        <>
            <div className="uitlog">
            <button type="button"
                    onClick={ logout }
                    title="inlog">Uitloggen</button>
            </div>
        </>
    )

}
export default Uitlog;