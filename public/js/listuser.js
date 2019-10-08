// Get references to page elements
$(document).ready(function () {
  var $userList = $("#user-list");
  var taskData;
  // The API object contains methods for each kind of request we'll make
  var API = {
    getUsers: function () {
      return $.ajax({
        url: "/api/users",
        type: "GET"
      });
    }
  };

  var API2 = {
    getTasks: function () {
      return $.ajax({
        url: "/api/tasks",
        type: "GET"
      });
    }
  };

  function getTask() {
    API2.getTasks().then(function (taskTable) {
      taskData = taskTable;
      return taskData;
    });
  }

  // refreshUsers gets new users from the db and repopulates the list
  var refreshUsers = function () {
    API.getUsers().then(function (data) {
      console.log(data);

      // Here we then log the data to console, where it will show up as an object.
      console.log("------------------------------------");

      // Loop through and display each of the customers

      for (var i = 0; i < data.length; i++) {
        var listItem = $("<li class='list-group-item mt-4'>").attr({
          "data-id": data[i].id
        });

        listItem.append(
          $(
            "<h2>User Name: <a href='../edit/user'>" +
            data[i].userName +
            "</a>"
          )
        );

        for (var k = 0; k < taskData.length; k++) {
          if (taskData[k].UserId === data[i].id) {
            listItem.append(
              $(
                "<h4 style='text-indent:50px'> Task " +
                (k + 1) +
                ":" +
                taskData[k].task +
                "</h4>"
              )
            );
          }
        }

        $userList.append(listItem);
      }

      // for (var k = 0; k < taskData.length; k++) {
      //   console.log(taskData[k].task);
      // }
    });
  };
  getTask();
  refreshUsers();
});
