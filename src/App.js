import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/component/Head/Head';
import Home from './components/Home/Home';
import NotFound from './components/component/NotFound/NotFound';
import Movie from './components/Movie/Movie'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment> 
          <Header />
          <Switch>
             <Route  path="/" component= {Home} exact />
             <Route path="/:movieId" component= {Movie} exact />
             <Route  component= {NotFound}  />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      // <div className="App">
      //     <Header />
      //     
      // </div>
    );
  }
}

export default App;
