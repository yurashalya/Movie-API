import React from 'react';
import FontAwesome from 'react-fontawesome';
import  { calcTime, convertMoney } from '../../../Configs/Converts';

import classes from  './MovieBars.module.css';


const MovieBars = ({ time, budget, revenue }) => (
    <div className={classes.Movie_bars}>
    <div className={classes.Movie_bars_content}>
      <div className={classes.Movie_bars_content_col}>
        <FontAwesome className={classes.fa_time} name="clock-o" size="2x" />
        <span className={classes.Movie_bars_info}>Running time: {calcTime(time)}</span>
      </div>
      <div className={classes.Movie_bars_content_col}>
        <FontAwesome className={classes.fa_budget} name="money" size="2x" />
        <span className={classes.Movie_bars_info}>Budget: {convertMoney(budget)}</span>
      </div>
      <div className={classes.Movie_bars_content_col}>
        <FontAwesome className={classes.fa_revenue} name="ticket" size="2x" />
        <span className={classes.Movie_bars_info}>Revenue: {convertMoney(revenue)}</span>
      </div>
    </div>
  </div>
)




export default MovieBars;