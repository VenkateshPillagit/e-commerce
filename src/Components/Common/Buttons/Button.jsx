import React from 'react';
import './Button.css'

const ButtonType = (styleType) => {
    switch (key) {
        case value:
            return 'test';   
        default:
            break;
    }
}

function Button({ value, styleType, type, theme, ...props }){
    const css = {
        backgroundColor: theme.backgroundColor,
        borderColor: '#fff',
        color: theme?.fontColor,
    };
    return(
        <div className='button-container'>
            <button type={type ? type : 'button'} {...props} style={{...css}}>{value} </button>
        </div>
    );
};

export default Button;