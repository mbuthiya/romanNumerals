// Business Logic
var romans={
  one:"I",
  two:"II",
  three:"III",
  four:"IV",
  five:"V",
  ten:"X",
  fifty:"L",
  hunderd:"C",
  fifHundred:"D",
  thousand:"M"
}

//createa function that loops till number gets to 0
function convert(number){
    var convertedNumber=" ";
  if(number ===0 || number === null){

    return "Please enter a number greater than 0";

  }else{
    while (number > 0) {

      if(number >= 1000){
        convertedNumber=convertedNumber+romans.thousand;
        number -= 1000;

      }else if (number >= 500) {
        convertedNumber=convertedNumber+romans.fifHundred;
        number -=500;
      }else if (number >= 100) {
        convertedNumber=convertedNumber+romans.hunderd;
        number -= 100;
      }else if (number >= 50) {
        convertedNumber=convertedNumber+romans.fifty;
        number -= 50;
      }else if (number >=10) {
        convertedNumber=convertedNumber+romans.ten;
        number -= 10;
      }else if (number >= 5) {
        convertedNumber=convertedNumber+romans.five;
        number -= 5;

      }else if (number ===4) {
        convertedNumber=convertedNumber+romans.four;
        number -=4;


    }else if (number ===3) {
        convertedNumber=convertedNumber+romans.three;
        number -=3;


    }else if (number ===2) {
        convertedNumber=convertedNumber+romans.two;
        number -=2;


    }else if (number ===1) {
        convertedNumber=convertedNumber+romans.one;
        number -=1;

      }

    }

  }
  return convertedNumber;

}



console.log(romans.ten);

// User interface logic
$(document).ready(function () {

  // form submit
  $("#numInputForm").submit(function () {

    var numInput=Number($("#inputForm").val());
    $("#inputForm").val("");

    var resultNum= convert(numInput);
    console.log(resultNum);




    event.preventDefault();
  })

})
