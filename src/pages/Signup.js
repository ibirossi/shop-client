import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  
  //send request to firebase to send email to user
  const handleSubmit = () => {};
  
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        autoFocus
        placeholder="Enter valid email"
      />
      <button type="submit" className="btn btn-raised">submit</button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Signup;
