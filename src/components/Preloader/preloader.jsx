import React from 'react';
import classes from './preloader.module.css';

let Preloader = () => {
    return (
        <div className={classes.preloader_wrapper}>
            <img className={classes.preloader} src='https://media.tenor.com/YtAOA9y7VG0AAAAM/loading.gif'/>
        </div> 
    )
}



export default Preloader;