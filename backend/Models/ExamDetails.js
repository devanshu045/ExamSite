const mongoose = require('mongoose');

const ExamDetailsSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true
    },
    ExamName: {
        type: String,
        required: true
    },
    ExamDate: {
        type: Date,
        required: true
    },
    ExamTime: {
        type: String,
        required: true
    },
    ExamDuration: {
        type: String,
        required: true
    }
});

const ExamDetailsModel = mongoose.model("ExamDetailsModel", ExamDetailsSchema);

module.exports = ExamDetailsModel;
