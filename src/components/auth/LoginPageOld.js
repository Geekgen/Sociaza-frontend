import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import Footer from "../layout/Footer";

class LoginPage extends Component {
	  async login(loginData) {
		      const loginSuccess = await Auth.login(loginData);
		      if (!loginSuccess) {
			            alert("Invalid credentials");
			          }
		    }

	  async register(registrationData) {
		      const registerSuccess = await Auth.register(registrationData);
		      if (!registerSuccess) {
			            alert("Couldn't register check credentials and try again");
			          }
		      window.location.reload();
		    }

	  render() {
		      return (
			            <div className="wrapper-login bg-light">
			              {/* MODAL TO DISPLAY LOGIN FORM */}
			              <div className="modal" id="login">
			                <div className="modal-dialog">
			                  <div className="modal-content">
			                    <div className="modal-header">
			                      <button className="close" data-dismiss="modal">
			                        &times;
			                      </button>
			                    </div>
			                    <div className="modal-body">
			                      <div className="col-12">
			                        <LoginForm onSubmit={this.login} />
			                      </div>
			                    </div>
			                    <div className="modal-footer">
			                      <button
			                        type="button"
			                        className="btn btn-danger"
			                        data-dismiss="modal"
			                      >
			                        Close
			                      </button>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              {/* MODAL TO DISPLAY SIGNUP FORM */}
			              <div className="modal" id="sign-up">
			                <div className="modal-dialog">
			                  <div className="modal-content">
			                    <div className="modal-header">
			                      <button className="close" data-dismiss="modal">
			                        &times;
			                      </button>
			                    </div>
			                    <div className="modal-body">
			                      <div className="col-12 mt-4">
			                        <RegisterForm onSubmit={this.register} />
			                      </div>
			                    </div>
			                    <div className="modal-footer">
			                      <button
			                        type="button"
			                        className="btn btn-danger"
			                        data-dismiss="modal"
			                      >
			                        Close
			                      </button>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              {/* NAVBAR*/}
			              <nav className="navbar navbar-expand-lg navbar-light bg-sedondary shadowNavbar">
			                <a className="navbar-brand" href="#">
			                  <img
			                    src={require(`../../assets/ico.png`)}
			                    width={50}
			                    height={50}
			                    alt="Logo"
			                  />
			                </a>
			                {/* NAVBAR TOGGLE BUTTON ON SMALL SCREENS */}
			                <button
			                  className="navbar-toggler"
			                  type="button"
			                  data-toggle="collapse"
			                  data-target="#navbarSupportedContent"
			                >
			                  <span className="navbar-toggler-icon"></span>
			                </button>

			                <div className="collapse navbar-collapse" id="navbarSupportedContent">
			                  <ul className="navbar-nav ml-auto">
			                    <li className="nav-item active">
			                      <button
			                        type="button"
			                        className="btn"
			                        data-toggle="modal"
			                        data-target="#login"
			                      >
			                        Login
			                      </button>
			                    </li>
			                    <li className="nav-item">
			                      <button
			                        type="button"
			                        className="btn"
			                        data-toggle="modal"
			                        data-target="#sign-up"
			                      >
			                        Sign up
			                      </button>
			                    </li>
			                  </ul>
			                </div>
			              </nav>

			              <br />
			              <br />
			              {/* CAROUSELS 
				              <div className="container mt-2">
					                <div
							            id="carouselExampleIndicators"
								                className="carousel slide"
										            data-ride="carousel"
											              >
												                  <ol className="carousel-indicators">
														                <li
																                data-target="#carouselExampleIndicators"
																		                data-slide-to="0"
																				                className="active"
																						              ></li>
																							                    <li
																									                    data-target="#carouselExampleIndicators"
																											                    data-slide-to="1"
																													                  ></li>
																															                <li
																																	                data-target="#carouselExampleIndicators"
																																			                data-slide-to="2"
																																					              ></li>
																																						                  </ol>

																																								              <div className="carousel-inner">
																																									                    <div className="carousel-item active">
																																											                    <img
																																													                      src={require(`../../assets/landingpagecarousels/bars.jpeg`)}
																																															                        width={1200}
																																																		                  height={400}
																																																				                    alt="Logo"
																																																						                    />
																																																								                    <div className="carousel-caption d-none d-md-block">
																																																										                      <h1 className="display-3 landingPageHeader" text-secondary>
																																																												                          Outdoor Trainings
																																																															                    </h1>
																																																																	                      <p></p>

																																																																			                        <button
																																																																						                    type="button"
																																																																								                        className="btn   btn-lg"
																																																																											                    data-toggle="modal"
																																																																													                        data-target="#sign-up"
																																																																																                  >
																																																																																		                      Get Started
																																																																																				                        </button>
																																																																																							                </div>
																																																																																									              </div>
																																																																																										                    <div className="carousel-item">
																																																																																												                    <img
																																																																																														                      src={require(`../../assets/landingpagecarousels/contrast.jpeg`)}
																																																																																																                        width={1200}
																																																																																																			                  height={400}
																																																																																																					                    alt="Logo"
																																																																																																							                    />
																																																																																																									                    <div className="carousel-caption d-none d-md-block">
																																																																																																											                      <h1 className="display-3 landingPageHeader" text-secondary>
																																																																																																													                          Outdoor Sports
																																																																																																																                    </h1>
																																																																																																																		                      <p></p>

																																																																																																																				                        <button
																																																																																																																							                    type="button"
																																																																																																																									                        className="btn btn-lg"
																																																																																																																												                    data-toggle="modal"
																																																																																																																														                        data-target="#sign-up"
																																																																																																																																	                  >
																																																																																																																																			                      Get Started
																																																																																																																																					                        </button>
																																																																																																																																								                </div>
																																																																																																																																										              </div>
																																																																																																																																											                    <div className="carousel-item">
																																																																																																																																													                    <img
																																																																																																																																															                      src={require(`../../assets/landingpagecarousels/leaves.jpeg`)}
																																																																																																																																																	                        width={1200}
																																																																																																																																																				                  height={400}
																																																																																																																																																						                    alt="Logo"
																																																																																																																																																								                    />
																																																																																																																																																										                    <div className="carousel-caption d-none d-md-block">
																																																																																																																																																												                      <h1 className="display-3 landingPageHeader" text-secondary>
																																																																																																																																																														                          Open oppertunities for Business
																																																																																																																																																																	                    </h1>
																																																																																																																																																																			                      <p></p>
																																																																																																																																																																					                        <button
																																																																																																																																																																								                    type="button"
																																																																																																																																																																										                        className="btn btn-lg"
																																																																																																																																																																													                    data-toggle="modal"
																																																																																																																																																																															                        data-target="#sign-up"
																																																																																																																																																																																		                  >
																																																																																																																																																																																				                      Get Started
																																																																																																																																																																																						                        </button>
																																																																																																																																																																																									                </div>
																																																																																																																																																																																											              </div>
																																																																																																																																																																																												                  </div>
																																																																																																																																																																																														            </div>
																																																																																																																																																																																															            </div>*/}
			              <div className="main-page-intro landingPageHeader">
			              <img
			                        src={require(`../../assets/images/Sociaza_banner.png`)}
			                        width={900}
			                        height={250}
			                        alt="Logo"
			                      />
			                      <button
			                          type="button"
			                          className="btn btn-primary"
			                          data-toggle="modal"
			                          data-target="#sign-up"
			                        >
			                          Get Started
			                        </button>
			              </div>
			              <br />
			              <br />
			              <div className="main-page-intro landingPageHeader">
			                <p>
			                  Sociaza is a web application to reunion Brazilian community in Sweden and organizer events
			                </p>
			         
			              </div>
			              <hr />
			              {/* OUTDOOR SERVICES */}
			              <div className="container-fluid-padding">
			                <div className="row welcome text-center">
			                  <div className="col-12">
			                   {/*  <h1
					                   className="display-3 landingPageHeader"
							                   style={{ paddingTop: "60px", paddingBottom: "30px" }}
									                 >
											                 What is inside
													               </h1> */}
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
			                        className="card-img-top"
			                        src={require(`../../assets/landingpagecards/helpfultips.jpg`)}
			                        width={300}
			                        height={300}
			                        alt = 'tips'
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title display-3 landingPageHeader">
			                          Helpful tips
			                        </h4>
			                        <p className="card-text">
			                           Helpful tips and advices about groceries, shopping, food, studies, health, 
			                           and almost everything you can imagine and need to live as a Brazilian imigrant in Sweden.
			                        </p>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        className="card-img-top"
			                        src={require(`../../assets/landingpagecards/friends.jpg`)}
			                        width={300}
			                        height={300}
			                        alt="friends"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title display-3 landingPageHeader">
			                          Friends
			                        </h4>
			                        <p className="card-text">
			                          Make new friends and networking. Meet other people like you live his/her home country
			                          and is build a new life.  <br />
			                          Meet then and have fun moments together.
			                        </p>
			                      </div>
			                    </div>
			                  </div>
			                  <div className="col-md-4">
			                    <div className="card shadow">
			                      <img
			                        className="card-img-top"
			                        src={require(`../../assets/landingpagecards/news2.jpg`)}
			                        width={300}
			                        height={300}
			                        alt="news"
			                      />
			                      <div className="card-body">
			                        <h4 className="card.title display-3 landingPageHeader">
			                          News
			                        </h4>
			                        <p className="card-text">
			                          Read news about Brazil, Sweden and other countries at the same place. <br />
			                          Keep up to date with the latest news.
			                        </p>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <Footer />
			            </div>
			          );
		    }
}

export default LoginPage;
