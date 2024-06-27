const TeacherDetailsModel = require('../Models/TeacherDetails'); 


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



