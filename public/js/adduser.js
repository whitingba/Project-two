// The API object contains methods for each kind of request we'll make

$(document).ready(function() {
  // Add event listeners to the submit and delete buttons
  $("#submit").on("click", function() {
    event.preventDefault();
    console.log("Ahhhhhh!");
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
      console.log(userName);
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

    //   });
    // API.saveUser(userName, password).then(function() {
    //   console.log(userName, password);
    // });
  });
});
