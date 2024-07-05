import React, { useState } from "react";
import { Link , useNavigate  } from "react-router-dom";
import axios from 'axios';
import './Signup.scss';

function Signup() {
  const [signformval, setSignformval] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
  });

//   const navigate = useNavigate();

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setSignformval((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/teacher/Signin", signformval)
      .then((res) => {
        console.log("Data sent successfully", res);
        if (res.status === 200 ) {
          // navigate('/login');
          console.log("data", res);
        }
        
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });

    console.log("Form Submitted:", signformval);
  };

  return (
    <div className="Tech_Sign_container">
      <div className="Tech_Sign_formWrapper">
        <form action="signup" onSubmit={handleSubmit} className="Tech_Sign_form">
          <div className="Tech_Sign_formGroup mb-4">
            <label className="Tech_Sign_label">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              onChange={handleChanges}
              value={signformval.fullName}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formGroup mb-4">
            <label className="Tech_Sign_label">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={signformval.phoneNumber}
              onChange={handleChanges}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formGroup mb-4">
            <label className="Tech_Sign_label">Email</label>
            <input
              type="email"
              name="email"
              value={signformval.email}
              onChange={handleChanges}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formGroup mb-4">
            <label className="Tech_Sign_label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signformval.password}
              onChange={handleChanges}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formGroup mb-4">
            <label className="Tech_Sign_label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={signformval.confirmPassword}
              onChange={handleChanges}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formGroup">
            <label className="Tech_Sign_label">Gender</label>
            <div className="Tech_Sign_genderOptions">
              <input
                type="radio"
                checked={signformval.gender === "male"}
                onChange={handleChanges}
                name="gender"
                value="male"
                className="Tech_Sign_radio"
              />
              <label className="Tech_Sign_radioLabel">Male</label>
              <input
                type="radio"
                checked={signformval.gender === "female"}
                onChange={handleChanges}
                name="gender"
                value="female"
                className="Tech_Sign_radio"
              />
              <label className="Tech_Sign_radioLabel">Female</label>
            </div>
          </div>
          <div className="Tech_Sign_formGroup">
            <label className="Tech_Sign_label">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={signformval.dob}
              onChange={handleChanges}
              className="Tech_Sign_input"
            />
          </div>
          <div className="Tech_Sign_formActions">
            <button
              type="submit"
              className ="Tech_Sign_submitButton"
            >
              Sign Up
            </button>
            <Link
              to="/teacher/login"
              className="Tech_Sign_loginLink"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
