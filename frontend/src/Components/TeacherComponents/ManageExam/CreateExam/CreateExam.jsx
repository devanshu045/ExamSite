import React, { useState } from "react";
import "./CreateExam.scss";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const CreateExam = () => {
  // Get current date for default date value
  const currentDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
  const navigator = useNavigate()

  const [ExamDetails, setExamDetails] = useState({
    uniqueId:'',
    ExamName: '',
    ExamDate: '',
    ExamTime: '',
    ExamTimeFrom: '',
    ExamTimeTo: '',
  });

  // Event handler for date input focus
  const handleDateFocus = (event) => {
    event.target.setAttribute("min", currentDate);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExamDetails(prevExamDetails => ({
      ...prevExamDetails,
      [name]: value
    }));
    console.log(ExamDetails)
  };
  
  const generateUniqueId = () => {
   const  newuniqueid = uuidv4();
    return newuniqueid;

  };

  const hangleFormSubmit = (event) => {
    event.preventDefault();
    
    // if(!localStorage.getItem('uniqueId')){
      const newuniqueId = generateUniqueId();
      localStorage.setItem("uniqueId",newuniqueId);
      setExamDetails(pre =>({
                    ...pre,
                    uniqueId :newuniqueId
      }))
      console.log(ExamDetails)
      axios.post("http://localhost:8080/teacher/CreateExam",ExamDetails).then((response) => {
        console.log(response)
        navigator('/teacher/addquestion')
      })
      .catch((error) => {
        console.log(error)
      })
    // }

   
     
  };

  return (
    <div className="CreateExam_Container">
      <form onSubmit={hangleFormSubmit} className="CreateExam_Form">
        <label htmlFor="examName">Enter Your Exam Name</label>
        <input
          type="text"
          id="examName"
          name="ExamName"
          value={ExamDetails.ExamName}
          onChange={handleInputChange}
        />

        <label htmlFor="examDate">Enter Date</label>
        <input
          type="date"
          id="examDate"
          defaultValue={currentDate}
          name="ExamDate"
          value={ExamDetails.ExamDate}
          onFocus={handleDateFocus}
          onChange={handleInputChange}
        />

        <label htmlFor="examTime">Enter Time</label>
        <input
          type="time"
          id="examTime"
          defaultValue="12:00"
          name="ExamTime"
          value={ExamDetails.ExamTime}
          onChange={handleInputChange}
        />

        <label htmlFor="examDurationFrom">Duration of exam (From)</label>
        <input
          type="time"
          id="examDurationFrom"
          name="ExamTimeFrom"
          value={ExamDetails.ExamTimeFrom}
          onChange={handleInputChange}
        />

        <label htmlFor="examDurationTo">Duration of exam (To)</label>
        <input
          type="time"
          id="examDurationTo"
          name="ExamTimeTo"
          value={ExamDetails.ExamTimeTo}
          onChange={handleInputChange}
        />

        <button type="submit"  className="CreateExam_Btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateExam;
