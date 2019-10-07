

$(document).ready(function () {

    //var $newItemInput = $("input.new-item"); //USER: not adding users in this screen
    // Our new todos will go inside the todoContainer
    var $userContainer = $(".user-container"); //TODO: will not be adding users in this screen
    // Adding event listeners for deleting, editing, and adding users

    //***************EVENT LISTENERS***************/
    $(document).on("click", "button.delete", deleteUser);
    $(document).on("click", "button.editCtl", toggleFinish);
    $(document).on("click", ".user-item", editUser);
    $(document).on("click", ".editCtl", finishEdit);
    // $(document).on("submit", "#todo-form", insertTodo);

    // Our initial tasks array
    var users = [];

    // Getting tasks from database when page loads
    getUsers();


    //DO NOT BELIEVE THIS IS NEEDED SINCE USERS ARE NOT BEING ADDED IN THIS SCREEN
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

        var url = '/api/users/' + id;
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id  //USER: pay attention this if there is an issue with deleting. Having issues with testing in postman
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
        var id = $('#editId').val();
        var userName = $('#editUsername').val();
        var password = $('#editPassword').val();
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


    // function cancelEdit() {
    //     var currentUser = $(this).data("user");
    //     if (currentUser) {
    //         $(this).children().hide();
    //         $(this).children("input.edit").val(currentUser.text);
    //         $(this).children("span").show();
    //         $(this).children("button").show();
    //     }
    // }


    // This function constructs a user-item row
    function createNewRow(user) { //FIXME: call this function
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


                // "<li class='list-group-item user-item'>", //USER: .list-group-item has styling
                //     "<span>",
                //     user.user,
                //     "</span>",
                //     "<input type='text' class='edit' style='display: none;'>", //TODO: .edit had styling
                //     "<button class='delete btn btn-danger'>Delete</button>",
                //     //"<button class='complete btn btn-primary'>✓</button>",
                //     "</li>"
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

    //new users will not be added in this screen
    // This function inserts a new user into our database and then updates the view
    // function insertTask(event) {
    //     event.preventDefault();
    //     var todo = {
    //         text: $newItemInput.val().trim(),
    //         complete: false
    //     };

    //     $.post("/api/todos", todo, getTodos);
    //     $newItemInput.val("");
    // }
});
