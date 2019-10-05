$(document).ready(function() {
  //
  //Caputure the values of the inputs
  $("#addTaskBtn").on("click", function() {
    event.preventDefault();
    task = $("#taskInput").val();
    frequency = $("#taskFrequency").val();
    owner = $("#taskOwner").val();
    var taskObject = {
      task: task,
      frequency: frequency,
      owner: owner
    };

    // Show a modal if there is no info, but the Add Task button was clicked
    if (task === "") {
      console.log(task);
      $(".modal").modal("toggle");
    } else {
      var taskObject = {
        task: task.trim(),
        frequency: frequency.trim(),
        UserId: owner.trim()
      };

      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/tasks",
        data: JSON.stringify(taskObject),
        dataType: "json",
        error: function(err) {
          console.log("Fucking error: ", err);
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
