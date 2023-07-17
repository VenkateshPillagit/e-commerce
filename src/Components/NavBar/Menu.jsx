import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'

function Menu(){
    return(
        <div className="sidebar-container">
            <FontAwesomeIcon icon={faBars} fontSize='30px' />
        </div>
    );
}

export default Menu;