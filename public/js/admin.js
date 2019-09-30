$(document).ready(function() {
  $("#addTaskBtn").on("click", function() {
    event.preventDefault();
    var addTask = $("#addTaskInput").val();
    if (addTask === "") {
      $(".modal").modal("toggle");
    } else {
      //TODO: Add the task to the database
    }
  });
});
