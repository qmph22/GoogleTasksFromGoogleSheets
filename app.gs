function createTasksFromSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet(); // Or specify a particular sheet by name
  var range = sheet.getDataRange(); // Get all data in the sheet
  var values = range.getValues();

  // Will first need to find the list of Task List IDs
  // console.log(Tasks.Tasklists.list())
  const taskListID = "22characterstringhere"

  //Get all tasks and not just the first 20
  var tasks = [];
  var pageToken = "";
  do {
    var res = Tasks.Tasks.list(taskListID, {maxResults: 100, pageToken: pageToken});
    Array.prototype.push.apply(tasks, res.items);
    pageToken = res.nextPageToken;
  } while (pageToken);

  // Assuming your first row is headers, start from the second row
  for (var i = 1; i < values.length; i++) {
    var taskExists = false; // Doesn't exist by default
    var replaceTask = false; // No change as it doesn't exist yet
    var row = values[i];
    var taskName = row[0]; // Assuming task name is in the first column
    var dueDate = row[1]; // Assuming due date is in the second column
    var taskNotes = row[2]; // Assuming task notes are in the third column
    //console.debug('Checking task ' + taskName)  
    

    // You would add more robust date handling here
    var task = Tasks.newTask();
    task.title = taskName;
    if (dueDate) {
      newDate = new Date(dueDate).setHours(-4); // Adjust the timezone to the current timezone. Google Apps Script doesn't handle timezones very well.
      newNewDate = new Date(newDate);
      task.due = newNewDate.toISOString(); // Convert date to ISO format
    }
    task.notes = taskNotes;
  
    // Verify if tasks already exist or need to be wiped out
    for (var t = 0; t < tasks.length; t++ ) {
        //console.debug(tasks[t]['title'] + ' has due date ' + tasks[t]['due'] + ' . Checking against ' + task.due)
        if (tasks[t]['title'] == taskName && tasks[t]['due'] == task.due) {
          if (tasks[t]['notes'] != taskNotes) { 
            //console.debug(tasks[t]['notes'] + ' is not equal to ' + taskNotes)
            replaceTask = true; 
            }
          taskExists = true;
          //console.debug('taskExists for ' + tasks[t]['title'] + ' is ' + taskExists);
          break;
        }
    }

    if (replaceTask == true)
    {
      console.log('Replacing ' + task)
      Tasks.Tasks.patch(task,taskListID, tasks[t]['id'])
    }
    if (taskExists == false) { 
      console.log('Inserting ' + task)
      Tasks.Tasks.insert(task, taskListID); 
      }
  }
}
