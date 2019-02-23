import React from 'react';

// row = [tasksArray[i], [taskInfo, taskInfo..]];

// tasksArray[i] = {      Current task information
//  taskName,
//  taskStatus,
//  taskLink
// }

// taskInfo = {           Array of cutrrent task information of all students of the mentor
//  taskName
//  checkedBy
//  grade
//  status
//  studentNickName
// }

export default function renderRow(row) {
  const gradesOfStudents = row[1].map((taskInfo) => {
    return (
      <td key={taskInfo.studentNickName} className={taskInfo.status}>
        {taskInfo.grade}
      </td>
    );
  });
  
  return (
    <tr key={row[0].taskName}>
      <th className='taskname'>
        <a href={row[0].taskLink}>{row[0].taskName}</a>
      </th>
    {gradesOfStudents}
    </tr>
  );
}