const Evaluate = function(output) {

  output = output.toString();

  if (output.slice(-1) === " " || output.slice(1, 2) == "/" || output.slice(1, 2) == "*" || output.slice(0,2) == ". " || output.slice(-2) == " ."  || / \. /.test(output) == true) {
    //document.getElementById("calc").style.background = "rgb(255, 25, 0)";
    return output;
  }
  if (output == "0 / 0") {
    output = Infinity;
    return output;
  }
  if (output != "") {
    output = eval(output);
    if (isNaN(output) === true) {
      output = Infinity;
    }
    return output;
  }
}

export default Evaluate;
