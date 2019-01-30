import React from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './MovieWatch.module.css';

const MovieWatch = ({ image, movieId, movieName, clicked }) => {
    return (
        <div className ={classes.Movie_watch}>
            {clicked ? 
            <Link to = {{pathname: `/${movieId}`, movieName: `${movieName}`}} >
                <img className={classes.clicked} src={image} alt="Movie" />
            </Link>
            :
                <img className={classes.clicked} src={image} alt="Movie" /> 
            }
        </div>
    );
}

MovieWatch.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool
  }

export default MovieWatch;