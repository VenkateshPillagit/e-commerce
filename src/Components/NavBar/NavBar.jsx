import React from "react";
import './NavBar.css'
import Menu from "./Menu";
import SearchField from "./SearchField";
import Button from "../Common/Buttons/Button";
import ButtonPrimary from "../Common/Buttons/ButtonPrimary";
import ButtonSecondary from "../Common/Buttons/ButtonSecondary";

function NavBar() {
    return (
        <div className="nav-container">
            <div className="nav-grid-container">
                <div className="grid-item grid-item-menu">
                    <Menu />
                </div>
                <div className="grid-item">
                    <SearchField />
                </div>
                <div className="grid-item">
                    <div>
                        <ButtonPrimary value="LogIn" type="submit" />
                    </div>
                    <div>
                        <ButtonSecondary value="LogIn" type="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;