// Get references to page elements
$(document).ready(function() {
  var $userList = $("#user-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    getUsers: function() {
      return $.ajax({
        url: "api/user",
        type: "GET"
      });
    },
    deleteUsers: function(id) {
      return $.ajax({
        url: "api/user/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshUsers gets new users from the db and repopulates the list
  var refreshUsers = function() {
    API.getUsers().then(function(data) {
      var $users = data.map(function(user) {
        var $a1 = $("<a>")
          .text(user.text)
          .attr("href", "/user/" + user.id);
        var $a2 = $("<a>")
          .text(user.description)
          .attr("href", "/user/" + user.id);
        var $button = $("<button>")
          .attr({
            class: "btn btn-danger float-right delete",
            "data-id": user.id
          })
          .text("ｘ");

        var $td = $("<td>");
        var $td1 = $("<td>").append($a1);
        var $td2 = $("<td>").append($a2);
        var $td3 = $("<td>").append($button);

        var $tr = $("<tr>")
          .attr({
            "data-id": user.id
          })
          .append($td1)
          .append($td2)
          .append($td)
          .append($td3);

        return $tr;
      });

      $userList.empty();
      $userList.append($users);
    });
  };

  // handleDeleteBtnClick is called when an user's delete button is clicked
  // Remove the users from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this).attr("data-id");

    API.deleteUsers(idToDelete).then(function() {
      refreshUsers();
    });
  };

  // Add event listeners to the submit and delete buttons
  $userList.on("click", ".delete", handleDeleteBtnClick);
});
