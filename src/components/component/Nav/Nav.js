import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => (
    <div className={classes.Navigation}>
      <div className={classes.Navigation_content}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  )


export default Nav;