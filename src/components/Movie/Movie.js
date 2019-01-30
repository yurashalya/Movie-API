import React, { Component } from 'react';
import  { API_URl, API_KEY } from '../../Configs/Configs';
import Nav from '../component/Nav/Nav';
import MovieInfo from '../component/MovieInfo/MovieInfo';
import ColsGrid from '../component/ColsGrid/ColsGrid';
import Actors from '../component/Actors/Actors';
import Spinner from '../component/Spinner/Spinner';

import classes from './Movie.module.css';

class Movie extends Component {
    render() {
        return(
            <div className={classes.Movie}>
                <Nav />
                <MovieInfo />
                <MovieInfo />
                <ColsGrid />
                <Spinner />
            </div>
        );
    }
}

export default Movie;