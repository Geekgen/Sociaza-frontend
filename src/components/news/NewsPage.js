import React from 'react';


import NewsCarousel from './NewsCarousel';
import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import '../../style/NewsTabs.css';

import '../../style/News.css'





class NewsPage extends React.Component {
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

     /*  NewsApi.getEntertainmentNews
        .then(({ data }) => this.setState({
          entertaimentArticles: data.slice(0, 4)
        }))
        .catch((err) => console.error(err)); */

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




  render() {

    const newsGeneral1 = this.state.articles1;
    const newsGeneral2 = this.state.articles2;
    const newsGeneral3 = this.state.articles3;
    const techNews = this.state.techArticles;
    const healthNews = this.state.healthArticles;
    const sportNews = this.state.sportArticles;
    const entertaimentNews = this.state.entertaimentArticles;
    const swedenNews = this.state.swedenArticles;

    const settings = {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      className: 'carousel slide',
      dots: true
    };

    return (

      <div class="container pt-3">
        <section class="banner-sec ">
          <div class="container ">
            <div class="row">

              <div class="col-md-6 top-slider">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                  {/* <!-- Indicators --> */}
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  </ol>

                  {/* <!-- Wrapper for slides --> */}
                  <div class="carousel-inner" role="listbox">

                    {newsGeneral1 && newsGeneral1.map((article, index) => (
                      <div class={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                        <NewsCarousel key={index}
                          title={article.title}
                          urlToImage={article.urlToImage}
                          publishedDate={article.publishedAt}
                          summary={article.description}
                        />
                      </div>
                    ))}



                  </div>
                </div>
              </div>
              <div class="col-md-3">
                {newsGeneral2 && newsGeneral2.length > 0 && newsGeneral2.map((article, index) => (
                  <NewsCard key={index+3}
                    title={article.title}
                    url={article.url}
                    publishedDate={article.publishedAt}
                    summary={article.description}
                    urlToImage={article.urlToImage}
                    type="General" />
                ))}

              </div>
              <div class="col-md-3">
                {newsGeneral3 && newsGeneral3.length > 0 && newsGeneral3.map((article, index) => (
                  <NewsCard key={index+6}
                    title={article.title}
                    url={article.url}
                    publishedDate={article.publishedAt}
                    summary={article.description}
                    urlToImage={article.urlToImage}
                    type="General" />
                ))}

              </div>
            </div>
          </div>
        </section>
        <section class="section-01">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12">
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
                        <div>
                          {techNews && techNews.length > 0 && techNews.map((article, index) => (
                            <div class="col-lg-6 card" id={index+10}>
                              <NewsCard key={index+10}
                                title={article.title}
                                url={article.url}
                                publishedDate={article.publishedAt}
                                summary={article.description}
                                urlToImage={article.urlToImage}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="two" >
                    <div id="one-panel">
                        <div>
                          {healthNews && healthNews.length > 0 && healthNews.map((article, index) => (
                            <div class="col-lg-6 card" id={index+15}>
                              <NewsCard key={index+15}
                                title={article.title}
                                url={article.url}
                                publishedDate={article.publishedAt}
                                summary={article.description}
                                urlToImage={article.urlToImage}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="three" id="three-panel">
                    <div id="one-panel">
                        <div>
                          {sportNews && sportNews.length > 0 && sportNews.map((article, index) => (
                            <div class="col-lg-6 card" id={index+20}>
                              <NewsCard key={index+20}
                                title={article.title}
                                url={article.url}
                                publishedDate={article.publishedAt}
                                summary={article.description}
                                urlToImage={article.urlToImage}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="four" id="four-panel">
                    <div id="one-panel">
                        <div>
                          {entertaimentNews && entertaimentNews.length > 0 && entertaimentNews.map((article, index) => (
                            <div class="col-lg-6 card" id={index+25}>
                              <NewsCard key={index+25}
                                title={article.title}
                                url={article.url}
                                publishedDate={article.publishedAt}
                                summary={article.description}
                                urlToImage={article.urlToImage}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs >

              </div>
              <aside class="col-lg-4 side-bar col-md-12">
                <ul class="nav nav-tabs" role="tablist" id="myTab">
                  <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Sweden</a> </li>
                  {/*   <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Top</a> </li>
                  <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Featured</a> </li> */}
                </ul>

                {/* <!-- Tab panes --> */}
                <div class="tab-content sidebar-tabing" id="nav-tabContent">
                  <div class="tab-pane active" id="home" role="tabpanel">
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/sport2.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/lifestyle.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Obamacare Appears to Be Making People Healthier</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/food1.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="profile" role="tabpanel">
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/movie.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/auto.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">‘S.N.L.’ to Lose Two Longtime Cast Members</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/business1.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Obamacare Appears to Be Making People Healthier</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="messages" role="tabpanel">
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/food.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/business.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">‘S.N.L.’ to Lose Two Longtime Cast Members</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                    <div class="media"> <a href="#"> <img class="d-flex mr-3" src="http://grafreez.com/wp-content/temp_demos/river/img/sport1.jpg" alt="Generic placeholder image" /></a>
                      <div class="media-body">
                        <div class="news-title">
                          <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
                        </div>
                        <div class="news-auther"><span class="time">1h ago</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default NewsPage; 
