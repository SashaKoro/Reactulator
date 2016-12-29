const inputCheck = function(output, val, overwrite) {

  output = output.toString();

  //document.getElementById("calc").style.background = "rgb(198, 254, 202)";

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

  if (String(output).length > 21) {
    val = "";
    output = "";
   // document.getElementById("calc").style.background = "rgb(255, 25, 0)";
  }

  output += val;
  return output;
};

export default inputCheck;
