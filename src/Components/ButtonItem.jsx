import React from 'react'
const ButtonItem = (props) => {
    const classes = ['calculator__keypad'];
    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
    classes.push(props.type);
    return(
        <button className={classes.join(' ')} onClick={props.onButtonPress}>
            {props.children}
        </button>
    )
}


export default ButtonItem