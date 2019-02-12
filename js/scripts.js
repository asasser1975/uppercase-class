$(document).ready(function() {
  $("#lc form").submit(function(event) {
    var nameInput = $("input#lowercase").val().toUpperCase();



    $(".text").text(nameInput);



    $("#form").show();

    event.preventDefault();
  });
});
