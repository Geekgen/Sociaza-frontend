import React, { useState } from "react";
import { setTokenSourceMapRange } from "typescript";

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setTerms] = useState("");

  
  return (
    <div className="card">
      <div className="form-body">
        <h4 className="card-title">Sign up</h4>
        <div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="agreeTerms" onChange={(e) => setTerms(e.target.value)} />
              <label className="form-check-label" for="agreeTermsLabel">Agree our&ensp;
            <a href="/serviceterms" className="aterm">
            Terms of Service </a> {" "}</label>
            <br />
            <br />
          </div>

            <div className="form-group">
              <button
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => onSubmit({ name, email, password, agreeTerms })}
              >
                Create account
            </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default RegisterForm;
