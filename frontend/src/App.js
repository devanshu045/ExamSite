import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import TeacherIndex from './Components/TeacherComponents/TeacherIndex';
import Signup from './Components/TeacherComponents/Registration/Signup/Signup';
import TeacherLogin from './Components/TeacherComponents/Registration/Login/TeacherLogin';
import MainApp from './Components/MainApp';
import CreateExam from './Components/TeacherComponents/ManageExam/CreateExam/CreateExam';
import AddQuestions from './Components/TeacherComponents/ManageExam/AddQuestions/AddQuestions';
import TeacherDashboard from './Components/TeacherComponents/TeacherDashboard/TeacherDashboard';
import MainAppstd from './Components/StudentComponents/MainAppstd';

function App() {
  return (
    <div className="App">
     radhe radhe
     
       <BrowserRouter>
          <Routes>
            <Route path = '/' element={<MainApp/>}/>
             <Route  path="/teacher/login" element={ <TeacherIndex/>}/>
             <Route path="/teacher/signup" element={<Signup/>}/>  
             <Route path="/teacher/createexam" element={<CreateExam/>}/>
             <Route path="/teacher/addquestion" element={<AddQuestions/>}/>
             <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>

             <Route path='/student' element={<MainAppstd/>}/>
          </Routes>       

          
          
          
       </BrowserRouter>
    </div>
  );
}

export default App;
