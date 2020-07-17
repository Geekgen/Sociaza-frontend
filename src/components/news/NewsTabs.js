import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import NewsApi from '../../api/NewsApi';

import '../../style/NewsTabs.css';

function NewsTabs(props) {

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
          /* const response = await NewsApi.getAllNews();
          const news = response.data; */
          NewsApi.getAllNews()
            .then(({ data }) => this.setState({
              articles1: data.slice(0, 3),
              articles2: data.slice(3, 5),
              articles3: data.slice(5, 7)
            }))
            .catch((err) => console.error(err));
    
          NewsApi.getTechNews()
            .then(({ data }) => this.setState({
              techArticles: data.slice(0, 4)
            }))
            .catch((err) => console.error(err));
    
          NewsApi.getHealthNews()
            .then(({ data }) => this.setState({
             healthArticles: data.slice(0, 4)
            }))
            .catch((err) => console.error(err));
    
          NewsApi.getEntertainmentNews
            .then(({ data }) => this.setState({
              entertaimentArticles: data.slice(0, 4)
            }))
            .catch((err) => console.error(err));
    
            NewsApi.getSportNews
            .then(({ data }) => this.setState({
             sportArticles: data.slice(0, 4)
            }))
            .catch((err) => console.error(err));
    
            NewsApi.getSENews
            .then(({ data }) => this.setState({
              swedenArticles: data.slice(0, 4)
            }))
            .catch((err) => console.error(err));
    
        } catch (e) {
          console.error(e);
        }
      }
    

    const [source, setSource] = React.useState();
    const [title, setTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [url, setUrl] = React.useState();
    const [urlToImage, setUrlToImage] = React.useState();
    const [publishedAt, setPublishedAt] = React.useState();
    const [content, setContent] = React.useState();
    const [description, setDescription] = React.useState();
    const [curTime, setcurTime] = React.useState();

    return (
        <Tabs className="warpper"
            defaultTab="one"
            onChange={(tabId) => { console.log(tabId) }}
        >
            <TabList class="tabs">
                <Tab tabFor="one" className="tab" id="one-tab" >Tech</Tab>
                <Tab tabFor="two" className="tab" id="two-tab" >Health</Tab>
                <Tab tabFor="three" className="tab" id="three-tab" >Sports</Tab>
                <Tab tabFor="four" className="tab" id="four-tab" >Entertainment</Tab>
            </TabList>
            <div class="panels">
                <TabPanel tabId="one" >
                    <div id="one-panel">
                       
                    </div>

                </TabPanel>
                <TabPanel tabId="two" >
                    <div id="two-panel" >
                        <div class="panel-title">Health</div>
                        <p>Health Health Health Health Health Health Health Health Health Health Health Health Health</p>
                    </div>
                </TabPanel>
                <TabPanel tabId="three" id="three-panel">
                    <div >
                        <div class="panel-title">Sports</div>
                        <p>Sports Sports Sports Sports Sports Sports Sports</p>
                    </div>
                </TabPanel>
                <TabPanel tabId="four" id="four-panel">
                    <div  >
                        <div class="panel-title">Entertainment</div>
                        <p>Entertainment Entertainment Entertainment Entertainment </p>
                    </div>
                </TabPanel>
            </div>
        </Tabs >
    );
}
export default NewsTabs;