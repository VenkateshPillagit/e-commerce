import React from "react";
import './ecommerce.css';
import NavBar from "./Components/NavBar/NavBar";

function ECommerceIndia() {
    console.log(window.innerHeight, window.innerWidth, window.visualViewport);
    return (
        <div className="container">
            <NavBar />
        </div>
    );
};

export default ECommerceIndia;