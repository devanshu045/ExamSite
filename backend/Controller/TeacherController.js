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
            res.status(500).send("User Not fount")
        } else {
            console.log('User found:', finduser);
            res.status(200).send("user Found")
        }
    } catch (error) {
        console.error('Error in find user:', error);
    }
}


exports.teacherAddQuestions = async (req, res) => {
    console.log(req.body);

    try {
        // Use Promise.all to wait for all create operations to complete
        await Promise.all(req.body.map(question => {
            return QuestionsModel.create(question);
        }));
        res.status(200).json({ message: "Questions added successfully" });
    } catch (error) {
        console.error("Error adding questions:", error);
        res.status(500).json({ message: "An error occurred while adding questions", error: error.message });
    }
};

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



exports.teacherAllExam = (req, res) => {
    const {Email} = req.query;
    console.log("haa bhai kuch hua hai")
  
  try{
      const getExamsDetails = ExamDetailsModule.find({Email});
      consolg.log(getExamsDetails);
      res.status(200).send(getExamsDetails);
  }

  catch{
      consolg.log("kuch sahi nhi hai")
  }

}