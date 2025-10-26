# Google Tasks from Google Sheets
Use Google App Script on a Google Sheet to create Google Tasks on a specified Task list  
To use this:  
1. Create a Google Sheet that you want to create tasks from.
2. Column A is the Task name, Column B is the Task's due date, and Column C is the Task note.
3. Change the line that says `newDate = new Date(dueDate).setHours(-4);` to use your timezone. It is currently set to use Eastern Standard Time which is `-4`. Change the number to match your timezone.
4. Uncomment the line that says `console.log(Tasks.Tasklists.list())`
5. Run the script making note of the Task List ID of the list that you want to modify.
6. Comment out the line that says `console.log(Tasks.Tasklists.list())`
7. Change `const taskListID` to be equal to the Task List ID that you want to modify.
8. Run the script. Ensure that the Task List was modified.

> [!NOTE]
> The script does not allow for tasks with the same Task name and due date. If this is detected when running the script, the associated Task note will be overwritten in the Task list.
