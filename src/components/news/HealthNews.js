import React, { useState, useEffect } from 'react';
import moment from 'moment';
import nextId, { setPrefix } from "react-id-generator";

import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import '../../style/News.css';

class HealthNews extends React.Component {
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
            NewsApi.getHealthNews()
                .then(({ data }) => this.setState({
                    articles: data.slice(0, 4)
                }))
                .catch((err) => console.error(err));
        } catch (e) {
            console.error(e);
        }
    }

    uniqueId = nextId();

    render() {
        const healthNews = this.state.articles;



        return (
            <div id={nextId('health-')}>
                {healthNews && healthNews.length > 0 && healthNews.map((article) =>
                    <div class="col-lg-6 card" id={nextId('healthChild-')}>
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

export default HealthNews;