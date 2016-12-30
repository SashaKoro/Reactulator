const ClearLast = output => {

  output = output.toString();

  //Clear error here

  if (output.slice(-1) === " ") {
    output = output.slice(0, -3);
  } else {
    output = output.slice(0, -1);
  }
  return output;
};

export default ClearLast;
