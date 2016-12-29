const ClearLast = function(output) {

  output = output.toString();
  //document.getElementById("calc").style.background = "rgb(198, 254, 202)";
  if (output.slice(-1) === " ") {
    output = output.slice(0, -3);
  }
  else {
    output = output.slice(0, -1);
  }
  return output;
};

export default ClearLast;
