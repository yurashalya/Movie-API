import React from 'react';
import classes from './LoaderBtn.module.css';

const LoaderBtn = (props) => {
    return (
        <div 
            className={classes.Loader_btn} 
            onClick={props.onClick}
        ><p>{props.text}</p></div>
    );
}


export default LoaderBtn;