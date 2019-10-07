$(document).ready(function () {
    var $userContainer = $(".user-container");

    //***************EVENT LISTENERS***************/
    $(document).on("click", "button.delete", deleteUser);
    $(document).on("click", "button.editCtl", toggleFinish);
    $(document).on("click", ".user-item", editUser);
    $(document).on("click", ".editCtl", finishEdit);

    // Our initial tasks array
    var users = [];

    // Getting tasks from database when page loads
    getUsers();

    // This function resets the users displayed with new users from the database
    function initializeRows() {
        $userContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < users.length; i++) {
            rowsToAdd.push(createNewRow(users[i]));
            console.log('user' + i + ':' + JSON.stringify(users[i]));
        }
        $userContainer.append(rowsToAdd);
    }

    //***************GET USERS FROM DATABASE***************/
    function getUsers() {
        $.get("/api/users", function (data) {
            users = data;
            //console.log(users);
            initializeRows();
        });
    }

    //***************DELETE USERS***************/
    function deleteUser(event) {
        event.stopPropagation();
        console.log(id);
        var id = $(this).data("id");

        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id
        }).then(getUsers);
    }

    //****************EDIT USERS****************/
    //opens up the user boxes for editing
    function editUser() {
        var currentUser = $(this).parent().parent().data("user");
        console.log($(this).parent().parent());
        $(this).parent().parent().children().hide();
        $(this).parent().parent().find('#editId').val(currentUser.id);
        $(this).parent().parent().find('#editUsername').val(currentUser.userName);
        $(this).parent().parent().find('#editPassword').val(currentUser.password);
        $(this).parent().parent().children("td.edit").show();
        //$(this).children("input.edit").show();
        $(this).parent().parent().find('#editUsername').focus();
    }

    //TODO: enable completing users here 
    function toggleFinish(event) {
        event.stopPropagation();
        var id = $(this).parent().parent().find('#editId').val();
        var userName = $(this).parent().parent().find('#editUsername').val();
        var password = $(this).parent().parent().find('#editPassword').val();
        var user = $(this).parent().parent().data("user");
        user.finish = !user.finish;
        updateUser(id, userName, password);
    }

    //***************EDIT USERS IN DATABASE***************/
    function finishEdit(event) {
        var updatedUser = $(this).parent().parent().data("user");
        if (event.which === 13) {
            updatedUser.user = $(this).children("input").val().trim();
            $(this).blur();
            updateUser(updatedUser);
        }
    }

    function updateUser(id, userName, password) {
        console.log('userName1: ', userName);
        console.log('password1: ', password);
        $.ajax({
            method: "PUT",
            url: "/api/users",
            data: {
                id: id,
                userName: userName,
                password: password
            },
        }).then(getUsers);
    }

    // This function constructs a user-item row
    function createNewRow(user) {
        var $newInputRow = $(
            [
                "<tr>",
                //<span class="user-container"></span>
                "<td>" + user.id + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editId' type='text' style='display:none;'>" + user.id + "</td>",
                "<td class=''>" + user.userName + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editUsername' type='text'></td>",
                "<td class=''>" + user.password + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editPassword' type='text'></td>",
                "<td> <button class='user-item'>Edit</button> <button class='delete'>Delete</button></td>",
                "<td  class='edit' style='display:none;'><button class='editCtl' id='editSubmit'>Finish</button></td>",
                "</tr>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", user.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("user", user);
        if (user.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

});
