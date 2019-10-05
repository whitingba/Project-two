

$(document).ready(function () {

    //var $newItemInput = $("input.new-item"); //TODO: not adding tasks in this screen
    // Our new todos will go inside the todoContainer
    var $taskContainer = $(".task-container"); //TODO: will not be adding tasks in this screen
    // Adding event listeners for deleting, editing, and adding todos

    //***************EVENT LISTENERS***************/
    $(document).on("click", "button.delete", deleteTask);
    //$(document).on("click", "button.complete", toggleComplete); //will not have a complete feature
    $(document).on("click", ".task-item", editTask);
    $(document).on("keyup", ".task-item", finishEdit);
    $(document).on("blur", ".task-item", cancelEdit);
    // $(document).on("submit", "#todo-form", insertTodo);

    // Our initial tasks array
    var tasks = [];

    // Getting tasks from database when page loads
    getTasks();


    //DO NOT BELIEVE THIS IS NEEDED SINCE TODOS ARE NOT BEING ADDED IN THIS SCREEN
    // This function resets the todos displayed with new todos from the database
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
            url: "/api/tasks/" + id  //TODO: pay attention this if there is an issue with deleting. Having issues with testing in postman
        }).then(getTasks);
    }

    //****************EDIT TASKS****************/
    function editTask() {
        var currentTask = $(this).parent().parent().data("task");

        $(this).parent().parent().children().hide();
        $(this).parent().parent().children("td.edit.editCtl").val(currentTask.task);//set the values here
        $(this).parent().parent().children("td.edit").show();
        //$(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    //TODO: will not enable completing tasks here, only deleting them // Toggles complete status
    // function toggleComplete(event) {
    //     event.stopPropagation();
    //     var todo = $(this).parent().data("todo");
    //     todo.complete = !todo.complete;
    //     updateTodo(todo);
    // }

    //***************EDIT TASKS IN DATABASE***************/
    function finishEdit(event) {
        var updatedTask = $(this).data("task");
        if (event.which === 13) {
            updatedTask.text = $(this).children("input").val().trim();
            $(this).blur();
            updateTask(updatedTask);
        }
    }


    function updateTask(task, frequency, owner) {
        $.ajax({
            method: "PUT",
            url: "/api/tasks",
            data: task, frequency, owner
        }).then(getTasks);
    }


    function cancelEdit() {
        var currentTask = $(this).data("task");
        if (currentTask) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentTask.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }


    // This function constructs a task-item row
    function createNewRow(task) { //FIXME: call this function
        var $newInputRow = $(
            [
                "<tr>",
                //<span class="task-container"></span>
                "<td>" + task.id + "</td>",
                "<td  class='edit' style='display:none;'>" + task.id + "</td>",
                "<td>" + task.task + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editTaskName' type='text'></td>",
                "<td class=''>" + task.frequency + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editFreq' type='text'></td>",
                "<td class=''>" + task.User.userName + "</td>",
                "<td  class='edit' style='display:none;'><input class='editCtl' id='editUserName' type='text'></td>",
                "<td> <button class='task-item'>Edit</button> <button class='delete'>Delete</button></td>",
                "<td  class='edit' style='display:none;'><button class='editCtl' id='editSubmit'>Finish</button></td>",
                "</tr>"


                // "<li class='list-group-item task-item'>", //TODO: .list-group-item has styling
                //     "<span>",
                //     task.task,
                //     "</span>",
                //     "<input type='text' class='edit' style='display: none;'>", //TODO: .edit had styling
                //     "<button class='delete btn btn-danger'>Delete</button>",
                //     //"<button class='complete btn btn-primary'>✓</button>",
                //     "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", task.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("task", task);
        if (task.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

    //new tasks will not be added in this screen
    // This function inserts a new todo into our database and then updates the view
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