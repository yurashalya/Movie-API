import React from 'react';
import classes from './Hero.module.css';


const Hero = (props) => {
    return (
        <div className={classes.Hero}
        style={{
            background:
              `linear-gradient(to bottom, rgba(0,0,0,0)
              39%,rgba(0,0,0,0)
              41%,rgba(0,0,0,0.65)
              100%),
              url('${props.image}'), #1c1c1c`
          }}
        >
            <div className={classes.Hero_content}> 
                <div className={classes.Hero_text}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}



export default Hero;