import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function NotFoundPage() {
  return (
    <div className="container-fluid">
      
       <center> <div className="container">
          <div className="pull-right" style={{marginTop:"10px"}}>
            <div className="container col-md-offset-1 pull-right">
              <img className="img-error" src="https://bootdey.com/img/Content/fdfadfadsfadoh.png" />
              <h2>404 Not Found</h2>
              <p>Sorry, an error has occured, Requested page not found!</p>
              <div className="error-actions">
              <Link to="/">
                    <button type="button" className="btn btn-primary">
                    Back Home
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </center>
    </div>
     
  );
}

export default NotFoundPage;
