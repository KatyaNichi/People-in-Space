import React from "react";
const Header = ({data}) => {
    return (
        <div className="header">
            <h1 className="welcome">
                Welcome to space!
        </h1>
        <h2>
                How many humans are in space right now?
        </h2>
        <h2>
                {data} !
        </h2>
        </div> 
    )
}


export default Header;