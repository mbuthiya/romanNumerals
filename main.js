// Business Logic
function lessThanFive(number){
  if(number===1){
    return "I"
  }else(number < 5){
    return loopLessThanFive(number);
  }
}

function loopLessThanFive(number){
  var letters="I";
  for(var i=1;i<=number;i++){
    letters.concat("I");
  }
  return letters;
}


// User interface logic
$(document).ready(function () {

  // form submit
  $("#numInputForm").submit(function () {

    var numInput=parseInt($("#inputForm").val());
    $("#inputForm").val("");




    event.preventDefault();
  })

})
