import React from 'react';
import Button from './Button';

function ButtonSecondary(props){
    const theme = {
        backgroundColor: '#e8f3fa',
    };
    return(
        <Button theme={theme} {...props} />
    );
}

export default ButtonSecondary;