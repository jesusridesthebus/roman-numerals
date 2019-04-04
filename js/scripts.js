var arabicNumbersList = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"];
var romanNumeralList = [];

function romanNumeral(input) {
  if (input > 3999) {
    return "Roman Numerals do not go higher than 3,999";
  } else if
};



$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#integer-input").val());
    var result = romanNumeral(numberInput);
    $("#result").show(result);
    $(".conversion").text(result);
  });
});
