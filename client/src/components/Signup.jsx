import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import Header from "./Header";
import "./Login.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = () => {
    const URL = "http://localhost:4000/signup";
    const data = { username, password };

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (usernameRef.current && usernameRef.current.value.trim() !== "") {
      usernameRef.current.parentNode.classList.add("input--filled");
    }
    if (passwordRef.current && passwordRef.current.value.trim() !== "") {
      passwordRef.current.parentNode.classList.add("input--filled");
    }
  }, []);

  const handleInputFocus = (e) => {
    e.target.parentNode.classList.add("input--filled");
  };

  const handleInputBlur = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value.trim() === "") {
      parent.classList.remove("input--filled");
    }
  };

  return (
    <div>
      <Header />

      <div className="loginForm">
        <span className="input">
          <input
            type="text"
            className="input__field"
            id="input-1"
            ref={usernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <label htmlFor="input-1" className="input__label">
            <span className="input__label-content">Username</span>
          </label>
        </span>

        <span className="input">
          <input
            type="password"
            className="input__field"
            id="input-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <label htmlFor="input-2" className="input__label">
            <span className="input__label-content">Password</span>
          </label>
        </span>
        <div className="butonss">
          <button id="send-button" onClick={signUp} type="button">
            SignUp
          </button>
          <br />
          <p className="question">Already have an account?</p>
          <button
            id="send-button"
            onClick={() => {
              window.location.href = "/login";
            }}
            type="button"
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
