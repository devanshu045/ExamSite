import React, { useState } from "react";
import "./TeacherLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherLogin() {
  const [valobj, setValObj] = useState({
    Email: "",
    Password: "",
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValObj((prevValObj) => ({
      ...prevValObj,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // axios.post("http://localhost:8080/login", valobj)
    //   .then((res) => {
    //     console.log("data send done", res);
    //     navigate("/home")
    //   })
    //   .catch((err) => {
    //     console.log("some error", err);
    //   });
  };

  return (
    <div className="tech_login_main">
      <div className="tech_login_container">
        <form action="login" onSubmit={handleSubmit}>
          <div className="tech_login_input mb-4">
            <label className="tech_login_label">
              Enter Your Email
            </label>
            <input
              type="email"
              name="Email"
              value={valobj.Email}
              onChange={handleChanges}
              className="tech_login_input_field"
            />
          </div>
          <div className="tech_login_input mb-6">
            <label className="tech_login_label">
              Enter Your Password
            </label>
            <input
              type="password"
              name="Password"
              value={valobj.Password}
              onChange={handleChanges}
              className="tech_login_input_field"
            />
          </div>
          <div className="tech_login_button_container">
            <button
              type="submit"
              className="tech_login_button"
            >
              Login
            </button>
            {/* <Link
              to="/signup"
              href="#"
              className="tech_login_signup_link"
            >
              Create a new account.
            </Link>  */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeacherLogin;
