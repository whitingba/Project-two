$(document).ready(function() {
  //API object containing every request type needed (CRUD)
  var API = {
    //add a task to the database
    addTask: function(task) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/tasks", //NOTE: not sure what endpoint is
        data: JSON.stringify(task)
      });
    },

    //get all users from the database
    getUsers: function() {
      return $.ajax({
        url: "api/users", //NOTE: not sure what endpoint is
        type: "GET"
      });
    },

    //get all tasks from the database
    getTasks: function() {
      return $.ajax({
        url: "api/tasks", //NOTE: not sure what endpoint is
        type: "GET"
      });
    },

    //delete a user from the database
    deleteUser: function(id) {
      return $.ajax({
        url: "api/tasks/" + id, //NOTE: not sure what endpoint is
        type: "DELETE"
      });
    },

    //delete a task from the database
    deleteTask: function(id) {
      return $.ajax({
        url: "api/users/" + id, //NOTE: not sure what endpoint is
        type: "DELETE"
      });
    },

    //update a task in the database
    updateTask: function(id) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/tasks/" + id, //NOTE: not sure what endpoint is
        data: JSON.stringify(id)
      });
    },

    //update a user in the database
    updateUser: function(id) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/user/" + id, //NOTE: not sure what endpoint is
        data: JSON.stringify(id)
      });
    }
  };

  //Add a Task to the Database
  $("#addTaskBtn").on("click", function() {
    event.preventDefault();

    //Caputure the value of the Add Task input
    var task = $("#addTaskInput")
      .val()
      .trim();

    //Show a modal if there is no info, but the Add Task button was clicked
    if (task === "") {
      $(".modal").modal("toggle");

      //this is where the task is actually added to the database
    } else {
      API.addTask(task).then(function() {
        console.log("Task added to database.");
      });
      $("#addTaskInput").text("");
    }
  });

  //TODO: Add logic to handle the All Tasks button click
  //TODO: Add logic to handle the All Users button click

  //TODO: Add logic to handle the Edit of a task
  //TODO: Add logic to handle the Delete of a task

  //TODO: Add logic to handle the Edit of a user
  //TODO: Add logic to handle the Delete of a user
});
