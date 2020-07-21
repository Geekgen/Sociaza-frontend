import React, { useState, useEffect } from 'react';
import nextId, { setPrefix } from "react-id-generator";
import moment from 'moment';

import NewsApi from '../../api/NewsApi';

import '../../style/News.css';

class SwedenNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            source: [],
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: '',
            publishedAt: '',
            content: '',
            curTime: new Date().toLocaleString()
        };

    }

    async componentDidMount() {
        try {
            NewsApi.getSENews()
                .then(({ data }) => this.setState({
                    articles: data.slice(0, 4)
                }))
                .catch((err) => console.error(err));
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        const newsSE = this.state.articles;

        return (
            <div id={nextId('sport-')}>
                <ul class="nav nav-tabs" role="tablist" id="myTab" key="myTab">
                    <li class="nav-item" key={nextId()}> <a class="nav-link active" data-toggle="tab" href="#home" role="tab" key={nextId()}>Sweden</a> </li>
                    {/*   <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Top</a> </li>
                  <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Featured</a> </li> */}
                </ul>

                {/* <!-- Tab panes --> */}
                <div class="tab-content sidebar-tabing" id="nav-tabContent" key={nextId()}>
                    <div class="tab-pane active" id="home" role="tabpanel" key={nextId()}>
                        {newsSE && newsSE.length > 0 && newsSE.map((article) =>
                            <div class="media" key={nextId()}>
                                <a href={article.url} key={nextId()}> <img class="d-flex mr-3" src={article.urlToImage} alt="" key={nextId()} /></a>
                                <div class="media-body" key={nextId()}>
                                    <div class="news-title" key={nextId()}>
                                        <h2 class="title-small" key={nextId()}><a href={article.url} key={nextId()}>{article.title}</a></h2>
                                    </div>
                                    <div class="news-auther" key={nextId()}><span class="time" key={nextId()}>{moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</span></div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    };
}

export default SwedenNews;