import axios from "axios";
import React, { useEffect, useState } from "react";

const TeacherDashboard = () => {
  const [allexams, setAllExam] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const logincheck = localStorage.getItem("teacherlogin");
      try {
        const response = await axios.get(
          "/TeacherAllExam",
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

  return (
    <div>
      <h1>Your Exams</h1>
      {allexams.length > 0 ? (
        allexams.map((exam, index) => (
          <div key={index}>
            <h2>{exam.title}</h2>
            <p>{exam.description}</p>
          </div>
        ))
      ) : (
        <p>Loading exams...</p>
      )}
    </div>
  );
};

export default TeacherDashboard;
