// @studentList - array of students of the mentor, we should find in array of all students
// @dataStudentsArray - array of all students of the school from data.json (data[2])

export default function selectStudents(studentList, dataStudentsArray) {
  const needToBeFind = studentList.slice();
  const selectedStudents = [];

  for (let i = 0; i < dataStudentsArray.length; i += 1) {
    for (let j = 0; j < needToBeFind.length; j += 1) {
      if (dataStudentsArray[i].studentNickName === needToBeFind[j]) {
        selectedStudents.push(dataStudentsArray[i]);
        needToBeFind.splice(j, 1);
      }
    }
  }

  // if in array 'needToBeFind' there are students, who have not passed any task,
  // we add them with property 'tasks': []
  if (needToBeFind.length > 0) {
    for (let i = 0; i < needToBeFind.length; i += 1) {
      const badStudent = {
        studentNickName: `${needToBeFind[i]}`,
        studentGitHub: `https://github.com/${needToBeFind[i]}`,
        tasks: [],
      };
      selectedStudents.push(badStudent);
    }
  }
  return selectedStudents;
}
