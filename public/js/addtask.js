$(document).ready(function() {
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
    console.log(taskObject);
  });
});

//Show a modal if there is no info, but the Add Task button was clicked
// if (task === "") {
//   $(".modal").modal("toggle");

//   //add the task to the database
// } else {
//   var taskObject = {
//     task: task.trim(),
//     frequency: frequency.trim(),
//     owner: owner.trim()
//   };
//   console.log(taskObject);
// $.ajax({
//   type: "POST",
//   url: "/api/tasks",
//   data: taskObject,
//   success: function(newTask) {
//     console.log(
//       "Yehhhh" +
//         newTask.task +
//         " " +
//         newTask.frequency +
//         " " +
//         newTask.owner
//     );
//   },
//   error: function() {
//     console.log("Nope.  Got it wrong.");
//   }
// });
//     }
//   });
// });
