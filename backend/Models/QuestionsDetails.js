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
    }
})

const QuestionsModel =  mongoose.model("QuestionsModel",QuestionSchema);

module.exports = QuestionsModel;