import React from 'react';

const Button = (props) => {
    return <button onClick ={props.getRating}>{props.text}</button>
}

export default Button;