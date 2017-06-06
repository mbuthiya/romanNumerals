// Business Logic
function testOne(number){
  if(number===1){
    return "I"
  }

}


// User interface logic
$(document).ready(function () {

  // form submit
  $("#numInputForm").submit(function () {

    var numInput=$("#inputForm").val();
    $("#inputForm").val("");


    event.preventDefault();
  })

})
