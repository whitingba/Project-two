$(document).ready(function() {
  $("#btnSubmit").on("click", function() {
    event.preventDefault();
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();

    if (userName === "" || userPassword === "") {
      $(".modal").modal("toggle");
    } else {
      userName = userName.trim();
      userPassword = userPassword.trim();
      //TODO: Authentication stuff.
    }
  });
});
