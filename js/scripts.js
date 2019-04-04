
var romanNumeral = function(input) {
  if(input === 1) {
    return "I";
  };
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
