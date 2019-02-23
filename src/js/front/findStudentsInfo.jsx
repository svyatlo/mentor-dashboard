import React from 'react';
import data from '../../data/data.json';
import createTable from './createTable';
import selectStudents from './selectStudents';

export default function findStudentsInfo(mentor) {
  const dataTasksArray = data[0];
  const dataMentorsArray = data[1];
  const dataStudentsArray = data[2];
  const students = [];

  // Finds mentor in data.json and forms list of his(her) students
  for (let i = 0; i < dataMentorsArray.length; i += 1) {
    if (mentor === dataMentorsArray[i].mentorNickName) {
      const studentList = dataMentorsArray[i].students;
      
      for (let j = 0; j < studentList.length; j += 1) {
        students.push(studentList[j]);
      }
      
      break;
    }
  }
  // Finds students of the mentor in data.json with their tasks results
  const selectedStudents = selectStudents(students, dataStudentsArray);
  
  const renderStudents = selectedStudents.map((student) => {
    return (
      <th key={student.studentNickName} className='student'>
        <a href={student.studentGitHub}>{student.studentNickName}</a>
      </th>
    );
  });

  const renderTable = createTable(dataTasksArray, selectedStudents);
  
  return ([
    <thead key='thead'>
      <tr>
        <th>Task / Student</th>
        {renderStudents}
      </tr>
    </thead>,
    <tbody key ='tbody'>
      {renderTable}
    </tbody>
  ]);
}
