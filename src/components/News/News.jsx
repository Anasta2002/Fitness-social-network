import React from 'react';
import classes from './News.module.css';

const News = () => {
    return (
        <div className={classes.news_page}>
            <div className={classes.news_card}>
                <img src='https://i.ytimg.com/vi/HJX42wyJy0A/maxresdefault.jpg'/>
                <div className={classes.description}>
                    <a href='https://www.health.harvard.edu/heart-health/11-foods-that-lower-cholesterol'>11 foods that lower cholesterol</a>
                </div>
            </div>
            <div className={classes.news_card}>
                <img src='https://chernihiv.today/wp-content/uploads/2023/03/sovety-210628-health-fitness-food-lunch-boxes-set-455198938-.jpg'/>
                <div className={classes.description}>
                    <a href='https://www.health.harvard.edu/staying-healthy/a-combination-of-healthy-diets-linked-with-longer-life'>A combination of healthy diets linked with longer life</a>
                </div>
            </div>
            <div className={classes.news_card}>
                <img src='https://img1.runnersworld.de/image-bigMobileWide-2478e073-35702.jpg'/>
                <div className={classes.description}>
                    <a href='https://www.health.harvard.edu/heart-health/salty-diet-linked-to-narrowed-arteries-in-the-heart-and-neck'>Salty diet linked to narrowed arteries in the heart and neck</a>
                </div>
            </div>
            <div className={classes.news_card}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf_2MuPyi-ANdaiI_Kd8Zr1JXiD4jWxD2PzYo7hnqjj6Lo7z9R1BxK1bSsbAzJT8i-Q&usqp=CAU'/>
                <div className={classes.description}>
                    <a href='https://www.health.harvard.edu/heart-health/cannabis-a-cardiovascular-concern'>Cannabis: A cardiovascular concern?</a>
                </div>
            </div>
        </div>
    );
}
export default News;