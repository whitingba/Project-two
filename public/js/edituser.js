

$(document).ready(function () {

    //var $newItemInput = $("input.new-item"); //USER: not adding users in this screen
    // Our new todos will go inside the todoContainer
    var $userContainer = $(".user-container"); //TODO: will not be adding users in this screen
    // Adding event listeners for deleting, editing, and adding users

    //***************EVENT LISTENERS***************/
    $(document).on("click", "button.delete", deleteUser);
    //$(document).on("click", "button.complete", toggleComplete); //will not have a complete feature
    $(document).on("click", ".user-item", editUser);
    $(document).on("keyup", ".user-item", finishEdit);
    $(document).on("blur", ".user-item", cancelEdit);
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

        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id  //USER: pay attention this if there is an issue with deleting. Having issues with testing in postman
        }).then(getUsers);
    }

    //****************EDIT USERS****************/
    function editUser() {
        var currentUser = $(this).parent().parent().data("user");

        $(this).parent().parent().children().hide();
        $(this).parent().parent().children("td.edit.editCtl").val(currentUser.user);//set the values here
        $(this).parent().parent().children("td.edit").show();
        //$(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    //USER: will not enable completing users here, only deleting them // Toggles complete status
    // function toggleComplete(event) {
    //     event.stopPropagation();
    //     var todo = $(this).parent().data("todo");
    //     todo.complete = !todo.complete;
    //     updateTodo(todo);
    // }

    //***************EDIT TASKS IN DATABASE***************/
    function finishEdit(event) {
        var updatedUser = $(this).data("user");
        if (event.which === 13) {
            updatedUser.text = $(this).children("input").val().trim();
            $(this).blur();
            updateUser(updatedUser);
        }
    }


    function updateUser(user, userName, password) {
        $.ajax({
            method: "PUT",
            url: "/api/users",
            data: user, userName, password
        }).then(getUsers);
    }


    function cancelEdit() {
        var currentUser = $(this).data("user");
        if (currentUser) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentUser.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }


    // This function constructs a user-item row
    function createNewRow(user) { //FIXME: call this function
        var $newInputRow = $(
            [
                "<tr>",
                //<span class="user-container"></span>
                "<td>" + user.id + "</td>",
                "<td  class='edit' style='display:none;'>" + user.id + "</td>",
                //"<td>" + user.user + "</td>",
               // "<td  class='edit' style='display:none;'><input class='editCtl' id='editTaskName' type='text'></td>",
                "<td class=''>" + user.userName + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editUsername' type='text'></td>",
                "<td class=''>" + user.password + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editpassword' type='text'></td>",
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