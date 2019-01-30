import React from 'react'; 
import classes from './MovieWatch.module.css';

const MovieWatch = (props) => {
    return (
        <div className ={classes.Movie_watch}>
             <img className={classes.clicked} src={props.image} alt="Movie" />
        </div>
    );
}

export default MovieWatch;