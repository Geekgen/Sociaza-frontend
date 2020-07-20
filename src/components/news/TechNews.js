import React, { useState, useEffect } from 'react';
import moment from 'moment';
import nextId, { useId, setPrefix } from "react-id-generator";

import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import '../../style/News.css';

class TechNews extends React.Component {
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
            NewsApi.getTechNews()
                .then(({ data }) => this.setState({
                    articles: data.slice(0, 4)
                }))
                .catch((err) => console.error(err));
        } catch (e) {
            console.error(e);
        }
    }

    // techId = nextId('tech-');
    


    render() {
        const techNews = this.state.articles;


        return (
            <div id={nextId('tech-')}>
                {techNews && techNews.length > 0 && techNews.map((article) =>
                    <div className="col-lg-6 card" id={nextId('techChild-')}>
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

export default TechNews;