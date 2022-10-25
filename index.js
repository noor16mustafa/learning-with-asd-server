const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/course.json");


app.get('/', (req, res) => {
    res.send(' API running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Server running on port 5000');
})