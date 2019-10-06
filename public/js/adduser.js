// The API object contains methods for each kind of request we'll make

$(document).ready(function() {
  // Add event listeners to the submit and delete buttons
  $("#submit").on("click", function() {
    event.preventDefault();
    userName = $("#user-entry")
      .val()
      .trim();
    password = $("#user-password")
      .val()
      .trim();
    console.log(userName, password);

    var userObject = {
      userName: userName,
      password: password
    };
    //Show a modal if there is no info, but the Add Task button was clicked
    if (userName === "") {
      $(".modal").modal("toggle");
    } else {
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/users",
        data: JSON.stringify(userObject),
        dataType: "json",
        error: function(err) {
          console.log("Fucking error: ", err);
        }
      });

      function resetUser() {
        $("#user-entry").val("");
        $("#user-password").val("");
      }
      resetUser();
    }
  });
});
