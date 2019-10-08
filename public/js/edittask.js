$(document).ready(function () {
  var $taskContainer = $(".task-container");
  var $definedTaskContainer = $('.defined-task-container');

  //***************EVENT LISTENERS***************/
  $(document).on("click", "button.delete", deleteTask);
  $(document).on("click", "button.editCtl", toggleFinish);
  $(document).on("click", ".task-item", editTask);
  $(document).on("click", ".editCtl", finishEdit);

  // Our initial tasks array
  var tasks = [];
  //Initial users array
  var users = [];

  //TODO:
  var definedTasks = [];

  // Getting tasks from database when page loads
  getTasks();

  // This function resets the tasks displayed with new tasks from the database
  function initializeRows() {
    $taskContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < tasks.length; i++) {
      rowsToAdd.push(createNewRow(tasks[i]));
      console.log('task' + i + ':' + JSON.stringify(tasks[i]));
    }
    $taskContainer.append(rowsToAdd);
    getUsers();
    getDefinedTasks();
  }

  //***************GET TASKS FROM DATABASE***************/
  function getTasks() {
    $.get("/api/tasks", function (data) {
      tasks = data;
      //console.log(tasks);
      initializeRows();
    });
  }

  //***************DELETE TASKS***************/
  function deleteTask(event) {
    event.stopPropagation();

    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/tasks/" + id
    }).then(getTasks);
  }

  //****************EDIT TASKS****************/
  //opens up the task boxes for editing
  function editTask() {
    var currentTask = $(this).parent().parent().data("task");
    console.log($(this).parent().parent().children());
    $(this).parent().parent().children().hide();
    $(this).parent().parent().find('#editId').val(currentTask.id);
    $(this).parent().parent().find('#editTaskName').val(currentTask.task);
    $(this).parent().parent().find('#editFreq').val(currentTask.frequency);
    $(this).parent().parent().find('#editUserName').val(currentTask.User.id);
    $(this).parent().parent().children("td.edit").show();
    //$(this).children("input.edit").show();
    $(this).parent().parent().find('#editTaskName').focus();
  }

  function toggleFinish(event) {
    event.stopPropagation();
    var id = $(this).parent().parent().find('#editId').val();
    var task = $(this).parent().parent().find('#editTaskName').val();
    var frequency = $(this).parent().parent().find('#editFreq').val();
    var owner = $(this).parent().parent().find('#editUserName').val();

    task.finish = !task.finish;
    updateTask(id, task, frequency, owner);
  }

  //***************EDIT TASKS IN DATABASE***************/
  function finishEdit(event) {
    var updatedTask = $(this).parent().parent().data("task");
    if (event.which === 13) {
      updatedTask.task = $(this).children("input").val().trim();
      $(this).blur();
      updateTask(updatedTask);
    }
  }

  function updateTask(id, task, frequency, owner) {
    console.log('Owner1: ', owner);
    console.log('task1: ', task);
    console.log('frequency1: ', frequency);
    $.ajax({
      method: "PUT",
      url: "/api/tasks",
      data: {
        id: id,
        task: task,
        frequency: frequency,
        UserId: owner
      }
    }).then(getTasks);
  }

  // This function constructs a task-item table for each task
  function createNewRow(task) {
    var $newInputRow = $(
      [
        "<tr>",
        //<span class="task-container"></span>
        "<td>" + task.id + "</td>",
        "<td  class='edit' style='display:none;'><input class='editCtl' id='editId' type='text' style='display:none;'>" + task.id + "</td>",
        "<td>" + task.task + "</td>",
        "<td  class='edit' style='display:none;'><input class='editCtl' id='editTaskName' type='text'></td>",
        "<td class=''>" + task.frequency + "</td>",
        "<td  class='edit' style='display:none;'><input class='editCtl' id='editFreq' type='text'></td>",
        "<td class=''>" + task.User.userName + "</td>",
        //"<td  class='edit' style='display:none;'><input class='editCtl' id='editUserName' type='text'></td>",
        "<td  class='edit' style='display:none;'><select class='editCtl userSelect' id='editUserName'></select></td>",
        "<td> <button class='task-item'>Edit</button> <button class='delete'>Delete</button></td>",
        "<td  class='edit' style='display:none;'><button class='editCtl' id='editSubmit'>Finish</button></td>",
        "</tr>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", task.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("task", task);
    //if (task.finish) {
    //    $newInputRow.find("span").css("text-decoration", "line-through");
    // }
    return $newInputRow;
  }

  //******Function to get the users to be displayed in the table*******//
  function getUsers() {
    console.log('getUsers function');
    $.get("/api/users", function (data) {
      //console.log('data: ' + JSON.stringify(data));
      users = data;
      renderUserList();
    });

    // console.log('getUser function');
  }

  //function to render the list of users
  function renderUserList() {
    // console.log(users.length);
    console.log('renderUserList function');
    var usersToAdd = [];
    for (var i = 0; i < users.length; i++) {
      usersToAdd.push(populateSelect(users[i]));
      // console.log('users' + i + ':' + JSON.stringify(users[i]));
    }
  }

  //create a select box for the available users
  function populateSelect(user) {
    // console.log('populateSelect function');
    var $editUserName = $('.userSelect');
    $editUserName.append(new Option(user.userName, user.id));
    //editUserName
  }

  //***************GET PREDEFINED TASKS FROM DATABASE***************/
  //FIXME:


  // This function resets the tasks displayed with new tasks from the database
  function renderDefinedList() {
    console.log('renderDefinedList function');
    $definedTaskContainer.empty();
    //console.log('container');
    var rowsToAdd = [];
    console.log('definedTask.length: ' + definedTasks.length);
    for (var i = 0; i < definedTasks.length; i++) {
      console.log('value of i: ' + i);
      rowsToAdd.push(createNewTable(definedTasks[i]));
      console.log('definedTask' + i + ':' + JSON.stringify(definedTasks[i]));
    }
    $definedTaskContainer.append(rowsToAdd);

  }

  function getDefinedTasks() {
    console.log("getDefinedTask function");
    $.get("/api/defined/", function (data) {
      definedTasks = data;
      //console.log(tasks);
      renderDefinedList();
    });
  }
  function createNewTable(definedTask) {
    var $newInputRow = $(
      [
        "<tr>",
        //<span class="task-container"></span>
        "<td>" + definedTask.id + "</td>",
        "<td  class='define' style='display:none;'><input class='defineCtl' id='defineId' type='text' style='display:none;'>" + definedTask.id + "</td>",
        "<td>" + definedTask.task + "</td>",
        "<td  class='define' style='display:none;'><input class='defineCtl' id='defineTaskName' type='text'></td>",
        "<td class=''>" + definedTask.frequency + "</td>",
        "<td  class='edit' style='display:none;'><input class='editCtl' id='defineFreq' type='text'></td>",
        "<td class=''></td>",
        "<td  class='edit' style='display:none;'><input class='editCtl' id='editUserName' type='text'></td>",
        "<td  class='define' style='display:none;'><select class='defineCtl userSelect' id='editUserName'></select></td>",
        "<td> <button class='task-item'>Edit</button> <button class='delete'>Delete</button></td>",
        "<td  class='define' style='display:none;'><button class='defineCtl' id='editSubmit'>Finish</button></td>",
        "</tr>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", definedTask.id);
    $newInputRow.find("input.define").css("display", "none");
    $newInputRow.data("definedTask", definedTask);

    return $newInputRow;
  }
});
