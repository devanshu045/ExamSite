const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    uniqueId:{
        type: 'string',
        required: true
    },
    Questions:{
        type:"String",
        required:true
    },
    OptionA:{
        type:"String",
        
    }
    ,
    OptionB:{
        type:"String",
        
    }
    ,
    OptionC:{
        type:"String",
    
    }
    ,
    OptionD:{
        type:"String",
        
    }
    ,
    Answere:{
        type:"String",
        required:true
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

const QuestionsModel =  mongoose.model("QuestionsModel",QuestionSchema);

module.exports = QuestionsModel;