const inputCheck = function(output, val, overwrite) {

  output = output.toString();

  if (overwrite === "yes") {
    output = "";
    //overWriteFrank = "";
  }

  if (val == "." && output.slice(-1) == ".") {
    output = output.slice(0, -1);
  }

  if (val == "." && /\./.test(output) == true) {
    val = "";
  }

  if(val != "." && /^0$/.test(output) == true) {
    output = "";
  }

  if (output.length > 30) {
    val = "";
  }
  output += val;
  return output;
};

export default inputCheck;
