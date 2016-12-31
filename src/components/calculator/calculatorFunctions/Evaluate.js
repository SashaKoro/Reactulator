const Evaluate = output => {

  output = output.toString();

  if (output.endsWith(" ") || output.startsWith(" /") || output.startsWith(" *") || output.startsWith(". ") || output.endsWith(" .")  || / \. /.test(output)) {
    // Throw error here
    return output;
  }
  if (output === "0 / 0") {
    output = Infinity;
    return output;
  }
  if (output !== "") {
    output = eval(output);
    if (Object.is(output, NaN)) {
      output = Infinity;
    }
    return output;
  }
};

export default Evaluate;
