// Business Logic
function lessThanFive(number){
  if(number===0 || number===null){
    return "Not a number";
  }else if(number===1){
    return "I"
  }else if(number < 5){
    return loopLessThanFive(number);
  }
}

function loopLessThanFive(number){
  var letters="I";
  for(var i=1;i<=number;i++){
    letters+"I";

  }
  return letters;

}


// User interface logic
$(document).ready(function () {

  // form submit
  $("#numInputForm").submit(function () {

    var numInput=Number($("#inputForm").val());
    $("#inputForm").val("");

    var resultNum= lessThanFive(numInput);
    console.log(resultNum);




    event.preventDefault();
  })

})
