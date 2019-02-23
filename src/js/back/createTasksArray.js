const path = require('path');
const XLSX = require('node-xlsx').default;

const tasksLink = path.join(__dirname, '../../data/Tasks.xlsx');
const parsedTasks = XLSX.parse(tasksLink);
const tasks = [];
let rowCount = 1;

while (parsedTasks[0].data[rowCount] !== undefined) {
  const taskName = parsedTasks[0].data[rowCount][0];
  const taskLink = parsedTasks[0].data[rowCount][1] || null;
  const taskStatus = parsedTasks[0].data[rowCount][2];

  const task = {
    taskName,
    taskLink,
    taskStatus,
  };

  tasks.push(task);
  rowCount += 1;
}

module.exports = tasks;
