import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import classes from './Search.module.css';


class Search extends Component {
    state = {
        value: ''
    }

    timeout = null;

    searchHandle = (event) => {
        const { callback } = this.props;
        const { value } = this.state;

        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
          callback(value);
        }, 500);
      }

    render () {
        return (
            <div className={classes.Search}>
                <div className={classes.Search_content}>
                    <FontAwesome className={classes.fa_search} name="search" size="2x" />
                    <input
                        type="text"
                        className={classes.Search_input}
                        placeholder="Search"
                        onChange={this.searchHandle}
                        value={this.state.value}
                    />
                </div>
            </div>
        );
    } 
}


export default Search;
