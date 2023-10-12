import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if (!props.profile) {
        <Preloader />
    }

    return (
        <>
        <ProfileStatus status={'Hello my friends!'} />
            {/* <div className={classes.content}>
                <img src='https://scholarlyoa.com/wp-content/uploads/2020/11/maintaining-a-healthy-lifestyle-640x360.jpeg' alt='' className={classes.content_img}/>
            </div> */}
            <div className={classes.description_block}>
                {/* <img src={props.profile.photos} alt='Users photo'/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div> */}

                ava + description will be here
            </div>
        </>
    )
}
export default ProfileInfo;