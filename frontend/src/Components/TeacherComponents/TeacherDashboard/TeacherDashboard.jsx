import axios from "axios";
import React, { useEffect, useState } from "react";
import './TeacherDashboard.scss'

const TeacherDashboard = () => {
  const [allexams, setAllExam] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const logincheck = localStorage.getItem("teacherlogin");
      console.log(logincheck)
      try {
        const response = await axios.get(
          "http://localhost:8080/teacher/teacherAllExam",
          {
            params: { teacherId: logincheck },
          }
        );
        setAllExam(response.data);
      } catch (error) {
        console.log("Error fetching exams:", error);
      }
    };
    console.log(allexams);
    fetchExams();
  }, []); // Empty dependency array to ensure it runs only once
  console.log(allexams)

  return (
    <div className="teacher-dashboard">
      <h1 className="title">Your Exams</h1>
      {allexams.length > 0 ? (
        allexams.map((exam, index) => (
          <div className="exam-card" key={index}>
            <h2 className="exam-name">{exam.ExamName}</h2>
            <p className="exam-date">{exam.ExamDate}</p>
            <p className="exam-time">{exam.ExamTime}</p>
            <p className="exam-duration">{exam.ExamDuration}</p>
          </div>
        ))
      ) : (
        <p className="no-exams-message">No exams found.</p>
      )}
    </div>
  );
};

export default TeacherDashboard;
