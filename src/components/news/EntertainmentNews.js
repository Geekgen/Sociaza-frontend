import React, { useState, useEffect } from 'react';
import moment from 'moment';
import nextId, { setPrefix } from "react-id-generator";

import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import '../../style/News.css';

class EntertainmentNews extends React.Component {
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
            NewsApi.getEntertainmentNews()
                .then(({ data }) => this.setState({
                    articles: data.slice(0, 4)
                }))
                .catch((err) => console.error(err));
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        const entertainmentNews = this.state.articles;



        return (
            <div id={nextId('entert-')}>
                {entertainmentNews && entertainmentNews.length > 0 && entertainmentNews.map((article, index) =>
                    <div class="col-lg-6 card"  id={nextId('entertChild-')}>
                        <NewsCard 
                            title={article.title}
                            url={article.url}
                            publishedAt={article.publishedAt}
                            summary={article.description}
                            urlToImage={article.urlToImage}
                        />
                    </div>
                )}
            </div>
        )
    };
}

export default EntertainmentNews;