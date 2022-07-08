import React,{useContext} from "react";
import {AuthContext} from "../../context/AuthContext--test";


function Uitlog(){
    const { logout } = useContext(AuthContext);

    return(
        <>
            <button type="button"
                    onClick={ logout }
                    title="inlog">Uitloggen</button>
        </>
    )

}
export default Uitlog;