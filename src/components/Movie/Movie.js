import React, { Component } from 'react';
import  { API_URL, API_KEY } from '../../Configs/Configs';
import Nav from '../component/Nav/Nav';
import MovieInfo from '../component/MovieInfo/MovieInfo';
import ColsGrid from '../component/ColsGrid/ColsGrid';
import MovieBars from '../component/MovieBars/MovieBars';
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
          
          const point = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
          this.fetchItems(point);
        }

    fetchItems = (point) => {
        //ES 6 
        const { movieId } = this.props.match.params;

        fetch(point)
        .then(result => result.json())
        .then(result =>  {
            if (result.status_code) {
                this.setState({ loading: false });
            } else {
                this.setState({ movie: result }, () => {
                    let point = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
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
        const { movieName } = this.props.location;
        const { movie, directors, actors, loading } = this.state;

        return (
            <div className={classes.Movie}>
                {movie ?
                    <div>
                        <Nav  movie={movieName} />
                        <MovieInfo movie={movie} directors={directors} />
                        <MovieBars time={movie.runtime} 
                        budget={movie.budget} revenue={movie.revenue}  />
                    </div>
                : null }
                {actors ? 
                    <div className={classes.Movie_grid}>
                        <ColsGrid header={'Actors'} >
                        {actors.map( (element, i) => (
                            <Actors key={i} actor={element} />
                        ))}
                        </ColsGrid>
                    </div>
                    : null }
                {!actors && !loading ? <h1>No Movie Found</h1> : null}
                {loading ? <Spinner /> : null}
            </div>
        );
    }
}

export default Movie;