import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import HomeNavbar from "./components/layout/HomeNavbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import pages
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import ChatPage from './components/chat/ChatPage';
import CommentsPage from './components/comments/CommentsPage';
import ServicePage from './components/service/ServicePage';
import ServiceForm from './components/service/ServiceForm';
import Covid19live from './components/covid19live/Covid19Live';
import ServiceList from './components/service/ServiceList';
import ServiceDetail from './components/service/ServiceDetail';
import Profile from './components/profile/Profile';
import AboutUs from './components/about/AboutUs';
import Faq from './components/faq/Faq';
import ProfilePic from './components/profile/ProfilePic';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';
import GameComingSoon from './components/games/ComingSoonGames';
import ComingSoonGames from "./components/games/ComingSoonGames";
import News from './components/news/NewsPage';
import ComingSoonFood from './components/food/ComingSoonFood';
import ComingSoonTourism from './components/tourism/ComingSoonTourism';
import NotFound from './components/notfoundpage/NotFoundPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <div className='shadowNavbar'>
        <HomeNavbar onLogout={() => Auth.logout()} />
      </div>
      <div className='container page-container  content-wrap mt-5'>
        <Switch>
          <Route path='/posts/:id' component={CommentsPage} />
          <Route path='/posts'>
            <ServicePage />
          </Route>
          <Route path='/service/:id' component={ServiceDetail} />
          
          <Route path='/service'>
            <ServiceList />
          </Route>

          <Route path='/chat'>
            <ChatPage />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/profilepic'>
            <ProfilePic />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
          </Route>

          <Route path='/Serviceform'>
            <ServiceForm />
          </Route>

          <Route path='/covid19live'>
            <Covid19live />
          </Route>

          <Route path='/faq'>
            <Faq />
          </Route>

          <Route path='/games'>
            <ComingSoonGames />
          </Route>

         <Route path='/news'>
            <News />
          </Route>
 
          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>

          <Route path="/food">
            <ComingSoonFood />
          </Route>

          <Route path="/tourism">
            <ComingSoonTourism />
          </Route>

          <Route path="/notfound">
            <NotFound />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
      <br />
      <div className='footer'>
        <Footer />
      </div>
    </Router>
  
  );

  const logoutInRouter = (

    <Router>
      <div className='shadowNavbar'>
        <Navbar onLogout={() => Auth.logout()} />
      </div>
      <div className='container-fluid page-container  content-wrap mt-5'>
        <Switch>
          

          <Route path='/chat'>
            <ChatPage />
          </Route>

         

          <Route path="/aboutus">
            <AboutUs />
          </Route>

         
          <Route path='/covid19live'>
            <Covid19live />
          </Route>

          <Route path='/faq'>
            <Faq />
          </Route>

          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>

          <Route path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
      <br />
      <div className='footer'>
        <Footer />
      </div>
    </Router>

  );


   return (loggedIn ? loggedInRouter : logoutInRouter);

  // return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;