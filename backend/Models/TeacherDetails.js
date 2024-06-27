const mongoose = require('mongoose');

const TeacherDetailsSchema = new mongoose.Schema({
    fullName :{
          type: 'string',
          required: true
    },
    email:{
        type: 'string',
        required: true
    },
    phoneNumber:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    dob:{
        type: 'string',
        required: true

    },
    gender:{
         type: 'string',
         required: true
    }
})

const TeacherDetailsModle = mongoose.model('TeacherDetailsModle',TeacherDetailsSchema)

module.exports = TeacherDetailsModle;