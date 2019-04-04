var arabicNumbersList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var romanNumeralList = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

// function convert(number) {
//   if (input > 3999) {
//     return "Roman Numerals do not go higher than 3,999";
//   } else {
//     console.log(input);
//   }
// };

function returnNumeral (number) {
  var romanNumeral = "";
  if (number > 3999) {
    return "Roman Numerals do not go higher than 3,999";
  } for (var i = arabicNumbersList.length-1; i >= 0; i--) {
    while (number >= arabicNumbersList[i]) {
      number -= arabicNumbersList[i];
      romanNumeral += romanNumeralList[i];
    }
  } return romanNumeral;
};

$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    var numberInput = parseInt($("#integer-input").val());
    var result = returnNumeral(numberInput);
    $(".conversion").text(result);
    $("#result").show(result);
  });
});
