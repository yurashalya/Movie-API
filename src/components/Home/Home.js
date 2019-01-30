import React, {Component} from 'react';
import classes from './Home.module.css';

import Hero from '../component/Hero/Hero';
import Search from '../component/Search/Search';
import ColsGrid from '../component/ColsGrid/ColsGrid';
import MovieWatch from '../component/MovieWatch/MovieWatch';
import LoaderBtn from '../component/LoaderBtn/LoaderBtn';
import Spinner from '../component/Spinner/Spinner';

import { API_URL, API_KEY, IMAGE_URL, POSTERS_SIZE, BACK_SIZE } from '../../Configs/Configs';
import notImage from '../../assets/images/noimg.jpg';


class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        search: ''
    }

    componentDidMount () {
        this.setState({loading: true});
        const point =  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(point);
    }

    loadingItems = () => {
        let point = '';
        this.setState({loading: true});

        if(this.state.search === '') {
            point = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            point = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }

        this.fetchItems(point);
    }

    searchItems = (searchTerm) => {
        let point = '';
        this.setState({
          movies: [],
          loading: true,
          search: ''
        })

        if (searchTerm === "") {
          point = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
          point = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(point);
      }

    fetchItems = (point) => {
        fetch(point)
        .then (result => result.json())
        .then (result => {
            this.setState({
                movies: [...this.state.movies, ...result.results],
                heroImage: this.state.heroImage ||  result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
            })
        })
    }

    render() {
         // ES6 Destructuring the state
        const { movies, heroImage, loading, currentPage, totalPages, searchItems } = this.state;

        return (
            <div className={classes.Home}>
                {heroImage ?
                    <div>
                        <Hero
                            image={`${IMAGE_URL}${BACK_SIZE}${heroImage.backdrop_path}`}
                            title={heroImage.original_title}
                            text={heroImage.overview}
                        />
                        <Search callback={this.searchItems} />
                    </div> : null }

                <div className={classes.Home_Grid} >
                    <ColsGrid 
                        header={searchItems ? 'Search Result' : 'Popular Movies'}
                        loading={loading}
                    >
                    {movies.map((element, i) => {
                        return <MovieWatch key={i} clicked={true} 
                            image= {element.poster_path ? `${IMAGE_URL}${POSTERS_SIZE}${element.poster_path}` : notImage}
                            movieId = {element.id}
                            movie = {element.original_title}
                            />
                        })}
                    </ColsGrid>
                    {loading ? <Spinner /> : null }
                    {(currentPage <= totalPages && !loading) ?
                        <LoaderBtn text="Load More" onClick={this.loadingItems} />
                        : null
                    }
                </div>
                
                
            </div>
        );
    }
}


export default Home;