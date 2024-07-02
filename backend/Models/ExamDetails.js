const mongoose = require('mongoose');


const ExamDetialsSchema = new mongoose.Schema({
    uniqueId:{
        type: 'string',
        required: true
    },
    ExamName:{
        type:"String",
        required:true
    },
    ExamDate:{
        type:"date",
        required:true
    }
    ,
    ExamTime:{
        type:"time",
        required:true
    },
    ExamTimeFrom:{
        type:"time",
        required:true
    },
    ExamTimeTo:{
        type:"time",
        required:true
    }
})

const ExamDetailsModule = mongoose.models("ExamDetailsModel",ExamDetialsSchema)

module.exports  = ExamDetailsModule