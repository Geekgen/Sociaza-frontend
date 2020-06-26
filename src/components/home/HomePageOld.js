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
			                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			                </ol>
			                <div className="carousel-inner">
			                  <div className="carousel-item active" 
			                  style={{width: "1200px", height: "300px", background: "white"}}>
			                    <center>
			                    <img
			                      src={require(`../../assets/homepagecarousels/logo_fundobranco.png`)}
			                      width={300}
			                      height={300}
			                      alt="Logo"
			                    />
			                    </center>
			                    <div className="carousel-caption d-none d-md-block">
			                      {/* <h1
					                        className="display-3 landingPageHeader"
								                  text-warning
										                    style={{ color: "black" }}
												                    >
														                      Post a Service
																                      </h1> 
																		                      <p className="paragraph" style={{ color: "black" }}>
																				                        Click on the Get Started button below to post a service
																							                </p>

																									                 <Link className="link-button" to="/serviceform">
																											                   <button type="button" className="btn btn-lg">
																													                       Get Started
																															                         </button>
																																		                 </Link> */}
			                    </div>
			                  </div>
			                  {/* <div className="carousel-item"
					              style={{width: "1200px", height: "300px", background: "white"}}>
						                    <center>
								                  <img
										                  src={require(`../../assets/homepagecarousels/food2.png`)}
												                  width={300}
														                  height={300}
																                  alt="Leaves"
																		                />
																				              </center>
																					                    <div className="carousel-caption d-none d-md-block">
																							                    <h1 className="display-3 landingPageHeader" text-warning>
																									                      Book a Service
																											                      </h1>
																													                      <p>Click on the Get Started button below to book a service</p>

																															                      <Link className="link-button" to="/service?service=all">
																																	                        <button type="button" className="btn btn-lg">
																																				                    Get Started
																																						                      </button>
																																								                      </Link>
																																										                    </div> 
																																												                </div>*/}
			                </div>
			                <br />
			                <br />
			              </div>

			              {/* OUTDOOR SERVICES */}
			              <div className="container-fluid-padding">
			                <div className="row welcome text-center">
			                  <div className="col-12">
			                    <h1
			                      className="display-3 landingPageHeader"
			                      style={{ paddingTop: "60px", paddingBottom: "30px" }}
			                    >
			                      Brazuca Svenska Community
			                    </h1>
			                  </div>
			                  <hr></hr>
			                </div>
			              </div>
			              {/* CARDS */}
			              <div className="container-fluid" style={{ padding: "30px" }}>
			                <div className="row padding">
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/Cycling.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="pedals"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">Pedals</h4>
			                        <hr/>
			                        <Link
			                          className="link-button-homepage"
			                          to="/service?service=groupTraining"
			                        >
			                          <button type="button" className="btn homepage btn-lg">
			                            View more
			                          </button>
			                        </Link>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/hiking.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="SoccerOut"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">Hiking trails</h4>
			                        <hr />
			                        <Link className="link-button-homepage" to="/service?service=soccer">
			                          <button type="button" className="btn btn-lg">
			                            View more
			                          </button>
			                        </Link>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/food.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="yoga"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">Food &amp; Recipes</h4>
			                        <hr />
			                        <Link
			                          className="link-button-homepage"
			                          to="/service?service=Outdoor%20Yoga"
			                        >
			                          <button type="button" className="btn btn-lg">
			                            View more
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
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/games.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="group Training"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">
			                          Games
			                        </h4>
			                        <hr />
			                        <Link
			                          className="link-button-homepage"
			                          to="/service?service=groupTraining"
			                        >
			                          <button type="button" className="btn btn-lg">
			                            View more
			                          </button>
			                        </Link>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/turism.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="meditation"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">Turism tips</h4>
			                        <hr />
			                        <Link
			                          className="link-button-homepage"
			                          to="/service?service=meditation"
			                        >
			                          <button type="button" className="btn btn-lg">
			                           View more
			                          </button>
			                        </Link>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        class="card-img-top"
			                        src={require(`../../assets/homepagecards/news.jpg`)}
			                        width={300}
			                        height={200}
			                        alt="group-run"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title landingPageHeader">
			                          Brazil and the world
			                        </h4>
			                        <hr />
			                        <Link className="link-button-homepage" to="/service?service=groupRun">
			                          <button type="button" className="btn btn-lg">
			                            View more
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
