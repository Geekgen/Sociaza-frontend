import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              
                <img 
                  src={require(`../../assets/images/Sociaza_banner.png`)}
                  alt="Logo"
                />
             
              <div className="carousel-caption ">
                <div className="display-3 landingPageHeader"
                  ></div>

                <Link className="link-button" to="/serviceform">
                  <button type="button" className="btn btn-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item"
              >
              
                <img
                  src={require(`../../assets/homepagecarousels/bicycle.png`)}
                  alt="Cycling"
                />
             
              <div className="carousel-caption d-none d-md-block">
                <div className="display-3 landingPageHeader"
                  ></div>

                <Link className="link-button" to="/service?service=all">
                  <button type="button" className="btn btn-lg">
                    Let's ride
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item"
              >
             
                <img
                  src={require(`../../assets/homepagecarousels/food.png`)}
                  alt="Food"
                />
             
              <div className="carousel-caption d-none d-md-block">
                <div className="display-3 landingPageHeader"
                  ></div>

                <Link className="link-button" to="/food">
                  <button type="button" className="btn btn-lg">
                    Let's cook
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item"
              >
             
                <img
                  src={require(`../../assets/homepagecarousels/game.png`)}
                  alt="Game"
                />
            
              <div className="carousel-caption d-none d-md-block">
                <div className="display-3 landingPageHeader"
                  ></div>

                <Link className="link-button" to="/games">
                  <button type="button" className="btn btn-lg">
                    Let's play
                  </button>
                </Link>
              </div>
            </div>
            
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <br />
          <br />
        </div>

        {/* OUTDOOR SERVICES */}
        <div className="container-fluid-padding">
          <div className="row welcome text-center">
            <div className="col-xs-12 col-sm-6 col-md-12">
              <h1 className="landingPageHeader">
                Brazuca Svenska Community
              </h1>
            </div>
            <hr></hr>
          </div>
        </div>
        {/* CARDS */}
        <div className="container-fluid" style={{ padding: "30px" }}>
          <div className="row padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  className="card-img-top"
                  src={require(`../../assets/homepagecards/Cycling.jpg`)}
                  alt="pedals"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4Pedals">Pedals</h4>
                  <hr />
                  <Link
                    className="link-button-homepage"
                    to="/service?service=pedals"
                  >
                    <button type="button" className="btn homepage" id="btnPedals" >
                    Pedals
                    </button>
                    <button type="button" className="btn homepage" id="btnMPedals" >
                    View more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/homepagecards/hiking.jpg`)}
                  alt="SoccerOut"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4Hiking">Hiking trails</h4>
                  <hr />
                  <Link className="link-button-homepage" to="/service?service=hiking">
                    <button type="button" className="btn homepage" id="btnMHiking">
                      View more
                    </button>
                    <button type="button" className="btn homepage" id="btnHiking">
                      Hiking trails
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/homepagecards/food.jpg`)}
                  alt="yoga"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4Food">Food &amp; Recipes</h4>
                  <hr />
                  <Link
                    className="link-button-homepage"
                    to="/food"
                  >
                    <button type="button" className="btn homepage" id="btnMFood">
                      View more
                    </button>
                    <button type="button" className="btn homepage" id="btnFood">
                    Food &amp; Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/*CARDS SENOND ROW*/}
          <div className="row padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/homepagecards/games.jpg`)}
                  alt="group Training"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4Games">
                    Games
                  </h4>
                  <hr />
                  <Link
                    className="link-button-homepage"
                    to="/games"
                  >
                    <button type="button" className="btn homepage" id="btnMGames">
                      View more
                    </button>
                    <button type="button" className="btn homepage" id="btnGames">
                      Games
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/homepagecards/turism.jpg`)}
                  alt="turism"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4Tourism">Tourism tips</h4>
                  <hr />
                  <Link
                    className="link-button-homepage"
                    to="/tourism"
                  >
                    <button type="button" className="btn homepage" id="btnMTourism">
                      View more
                    </button>
                    <button type="button" className="btn homepage"  id="btnTourism">
                    Tourism tips
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/homepagecards/news.jpg`)}
                  alt="group-run"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader" id="h4News">
                    Brazil and the world
                  </h4>
                  <hr />
                  <Link className="link-button-homepage" to="/news">
                    <button type="button" className="btn homepage" id="btnMNews">
                      View more
                    </button>
                    <button type="button" className="btn homepage" id="btnNews">
                    Brazil and the world
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
