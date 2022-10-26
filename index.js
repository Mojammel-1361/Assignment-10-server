const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;

app.use(cors());
const categories = require('./data/categories.json');
const course = require("./data/course.json");

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get("/course", (req, res) => {
  res.send(categories);
});
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
  const SelectCourse = course.find(n=>n._id === id);
  res.send(SelectCourse);
});

app.get("/catagory/:id", (req, res) => {
  const id = req.params.id;
  if(id === '08'){
    res.send(course);
  }
  else{
    const catagory_course = course.filter((n) => n.category_id === id);
    res.send(catagory_course);
  }
  
});

app.listen(port, () => {
    console.log('Server is running', port);
});