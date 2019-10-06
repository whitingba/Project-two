$(document).ready(function () {

    var $taskContainer = $(".task-container");

    //***************EVENT LISTENERS***************/
    $(document).on("click", "button.delete", deleteTask);
    $(document).on("click", "button.editCtl", toggleFinish);
    $(document).on("click", ".task-item", editTask);
    $(document).on("click", ".editCtl", finishEdit);
    //$(document).on("blur", ".task-item", cancelEdit);
    // $(document).on("submit", "#todo-form", insertTodo);

    // Our initial tasks array
    var tasks = [];


    // Getting tasks from database when page loads
    getTasks();


    // This function resets the tasks displayed with new tasks from the database
    function initializeRows() {
        $taskContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < tasks.length; i++) {
            rowsToAdd.push(createNewRow(tasks[i]));
            console.log('task' + i + ':' + JSON.stringify(tasks[i]));
        }
        $taskContainer.append(rowsToAdd);
    }

    //***************GET TASKS FROM DATABASE***************/
    function getTasks() {
        $.get("/api/tasks", function (data) {
            tasks = data;
            //console.log(tasks);
            initializeRows();
        });
    }

    //***************DELETE TASKS***************/
    function deleteTask(event) {
        event.stopPropagation();

        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/tasks/" + id
        }).then(getTasks);
    }

    //****************EDIT TASKS****************/
    //opens up the task boxes for editing
    function editTask() {
        var currentTask = $(this).parent().parent().data("task");
        console.log($(this).parent().parent().children());
        $(this).parent().parent().children().hide();
        $(this).parent().parent().find('#editId').val(currentTask.id);
        $(this).parent().parent().find('#editTaskName').val(currentTask.task);
        $(this).parent().parent().find('#editFreq').val(currentTask.frequency);
        $(this).parent().parent().find('#editUserName').val(currentTask.User.userName);
        $(this).parent().parent().children("td.edit").show();
        //$(this).children("input.edit").show();
        $(this).parent().parent().find('#editTaskName').focus();
    }


    function toggleFinish(event) {
        event.stopPropagation();
        var id = $('#editId').val();
        var task = $('#editTaskName').val();
        var frequency = $('#editFreq').val();
        var owner = $('#editUserName').val();
        task.finish = !task.finish;
        updateTask(id, task, frequency, owner);
    }

    //***************EDIT TASKS IN DATABASE***************/
    function finishEdit(event) {
        var updatedTask = $(this).parent().parent().data("task");
        if (event.which === 13) {
            updatedTask.task = $(this).children("input").val().trim();
            $(this).blur();
            updateTask(updatedTask);
        }
    }


    function updateTask(id, task, frequency, owner) {
        // console.log('Owner1: ', owner);
        // console.log('task1: ', task);
        //console.log('frequency1: ', frequency);
        $.ajax({
            method: "PUT",
            url: "/api/tasks",
            data: {
                id: id,
                task: task,
                frequency: frequency,
                owner: owner
            },
        }).then(getTasks);
    }

    // This function constructs a task-item table for each task
    function createNewRow(task) {
        var $newInputRow = $(
            [
                "<tr>",
                //<span class="task-container"></span>
                "<td>" + task.id + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editId' type='text' style='display:none;'>" + task.id + "</td>",
                "<td>" + task.task + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editTaskName' type='text'></td>",
                "<td class=''>" + task.frequency + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editFreq' type='text'></td>",
                "<td class=''>" + task.User.userName + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editUserName' type='text'></td>",
                "<td> <button class='task-item'>Edit</button> <button class='delete'>Delete</button></td>",
                "<td  class='edit' style='display:none;'><button class='editCtl' id='editSubmit'>Finish</button></td>",
                "</tr>"

            ].join("")
        );

        $newInputRow.find("button.delete").data("id", task.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("task", task);
        //if (task.finish) {
        //    $newInputRow.find("span").css("text-decoration", "line-through");
        // }
        return $newInputRow;
    }

    //******Function to get the users to be displayed in the table*******//
    function getUsers() {
        $.get("api/users", renderUserList);
    }

    //Initial users array
    var users = [];
    //function to render the list of users
    function renderUserList() {
        var usersToAdd = [];
        for (var i = 0; i < users.length; i++) {
            usersToAdd.push(createSelect(users[i]));
            // console.log('users' + i + ':' + JSON.stringify(users[i]));
        }
    }

    //create a select box for the available users
    function createSelect() {
        var $inputUserSelect = $(
            [
                "<select id='userNames'></select>"
            ]
        )
    }


});
