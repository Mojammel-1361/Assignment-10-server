const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;

app.use(cors());
const categories = require('./data/categories.json');
const courses = require("./data/course.json");

app.get('/', (req, res) => {
    res.send('Course API Running');
});
// categories
app.get("/course", (req, res) => {
  res.send(categories);
});
// done 

// category data (all courses)/ singel course data

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const SelectCourse = courses.find((n) => n._id === id);
  res.send(SelectCourse);
});

// ................ done

// category part start
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if(id === '08'){
    res.send(courses);
  }
  else{
    const category_course = courses.filter((n) => n.category_id === id);
    res.send(category_course);
  }
  
});

// ...........done 







// all courses data 

app.get("/courses", (req, res) => {
  res.send(courses);
});



// run part 
app.listen(port, () => {
    console.log('Server is running', port);
});