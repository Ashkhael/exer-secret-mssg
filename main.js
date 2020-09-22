function caesarCipher(input, shift) {
  var oldShift = shift.toString();
  var output = "";
  if (shift == 0 || shift >= 26 || shift <= -26 || isNaN(shift) == true) {
    return "Please enter number between -26 and 26.";
  }

  if (shift < 0) {
    shift = 26 + shift;
    //alternativno return caesarCipher(input, 26 + shift); - u ovom slučaju shift.toString ne vraća originalnu znamenku
  }

  for (var i = 0; i < input.length; i++) {
    var string = input[i];
    if (string.match(/[a-z]/)) {
      return "Only capital letters accepted.";
    }

    if (string.match(/[A-Z]/)) {
      var code = input.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        string = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
    }
    output += string;
  }

  var result =
    "```\ninput: " +
    input +
    "\nshift: " +
    oldShift +
    "\noutput: " +
    output +
    "\n```";
  return result;
}

console.log(caesarCipher("HELLO", -24));
