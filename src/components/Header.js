import React from "react";
// import img1 from "./images/troll.png"


export default function Header(){
    return(
            <header className="header">
               {/* <img src={troll} alt="troll-face" /> */}
               <img src="./images/troll.png" alt="hello" />
              
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </header>
       
    )
}