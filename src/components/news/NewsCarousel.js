import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../../style/News.css';

function NewsCarousel(props) {


    const [source, setSource] = React.useState();
    const [title, setTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [url, setUrl] = React.useState();
    const [urlToImage, setUrlToImage] = React.useState();
    const [publishedAt, setPublishedAt] = React.useState();
    const [content, setContent] = React.useState();
    const [description, setDescription] = React.useState();
    const [curTime, setcurTime] = React.useState();

   // console.log(props)


    return (
        
        <div class="news-block">
        <div class="news-media"><img class="img-fluid" src={props.urlToImage} alt="" /></div>
        <div class="news-title">
            <h2 class=" title-small"><a href="#">{}</a></h2>
        </div>
        <div class="news-des">{props.title}</div>
        <div class="time-text"><strong>{}</strong></div>
        </div> 
        
        //(props.curTime - props.publishedAt) / (1000 * 60 * 60)
 );
}

export default NewsCarousel;