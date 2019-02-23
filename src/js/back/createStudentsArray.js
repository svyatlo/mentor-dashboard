const path = require('path');
const XLSX = require('node-xlsx').default;
const cutNickNameFrom = require('./cutNickName');
const modifyGitHubLink = require('./modifyGitHubLink');

const scoreLink = path.join(__dirname, '../../data/Mentor_score.xlsx');
const score = XLSX.parse(scoreLink);

const students = [];

// Mentor_score.xlsx, find names of students, their gitHub accounts, tasks,
// scores for the tasks and mentors who checked them.
// Create array of students

let rowCount = 1; // variable for counting students (rows in xlsx files)

while (score[0].data[rowCount] !== undefined) {
  const mentorGitHub = score[0].data[rowCount][1];
  const studentGitHub = modifyGitHubLink(score[0].data[rowCount][2]);
  const taskName = score[0].data[rowCount][3];
  const grade = score[0].data[rowCount][5];

  let studentIsInArray = false;
  let taskIsInArray = false;
  let studentsIndex = 0;
  const currentTask = {};

  const mentorNickName = cutNickNameFrom(mentorGitHub);
  const studentNickName = cutNickNameFrom(studentGitHub);

  // Check if current student is already in array of students
  for (let i = 0; i < students.length; i += 1) {
    if (students[i].studentNickName === studentNickName) {
      studentIsInArray = true;
      studentsIndex = i;
      break;
    } else {
      studentIsInArray = false;
      studentsIndex = i + 1;
    }
  }

  // If current student is not in array yet, create a new object for him and push to students array
  if (!studentIsInArray) {
    const student = {
      studentNickName,
      studentGitHub,
      tasks: [],
    };

    students.push(student);
  }

  // Information about current task
  currentTask.taskName = taskName;
  currentTask.checkedBy = mentorNickName;
  currentTask.grade = grade;

  // Check if the current task name is already exist in the task list of this student
  // and mentor only changes the grade for some reason
  for (let i = 0; i < students[studentsIndex].tasks.length; i += 1) {
    const currStudentTaskList = students[studentsIndex].tasks[i];

    if (currStudentTaskList.taskName === currentTask.taskName
      && currStudentTaskList.checkedBy === currentTask.checkedBy) {
      currStudentTaskList.grade = currentTask.grade;
      taskIsInArray = true;
      break;
    }
  }

  // If the current task is new for this student, push it to student's task list
  if (!taskIsInArray) {
    students[studentsIndex].tasks.push(currentTask);
  }
  rowCount += 1;
}

module.exports = students;
