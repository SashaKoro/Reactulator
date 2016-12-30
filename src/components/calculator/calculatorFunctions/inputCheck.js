const inputCheck = (output, val, overwrite) => {

  output = output.toString();

  // Clear error

  if (overwrite === 'maybe') {
    if ((val != " + " && val != " - " && val != " / " && val != " * ") && output.slice(-1) != " ") {
      output = "";
    }
  }

  if ((val == " + " || val == " - " || val == " / " || val == " * ") && output.slice(-1) == " ") {
    output = output.slice(0, -3);
  }

  if (val == "." && output.slice(-1) == ".") {
    output = output.slice(0, -1);
  }

  if (/^0$/.test(output) == true && (val != "." && val != " / " && val != " * " && val != " - " && val != " + ")) {
    output = "";
  }
  if (output.slice(-2) == " 0" && (val != "." && val != " / " && val != " * " && val != " - " && val != " + ")) {
    output = output.slice(0, -1);
  }

  if (output.length > 21) {
    val = "";
    output = "";
   // Throw error
  }

  output += val;
  return output;
};

export default inputCheck;
