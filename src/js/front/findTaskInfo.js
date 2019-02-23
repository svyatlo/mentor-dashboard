function unifyTaskName(taskName) {
  return taskName.replace('-', '').trim().split(' ').join('');
}

// Check if the task (taskName) is in the array of student's tasks
// (if student has passed this task)
function fillTaskInfo(taskName, studentTasksArray) {
  const taskInfo = {};
  let index = null;

  for (let i = 0; i < studentTasksArray.length; i += 1) {
    if (unifyTaskName(studentTasksArray[i].taskName) === unifyTaskName(taskName)) {
      index = i;
      break;
    }
  }

  if (index === null) {
    taskInfo.taskName = taskName;
    taskInfo.checkedBy = '';
    taskInfo.grade = '';
  } else {
    taskInfo.taskName = taskName;
    taskInfo.checkedBy = studentTasksArray[index].checkedBy;
    taskInfo.grade = studentTasksArray[index].grade;
  }

  return taskInfo;
}

export default function findTaskInfo(task, student) {
  let status = '';
  const taskInfo = fillTaskInfo(task.taskName, student.tasks);

  if (taskInfo.checkedBy !== '') {
    if (task.taskStatus === 'Checked' || task.taskStatus === 'Checking' || task.taskStatus === 'In Progress') {
      status = 'checked';
    }
  } else if (task.taskStatus === 'Checked') {
    status = 'failed';
  } else if (task.taskStatus === 'Checking') {
    status = 'checking';
  } else if (task.taskStatus === 'In Progress') {
    status = 'inProgress';
  } else if (task.taskStatus === 'ToDo') {
    status = 'toDo';
  }

  taskInfo.status = status;
  return taskInfo;
}
