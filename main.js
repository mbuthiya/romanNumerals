// Business Logic



// User interface logic
$(document).ready(function () {

  // form submit
  $("#numInputForm").submit(function () {

    var numInput=$("#inputForm").val();
    $("#inputForm").val("");


    event.preventDefault();
  })

})
