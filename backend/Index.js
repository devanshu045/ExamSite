const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const teacherRouter = require('./Routes/TeacherRoutes');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// db connections
mongoose.connect('mongodb://127.0.0.1:27017/ExamSite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


//routes

app.use('/teacher', teacherRouter);


// port listen
app.listen(port, () => {
    console.log('Listening on port', port);
});
