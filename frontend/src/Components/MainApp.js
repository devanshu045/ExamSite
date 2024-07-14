import React from 'react';
import { Link } from 'react-router-dom';
import './MainApp.scss';

const MainApp = () => {
  return (
    <div className="main-app">
      <h1 className='Main-headding'>Welcome To Exam Center</h1>
      <Link to='/teacher/login' className="link">
        <button className="button teacher-button">
          Teacher 
        </button>
      </Link>
      <Link to='/student' className="link">
        <button className="button student-button">
          Student
        </button>
      </Link>
    </div>
  );
}

export default MainApp;
