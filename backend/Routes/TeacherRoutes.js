const express = require('express');
const { teacherSign, teacherLogin } = require('../Controller/TeacherController');

const router = express.Router();

router.post('/Signin', teacherSign);
router.post('/Login', teacherLogin)
// Define more routes here as needed

module.exports = router;
