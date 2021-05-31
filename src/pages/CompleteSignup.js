import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";

//destructure history object (BrowserRouter)
//allows to use history.push
const CompleteSignup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //acquire email from local storage on mount. 
  useEffect(() => {
    setEmail(window.localStorage.getItem('userSignInEmail'))
  }, [])

  //send request to firebase to send email to user email address
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const completeSignupForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={password}
        className="form-control"
      />
      <input
        type="password"
        value={email}
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder="Enter Password"
      />
      <button type="submit" className="btn btn-raised">
        Complete Signup
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {completeSignupForm()}
        </div>
      </div>
    </div>
  );
};

export default CompleteSignup;

