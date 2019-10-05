// Get references to page elements
var $userEntry = $("#user-entry");
var $userPassword = $("#user-password");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    userName: $userEntry.val().trim(),
    password: $userPassword.val().trim()
  };

  if (!(user.userName && user.password)) {
    alert("You must enter an user name and password!");
    return;
  }

  API.saveUser(user).then(function() {
    console.log(user);
  });

  $userEntry.val("");
  $userPassword.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
