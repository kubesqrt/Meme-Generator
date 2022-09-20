import React from "react";

export default function Header(){
    return(
        <header>
            <img src={process.env.PUBLIC_URL + "./images/cowswap-1.png"} className="cowimage-1"/>
            <h1 className="header--title">CoW Meme generator</h1>
            <h2 className="header--side">Dont let your memes be dreams</h2>

        </header>

)}