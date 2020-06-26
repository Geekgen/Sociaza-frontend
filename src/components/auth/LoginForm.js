import React, { useState } from "react";

function setupEmail(email, setEmail) {
  return (<>
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div></>)
}


function setupPassword(password, setPassword) {
  return (<>
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
  </>)
}

function submit({ onSubmit }, email, password) {
  return (<><div className="form-group">
    <button
      className="btn btn-success"
      data-dismiss="modal"
      onClick={() => onSubmit({ email, password })}
    >
      Login
    </button>
  </div></>)
}

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <div className="form-body">
        <h4 className="card-title">Login</h4>
        <div>
          {setupEmail(email, setEmail)}
          {setupPassword(password, setPassword)}
          {submit({onSubmit}, email, password)}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
