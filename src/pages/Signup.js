import React, { useState } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");

  //send request to firebase to send email to user email address
  const handleSubmit = async (e) => {
    e.preventDefault();
    //create config object
    const config = {
      //url to be redirected to
      url: process.env.REACT_APP_REDIRECT_URL_SIGNUP,
      //sets whether email action link opens in mobile app or weblink first.
      //set to true = action code link sent as universal link or android app link.
      handleCodeInApp: true,
    };
    try {
      await auth.sendSignInLinkToEmail(email, config);
      // The link was successfully sent. Inform the user.
      toast.success(
        `A registration link has been sent to ${email}.  Click the link to complete registration`
      );

      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      //1st param = key, 2nd = value
      window.localStorage.setItem("userSignInEmail", email);
      //clear email from form
      setEmail("");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error with signup", errorCode, errorMessage);
      toast.error(`Error with signup : ${errorMessage}`);
    }
  };

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
      <button type="submit" className="btn btn-raised">
        Register
      </button>
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
