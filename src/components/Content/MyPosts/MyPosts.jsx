import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} number_of_likes={p.number_of_likes} key={p.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div className={classes.my_post}>
            <h3>Just put some notes here to share your expierence</h3>
            <div className={classes.adding_block}>
                <textarea className={classes.textarea} ref={newPostElement} onChange={ onPostChange } value={props.newPostText} placeholder='Type new post...'/>
                <button className={classes.btn} onClick={ onAddPost }> Add your comment</button>
            </div>
            { postsElements }
        </div>
    );
}
export default MyPosts;