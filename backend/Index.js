const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const teacherRouter = require('./Routes/TeacherRoutes');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ExamSite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.use('/teacher', teacherRouter);

app.listen(port, () => {
    console.log('Listening on port', port);
});
