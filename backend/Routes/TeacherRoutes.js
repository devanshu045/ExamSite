const express = require('express');
const { teacherSign } = require('../Controller/TeacherController');

const router = express.Router();

router.post('/Signin', teacherSign);
// Define more routes here as needed

module.exports = router;
