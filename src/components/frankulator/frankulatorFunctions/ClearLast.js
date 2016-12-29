const ClearLast = function(output) {

  output = output.toString();
  output = output.slice(0, -1);

  return output;
};

export default ClearLast;
