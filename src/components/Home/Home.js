import React, {Component} from 'react';
import classes from './Home.module.css';

import Hero from '../component/Hero/Hero';
import Search from '../component/Search/Search';
import ColsGrid from '../component/ColsGrid/ColsGrid';
import MovieWatch from '../component/MovieWatch/MovieWatch';
import LoaderBtn from '../component/LoaderBtn/LoaderBtn';
import Spinner from '../component/Spinner/Spinner';


class Home extends Component {
    state = {

    }

    render() {
        return (
            <div className={classes.Home}>
                <Hero />
                <Search />
                <ColsGrid />
                <Spinner />
                <LoaderBtn />
            </div>
        );
    }
}


export default Home;