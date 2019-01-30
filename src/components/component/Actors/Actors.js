import React from 'react';
import { IMAGE_URL, POSTER } from '../../../Configs/Configs';
import classes from './Actors.module.css';

const Actors = (props) => {
    return ( 
        <div className={classes.Actors}>
            <img
            src={props.actor.profile_path ? `${IMAGE_URL}${POSTER}${props.actor.profile_path}` : '../../../assets/images/noimg.jpg'}
            alt="actorwatch"
            />
            <span className={classes.Actors_name}>{props.actor.name}</span>
            <span className={classes.Actors_character}>{props.actor.character}</span>
        </div>
    )
}
    

    



export default Actors;