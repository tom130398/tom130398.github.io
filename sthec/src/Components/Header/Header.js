import React from "react";
import  "./Header.css";
const Header = () => {
    return(
        <header className="headerStyle">
            <h1 style = {{marginTop: 0, marginBottom: 0}}>Choose your happiness</h1>
            <h2 style = {{marginTop: 0, marginBottom: 0}}>Together we can reduce the carbon footprint</h2>
            <p style = {{marginTop: 0, marginBottom: 0}}>
            Learn more about carbon footprint <a className="link" href="https://en.wikipedia.org/wiki/Carbon_footprint">here</a></p>
        </header>
    );
}

export default Header;