import React from "react";
import { Switch, Route } from "react-router-dom";
//allow toast to be available to all components
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CompleteSignup from "./pages/CompleteSignup";
import Login from "./pages/Login";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/register/complete" component={CompleteSignup} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
