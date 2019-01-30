import React from 'react';
import  { IMAGE_URL, POSTERS_SIZE, BACK_SIZE } from '../../../Configs/Configs';
import FontAwesome from 'react-fontawesome';
import MovieWatch from '../MovieWatch/MovieWatch';

import classes from './MovieInfo.module.css';


const MovieInfo = (props) => (
    <div className={classes.Movie_info}
    style={{
      background: props.movie.backdrop_path ? `url('${IMAGE_URL}${BACK_SIZE}${props.movie.backdrop_path}')` : '#000'
    }}
  >
    <div className={classes.Movie_info_content}>
      <div className={classes.Movie_info_watch}>
        <MovieWatch
          image={props.movie.poster_path ? `${IMAGE_URL}${POSTERS_SIZE}${props.movie.poster_path}` : '../../../assets/images/noimg.jpg'}
          clicked={false}
        />
      </div>
      <div className={classes.Movie_info_text}>
        <h1>{props.movie.title}</h1>
        <h3>PLOT</h3>
        <p>{props.movie.overview}</p>
        <h3>IMDB RATING</h3>
        <div className={classes.Rating}>
          <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
          <p className={classes.Score}>{props.movie.vote_average}</p>
        </div>
        {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
        {props.directors.map( (element, i) => {
          return <p key={i} className={classes.Director}>{element.name}</p>
        })}
      </div>
      <FontAwesome className={classes.fa_film} name="film" size="5x" />
    </div>
  </div>
);


export default MovieInfo;
