const TeacherDetailsModel = require('../Models/TeacherDetails'); 
const QuestionsModel = require('../Models/QuestionsDetails');
const ExamDetailsModule = require('../Models/ExamDetails');


exports.teacherSign =   (req, res) => {
    console.log(req.body);
    TeacherDetailsModel.create(req.body)
        .then(() => {
            res.status(200).send("Data stored in database");
        })
        .catch((err) => {
            console.error("Error storing data:", err);
            res.status(500).send("Failed to store data");
        });
};

exports.teacherLogin = async  (req, res) => {
    try {
        console.log(req.body);
        const { Email, password } = req.body;
        if (!Email) {
            // throw new Error('Email is missing in req.body');
            console.log("user not found 2")
        }
        const finduser = await TeacherDetailsModel.findOne({ email: Email});
        if (!finduser) {
            console.log('User not found');
        } else {
            console.log('User found:', finduser);
        }
    } catch (error) {
        console.error('Error in find user:', error);
    }
}


exports.teacherAddQuestions = async (req,res) => {
    console.log(req.body)
    try{
        for(let i=0; i<req.body.length; i++){
            QuestionsModel.create(req.body[i]).then(() => {
                res.status(200).send("Data stored in database");
            })
            .catch((err) => {
                console.error("Error storing data:", err);
                res.status(500).send("Failed to store data");
            });
        }
    }
    catch (error) {
        console.error('Error in find user:', error);
    }

}


exports.CreateExam = (req,res) =>{
    ExamDetailsModule.create(req.body)
    .then(() => {
        res.status(200).send("Data stored in database");
    })
    .catch((err) => {
        console.error("Error storing data:", err);
        res.status(500).send("Failed to store data");
    });
}

