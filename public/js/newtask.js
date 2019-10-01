$(document).ready(function() {
  $("#addTaskBtn").on("click", function() {
    event.preventDefault();
    task = $("#taskInput").val();
    season = $("#taskSeason").val();
    frequency = $("#taskFrequency").val();
    owner = $("#taskOwner").val();
    loc = $("#taskLocation").val();

    //Caputure the values of the inputs

    //Show a modal if there is no info, but the Add Task button was clicked
    if (task === "") {
      $(".modal").modal("toggle");

      //this is where the task is actually added to the database
    } else {
      task = task.trim();
      console.log(task, season, frequency, owner, loc);
    }
  });
});
