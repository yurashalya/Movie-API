import React, { Component } from 'react';
import  { API_URL, API_KEY } from '../../Configs/Configs';
import Nav from '../component/Nav/Nav';
import MovieInfo from '../component/MovieInfo/MovieInfo';
import ColsGrid from '../component/ColsGrid/ColsGrid';
import Actors from '../component/Actors/Actors';
import Spinner from '../component/Spinner/Spinner';

import classes from './Movie.module.css';

class Movie extends Component {

    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount() {
          this.setState({ loading: true })
          
          let point = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
          this.fetchItems(point)
        }

    fetchItems = (point) => {
        fetch(point)
        .then(result => result.json())
        .then(result =>  {
            if (result.status_code) {
                this.setState({ loading: false });
            } else {
                this.setState({ movie: result }, () => {
                    let point = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                    fetch(point)
                    .then(result => result.json())
                    .then(result => {
                        const directors = result.crew.filter( (member) => member.job === "Director");
                        this.setState({
                            actors: result.cast,
                            directors,
                            loading: false
                        })
                    })
                })
            }

        })
        .catch(error => console.error('Error:', error));
    }
    

    render() {
        return(
            <div className={classes.Movie}>
                <Nav />
                <MovieInfo />
                <MovieInfo />
                {/* <ColsGrid /> */}
                <Spinner />
            </div>
        );
    }
}

export default Movie;