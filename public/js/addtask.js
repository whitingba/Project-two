$(document).ready(function() {
  //
  var ownerOptions = $("#taskOwner");

  var API = {
    getUsers: function() {
      return $.ajax({
        url: "/api/users",
        type: "GET"
      });
    }
  };

  function listUsers() {
    API.getUsers().then(function(data) {
      data = data;
      for (var i = 0; i < data.length; i++) {
        var optionData = $(
          "<option id='tOption' data-owner='" +
            data[i].id +
            "'>" +
            data[i].userName +
            "</option>"
        );
        ownerOptions.append(optionData);
      }
    });
  }
  listUsers();

  //Caputure the values of the inputs
  $("#addTaskBtn").on("click", function() {
    event.preventDefault();
    task = $("#taskInput").val();
    frequency = $("#taskFrequency").val();
    owner = $("#tOption").data("owner");
    // console.log(owner);

    var taskObject = {
      task: task,
      frequency: frequency,
      UserId: owner
    };

    // Show a modal if there is no info, but the Add Task button was clicked
    if (task === "") {
      console.log(task);
      $(".modal").modal("toggle");
    } else {
      var taskObject = {
        task: task.trim(),
        frequency: frequency.trim(),
        UserId: owner
      };

      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/tasks",
        data: JSON.stringify(taskObject),
        dataType: "json",
        error: function(err) {
          console.log(err);
        }
      });

      // Reset FormData after Posting
      function resetData() {
        $("#taskInput").val("");
      }
      resetData();
    }
  });
});
