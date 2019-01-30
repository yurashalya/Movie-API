import React from 'react';
import PropTypes from 'prop-types';
import classes from './ColsGrid.module.css';


const ColsGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map( (element, i) => (
          <div key={i} className={classes.Grid_element}>
            {element}
          </div>
        ))
        return gridElements;
      }

    return (
        <div className={classes.Grid}>
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className={classes.Grid_content}>
                {renderElements()}
            </div>
        </div>
    );
}

ColsGrid.propTypes = {
    header: PropTypes.string,
    loading: PropTypes.bool
}


export default ColsGrid;