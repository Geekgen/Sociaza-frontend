import React from 'react';
import nextId, { setPrefix } from 'react-id-generator'

import NewsCarousel from './NewsCarousel';
import NewsApi from '../../api/NewsApi';
import NewsCard from './NewsCard';
import SwedenNews from './SwedenNews';
import NewsTabs from './NewsTabs';


import '../../style/NewsTabs.css';
import '../../style/News.css'






class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
    setPrefix("news-");
  }



  async componentDidMount() {
    try {
      /* const response = await NewsApi.getAllNews();
      const news = response.data; */
      NewsApi.getAllNews()
        .then(({ data }) => this.setState({
          articles1: data.slice(0, 3),
          articles2: data.slice(3, 5),
          articles3: data.slice(5, 7),
          isLoaded: true
        }))
        .catch((err) => console.error(err));

    } catch (e) {
      console.error(e);
    }
  }




  render() {
    if (this.state.isLoaded === false) {
      return (
        <div className="container d-flex justify-content-center m-5" key={nextId()}>
          <div className="row  d-flex justify-content-center" key={nextId()} >
         
          <div className="container d-flex justify-content-center m-5" key={nextId()} >

          <div class="loader">Loading...</div>

          </div>
          <h2 class="text-center">Loading</h2>
          
          </div>
        </div>

      )
    } else {


      const newsGeneral1 = this.state.articles1;
      const newsGeneral2 = this.state.articles2;
      const newsGeneral3 = this.state.articles3;


      const settings = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        className: 'carousel slide',
        dots: true
      };

      return (

        <div className="container pt-3" key={nextId()}>
          <section className="banner-sec" key={nextId()}>
            <div className="container" key={nextId()}>
              <div className="row" key={nextId()}>

                <div className="col-md-12 top-slider" key={nextId()}>
                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" key={nextId()}>
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators" key={nextId()}>
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active" key={nextId()}></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1" key={nextId()}></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2" key={nextId()}></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner" role="listbox" key="carousel-inner">

                      {newsGeneral1 && newsGeneral1.map((article, index) => (
                        <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={nextId()}>
                          <NewsCarousel
                            title={article.title}
                            urlToImage={article.urlToImage}
                            publishedDate={article.publishedAt}
                            summary={article.description}
                          />
                          <br />
                        </div>
                      ))}



                    </div>
                  </div>
                </div>
              </div>
              <div className="row" key={nextId()}>
                <div className="col-md-6" key={nextId()}>
                  {newsGeneral2 && newsGeneral2.length > 0 && newsGeneral2.map((article) => (
                    <NewsCard
                      title={article.title}
                      url={article.url}
                      publishedAt={article.publishedAt}
                      summary={article.description}
                      urlToImage={article.urlToImage}
                      type="General" />
                  ))}

                </div>
                <div className="col-md-6" key={nextId()}>
                  {newsGeneral3 && newsGeneral3.length > 0 && newsGeneral3.map((article) => (
                    <NewsCard
                      title={article.title}
                      url={article.url}
                      publishedAt={article.publishedAt}
                      summary={article.description}
                      urlToImage={article.urlToImage}
                      type="General" />
                  ))}

                </div>
              </div>
            </div>
          </section>
          <section className="section-01" key={nextId()}>
            <div className="container" key={nextId()}>
              <div className="row" key={nextId()}>
                <div className="col-lg-8 col-md-12" key={nextId()}>
                  <NewsTabs />

                </div>
                <aside className="col-lg-4 side-bar col-md-12" key="aside">
                  <SwedenNews />

                </aside>
              </div>
            </div>
          </section>

        </div>

      );
    }
  }
}

export default NewsPage; 
