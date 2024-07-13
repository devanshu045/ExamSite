const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String
    },
    optionB: {
        type: String
    },
    optionC: {
        type: String
    },
    optionD: {
        type: String
    },
    answere: {
        type: String,
        required: true
    }
});

const QuestionsModel = mongoose.model("QuestionsModel", QuestionSchema);

module.exports = QuestionsModel;
