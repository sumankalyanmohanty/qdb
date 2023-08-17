import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const url = process.env.REACT_APP_BASE_URL_USERS;

  useEffect(() => {
    axios.get(url).then((data) => setUsers(data.data));
  });

  let database = [];
  users.map((userdata) => {
    database.push({ username: userdata.username, id: userdata.id });
  });

  const errors = {
    uname: "invalid username",
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    let userid = userData.id;
    let username = userData.username;
    localStorage.setItem("userId", userid);
    localStorage.setItem("newuser", username);

    if (userData) {
      setIsSubmitted(true);
      navigate("/dashboard");
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="main">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? "Welcome" : renderForm}
      </div>
    </div>
  );
};

export default Login;
