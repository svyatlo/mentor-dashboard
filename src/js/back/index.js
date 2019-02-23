const path = require('path');
const fs = require('fs');
const mentors = require('./createMentorsArray');
const tasks = require('./createTasksArray');
const students = require('./createStudentsArray');

const data = JSON.stringify([tasks, mentors, students]);

fs.writeFile(path.join(__dirname, '../../data/data.json'), data, (err) => {
  if (err) {
    throw err;
  }
});
