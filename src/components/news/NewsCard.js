import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useId } from "react-id-generator";

import '../../style/News.css';

function NewsCard(props) {


    const [source, setSource] = React.useState();
    const [title, setTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [url, setUrl] = React.useState();
    const [urlToImage, setUrlToImage] = React.useState();
    const [publishedAt, setPublishedAt] = React.useState();
    const [content, setContent] = React.useState();
    const [description, setDescription] = React.useState();
    const [type, setType] = React.useState();

    const uniqueId = useId();
   
    return (
        <div className="card" key={uniqueId}>
            <img className="img-thumbnail mh-50" src={props.urlToImage} alt="" key={useId()}/>
            <div className="card-img-overlay" key={useId()}> <span className="badge badge-pill badge-danger" key={useId()}>{props.type}</span> </div>
            <div className="card-body" key={useId()}>
                <div className="news-title" key={useId()}>
                    <h2 className=" title-small" key={useId()}><a href={props.url} key={useId()}>{props.title}</a></h2>
                </div>
                <p className="card-text" key={useId()}><small className="text-time" key={useId()}><em key={useId()}>{moment(props.publishedAt,  "YYYYMMDD HH:mm:ss").fromNow()}</em> &mdash; {moment(props.publishedAt).format('lll')}  </small></p>
            </div>
        </div>
    );
}

export default NewsCard;