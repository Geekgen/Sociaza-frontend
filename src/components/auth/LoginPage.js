import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";


class LoginPage extends Component {
  async login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }

  async register(registrationData) {
    if (registrationData.agreeTerms === "on"){
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
    window.location.reload();
  } else {
    alert("Please, agree with our Service Terms.");
  }
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

        <br />
        <br />
       
        <div className="main-page-intro landingPageHeader">
        <img
                  src={require(`../../assets/images/Sociaza_banner.png`)}
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
            <div className="col-xs-12 col-sm-6 col-md-4">
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
        <div className="container-fluid p-3" >
          <div className="row justify-content-around">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card shadow">
                <img
                  className="card-img-top"
                  src={require(`../../assets/landingpagecards/oie_292086utjOIIn1.jpg`)}
                  alt = 'tips'
                />
                <div className="card-body">
                  <h4 className="card.title  landingPageHeader">
                    Helpful tips
                  </h4>
                  <p className="card-text">
                     Helpful tips and advices about shopping, food, studies, health, 
                     and almost everything you can need to live as a Brazilian imigrant in Sweden.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="card-img-top"
                  src={require(`../../assets/landingpagecards/friends.jpg`)}
                  alt="friends"
                />
                <div className="card-body">
                  <h4 className="card.title landingPageHeader">
                    Friends
                  </h4>
                  <p className="card-text">
                    Make new friends and networking. Meet other people like you live in your home country
                    and build a new life.  <br />
                    Meet then and have fun moments together.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="card-img-top"
                  src={require(`../../assets/landingpagecards/news2.jpg`)}
                  width={300}
                  height={300}
                  alt="news"
                />
                <div className="card-body">
                  <h4 className="card.title display-4 landingPageHeader">
                    News
                  </h4>
                  <p className="card-text">
                    Read news about Brazil, Sweden and other countries at the same place. <br />
                    Keep up to date with the latest news.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
    

  }

}

export default LoginPage;
