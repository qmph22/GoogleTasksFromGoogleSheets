# Google Tasks from Google Sheets
Use Google App Script on a Google Sheet to create Google Tasks on a specified Task list  
To use this:  
1. Create a Google Sheet that you want to create tasks from. Ensure that you have that Sheet open on your screen.
2. Ensure that Column A is the Task name, Column B is the Task's due date, and Column C is the Task note.
3. Click `Extensions` then `Apps Script`
4. Copy and paste the contents of the `app.gs` file in this repository to your new App Script
6. Change the line that says `newDate = new Date(dueDate).setHours(-4);` to use your timezone. It is currently set to use Eastern Standard Time which is `-4`. Change the number to match your timezone.
7. Uncomment the line that says `console.log(Tasks.Tasklists.list())`
8. Run the script making note of the Task List ID of the list that you want to modify.
9. Comment out the line that says `console.log(Tasks.Tasklists.list())`
10. Change `const taskListID` to be equal to the Task List ID that you want to modify.
11. Run the script. Ensure that the Task List was modified.

> [!CAUTION]
> The script does not allow for tasks with the same Task name and due date. If this is detected when running the script, the associated Task note will be overwritten in the Task list.
