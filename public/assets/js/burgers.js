// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eat").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).attr("data-newdevoured");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#hamburguesa").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

});