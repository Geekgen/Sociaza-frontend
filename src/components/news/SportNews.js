import React, { useState, useEffect } from 'react';
import nextId, { setPrefix } from "react-id-generator";

import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import '../../style/News.css';

class SportNews extends React.Component {
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
            NewsApi.getSportNews()
                .then(({ data }) => this.setState({
                    sportArticles: data.slice(0, 4)
                }))
                .catch((err) => console.error(err));
        } catch (e) {
            console.error(e);
        }
    }

        
    render() {
        const sportNews = this.state.sportArticles;
        
        return (
            <div id={nextId('sport-')}>
                {sportNews && sportNews.length > 0 && sportNews.map((article) =>
                    <div class="col-lg-6 card" id={nextId('sportChild-')}>
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

export default SportNews;