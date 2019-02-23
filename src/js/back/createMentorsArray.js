const path = require('path');
const XLSX = require('node-xlsx').default;
const cutNickNameFrom = require('./cutNickName');

const pairsLink = path.join(__dirname, '../../data/Mentor-students_pairs.xlsx');
const pairs = XLSX.parse(pairsLink);

const mentors = [];

// Mentor-students_pairs.xlsx, page 2,
// find firstnames, lastnames of mentors and their gitHub accounts.
// Create array of mentors
let rowCount = 1;

while (pairs[1].data[rowCount][0] !== undefined) {
  const firstName = pairs[1].data[rowCount][0];
  const lastName = pairs[1].data[rowCount][1];
  const mentorGitHub = pairs[1].data[rowCount][4];
  const mentorNickName = cutNickNameFrom(mentorGitHub);

  const mentor = {
    mentorName: `${firstName} ${lastName}`,
    mentorGitHub,
    mentorNickName,
    students: [],
    numberOfStudents: 0,
  };

  mentors.push(mentor);
  rowCount += 1;
}

// Mentor-students_pairs.xlsx, page 1, find students of every mentor.
rowCount = 1;

while (pairs[0].data[rowCount][0] !== undefined) {
  const mentorName = pairs[0].data[rowCount][0];
  for (let i = 0; i < mentors.length; i += 1) {
    if (mentors[i].mentorName === mentorName) {
      mentors[i].students.push(pairs[0].data[rowCount][1]);
      mentors[i].numberOfStudents += 1;
    }
  }
  rowCount += 1;
}

module.exports = mentors;
