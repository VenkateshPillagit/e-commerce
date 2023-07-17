import React from 'react';
import Button from './Button';

function ButtonPrimary(props){
    const theme = {
        backgroundColor: '#1677ff',
        fontColor: '#fff'
    };
    return(
        <Button styleType='primary' theme={theme} {...props} />
    );
}

export default ButtonPrimary;