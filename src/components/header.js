import React from "react";

export default function Header() {
    return(
        <header className="header">
            <img src={process.env.PUBLIC_URL + "./images/cowswap-1.svg"} className="cowimage-1" alt=""/>
            <h2 className="header--side">Dont let your memes be dreams</h2>
        </header>

)}