$(document).ready(function() {
  $("#btnSubmit").on("click", function() {
    event.preventDefault();
    var newUserName = $("#newUserName").val();
    var newPassword = $("#newPassword").val();

    if (newUserName === "" || newPassword === "") {
      $(".modal").modal("toggle");
    } else {
      userName = userName.trim();
      userPassword = userPassword.trim();
      //TODO: Record userName and Password for storage.
    }
  });
});
