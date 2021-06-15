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
    setEmail(window.localStorage.getItem("userSignInEmail"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    if(!email || !password) {
      toast.error('Email and password required')
      return;
    }

    if(password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        //gets url of page (in this case will be url + api key)
        window.location.href
      );
      // console.log("RESULT", result) - returns object with user details.
      // check if email has been verified
      // update user with entered password
      if(result.user.emailVerified){
        //remove email from local storage
        window.localStorage.removeItem("userSignInEmail");
        //get user id token gives currently logged in user
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //populate user in Redux store to access secure routes in backend
        console.log("User", user, "idToken", idTokenResult)
        //redirect to hompage
        history.push('/')

      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  //this was throwing an error
  /*provided a `value` prop to a form field without an `onChange` handler. This will render a read-only 
  field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange`or`readOnly`*/
  //fixed by adding "disabled" to email input
  const completeSignupForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} className="form-control" disabled/>
      <input
        type="password"
        value={password}
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder="Enter a valid password"
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
