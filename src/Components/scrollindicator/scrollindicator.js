import React, {useState, useEffect} from "react";
import "./Styles.css"


function Scrollindicator(){
    const [scrollTop, setScrollTop]= useState(0);

    const onScroll = () =>{
        const winsScrol = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        const scrolled = (winsScrol/height)*100;

        setScrollTop(scrolled)
    }


    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
        return()=> window.removeEventListener("scroll", onScroll)
    },[])


    return(
        <div className="progressMainWrapper">
            <div className="progressMainStyle"
            style={{height:`${scrollTop}%`}}></div>
        </div>
    );



}

export default Scrollindicator;