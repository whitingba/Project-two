$(document).ready(function() {
  var taskData = $("#tableBody");

  var API = {
    getTasks: function() {
      return $.ajax({
        url: "/api/tasks",
        type: "GET"
      });
    }
  };

  function listTasks() {
    API.getTasks().then(function(data) {
      data = data;
      for (var i = 0; i < data.length; i++) {
        var tableRow = $(
          "<tr><td>" +
            data[i].id +
            "</td><td>" +
            data[i].task +
            "</td><td>" +
            data[i].frequency +
            "</td><td>" +
            data[i].User.userName +
            "</td></tr>"
        );
        taskData.append(tableRow);
      }
    });
  }
  // console.log(data);
  // console.log(data[0].id);
  // console.log(data[0].task);
  // console.log(data[0].frequency);
  // console.log(data[0].User.userName);

  listTasks();
});
