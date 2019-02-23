import findTaskInfo from './findTaskInfo';
import renderRow from './renderRow.jsx';

export default function createTable(tasksArray, studentsArray) {
  const table = [];

  for (let i = 0; i < tasksArray.length; i += 1) {
    const currentRow = [tasksArray[i], []];

    for (let j = 0; j < studentsArray.length; j += 1) {
      const taskInfo = findTaskInfo(tasksArray[i], studentsArray[j]);
      taskInfo.studentNickName = studentsArray[j].studentNickName;
      currentRow[1].push(taskInfo);
    }

    const renderedCurrentRow = renderRow(currentRow);
    table.push(renderedCurrentRow);
  }

  return table;
}
