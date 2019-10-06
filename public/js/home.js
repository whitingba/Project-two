$(document).ready(function () {
  $(".addTask").on("click", function () {
    window.location = "add/task";
  });
  $(".editTask").on("click", function () {
    window.location = "edit/task";
  });
  $(".listTask").on("click", function () {
    window.location = "list/task";
  });
  $(".addUser").on("click", function () {
    window.location = "add/user";
  });
  $(".editUser").on("click", function () {
    window.location = "edit/user";
  });
  $(".listUser").on("click", function () {
    window.location = "list/user";
  });

  particlesJS.load('particles-js', 'particles.json');
});
