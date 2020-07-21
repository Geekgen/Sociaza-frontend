import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useId } from "react-id-generator";
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
        
        <div className="news-block" key={useId('carouselItem')}>
        <div className="news-media" key={useId('carouselItemMedia')}>
            <img  src={props.urlToImage} alt="" key={useId('carouselItemMedia')}/>
            <div class="carousel-caption">
            <div className="boxgallery"></div>
            <div className="contentgallery">
                <h3 class="display-2">{props.title}</h3>
				
            </div>
            <button type="button" class="btn btn-outline-light btn-lg">View more</button>
            </div>
        </div>
       {/*  <div className="news-title" key={useId('carouselLink')}>
            <h2 className=" title-small" key={useId('carouselLink')}><a href={props.url} key={useId('carouselLink')}>View more</a></h2>
        </div> */}
        {/* <div className="news-des" key={useId('carouselItemTitle')}>{props.title}</div> */}
        {/* <div className="time-text"><strong>{}</strong></div> */}
        </div> 
        
        //(props.curTime - props.publishedAt) / (1000 * 60 * 60)
 );
}

export default NewsCarousel;