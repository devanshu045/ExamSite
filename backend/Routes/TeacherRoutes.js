const express = require('express');
const { teacherSign, teacherLogin, teacherAddQuestions, CreateExam,teacherAllExam } = require('../Controller/TeacherController');

const router = express.Router();

router.post('/Signin', teacherSign);
router.post('/Login', teacherLogin);
router.post('/AddQuestions', teacherAddQuestions)
router.post('/CreateExam',CreateExam)
router.get('/TeacherAllExam',teacherAllExam)


module.exports = router;