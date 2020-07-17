import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

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



    return (
        <div className="card">
            <img className="img-fluid" src={props.urlToImage} alt="" />
            <div className="card-img-overlay"> <span className="badge badge-pill badge-danger">{props.type}</span> </div>
            <div className="card-body">
                <div className="news-title">
                    <h2 className=" title-small"><a href="#">{props.title}</a></h2>
                </div>
                <p className="card-text"><small className="text-time"><em>{moment(props.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</em></small></p>
            </div>
        </div>
    );
}

export default NewsCard;