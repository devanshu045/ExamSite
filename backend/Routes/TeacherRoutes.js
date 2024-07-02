const express = require('express');
const { teacherSign, teacherLogin, teacherAddQuestions, CreateExam } = require('../Controller/TeacherController');

const router = express.Router();

router.post('/Signin', teacherSign);
router.post('/Login', teacherLogin)
// router.post('/AddQuestions', teacherAddQuestions)
// router.post('/CreateExam',CreateExam)
// Define more routes here as needed

module.exports = router;

