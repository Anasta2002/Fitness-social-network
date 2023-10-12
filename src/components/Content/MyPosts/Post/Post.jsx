import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ606D_jw909DgJDZ0ISA1VhMRHlejwu6YyFQ&usqp=CAU' alt=''/>
                {props.message}
            <span className={classes.number_of_likes}>{props.number_of_likes} </span>likes &#x1F5A4;
        </div>
    );
}
export default Post;