// Get references to page elements
$(document).ready(function() {
  var $userList = $("#user-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    getUsers: function() {
      return $.ajax({
        url: "/api/users",
        type: "GET"
      });
    }
    // deleteUsers: function(id) {
    //   return $.ajax({
    //     url: "api/users/" + id,
    //     type: "DELETE"
    //   });
    // }
  };

  // refreshUsers gets new users from the db and repopulates the list
  var refreshUsers = function() {
    API.getUsers().then(function(data) {
      console.log(data);
      // Here we then log the data to console, where it will show up as an object.
      console.log("------------------------------------");
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      // Loop through and display each of the customers
      for (var i = 0; i < data.length; i++) {
        // Get a reference to the tableList element and populate it with tables

        // Then display the fields in the HTML (Section Name, Date, URL)
        var listItem = $("<li class='list-group-item mt-4'>").attr({
          "data-id": data[i].id
        });

        var $h2 = $("<h2>");
        $h2.append();

        listItem.append(
          $(
            "<h2>User Name: <a href=edit/user/" +
              data[i].id +
              ">" +
              data[i].userName +
              "</a>"
          )
        );

        $userList.append(listItem);
      }
    });
  };

  // handleDeleteBtnClick is called when an user's delete button is clicked
  // Remove the users from the db and refresh the list
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this).attr("data-id");

  //   API.deleteUsers(idToDelete).then(function() {
  //     refreshUsers();
  //   });
  // };

  // // Add event listeners to the submit and delete buttons
  // $userList.on("click", ".delete", handleDeleteBtnClick);
  refreshUsers();
});
