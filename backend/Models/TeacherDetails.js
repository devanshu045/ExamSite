const mongoose = require('mongoose');

const TeacherDetailsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

const TeacherDetailsModel = mongoose.model('TeacherDetailsModel', TeacherDetailsSchema);

module.exports = TeacherDetailsModel;
