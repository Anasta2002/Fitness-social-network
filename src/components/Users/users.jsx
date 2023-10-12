import React from 'react';
import classes from './users.module.css';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

        return (
            <div>
                <div className={classes.pagination_wrapper}>
                    <div className={classes.pagination}>
                        {pages.map(p => {
                            return <span key={p} className={props.currentPage === p ? classes.selected_page : classes.not_selected_page} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                        })}
                    </div>
                </div>
                {
                    props.users.map(u => <div key={u.id}>
                        <div className={classes.user}>
                            <div>
                                <NavLink to={'/content/' + `${u.id}`}>
                                    <img src={u.photos.small !== null ? u.photos.small : `https://unter-uns-fanclub.de/wp-content/uploads/2021/08/avatar-1577909_640-5-14.png`} className={classes.avatar} alt='image'/>
                                </NavLink>
                            </div>
                            {
                                u.followed ? 
                                <button disabled={props.followingInProgress.some(id  => id === u.id)} onClick={() => {
                                    props.unfollow(true, u.id)
                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id  => id === u.id)} onClick={() => {
                                    props.follow(true, u.id)
                                }}>Follow</button> 
                            }
                            {u.name}
                        </div>
                    </div>)
                }
            </div>
        )
}



export default Users;