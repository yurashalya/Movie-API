import React from 'react'; 
import { Link } from 'react-router-dom';
import classes from './MovieWatch.module.css';

const MovieWatch = (props) => {
    return (
        <div className ={classes.Movie_watch}>
            {props.clicked ? 
            <Link to = {{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}} >
                <img className={classes.clicked} src={props.image} alt="Movie" />
            </Link>
            :
                <img className={classes.clicked} src={props.image} alt="Movie" /> 
            }
        </div>
    );
}

export default MovieWatch;