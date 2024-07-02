import React from 'react'
import TeacherLogin from './Registration/Login/TeacherLogin'
import Signup from './Registration/Signup/Signup'
import CreateExam from './ManageExam/CreateExam/CreateExam'
import AddQuestions from './ManageExam/AddQuestions/AddQuestions'
import {router,route} from 'react-router-dom';

const TeacherIndex = () => {
  return (
    <div>
      {/* <Signup/>  */}
      {/* <TeacherLogin/> */}

      {/* <CreateExam/> */}
      <AddQuestions/>
    </div>
  )
}

export default TeacherIndex