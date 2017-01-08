const Evaluate = output => {

  output = output.toString();

  switch(true){
    case output.endsWith(" "):
    case output.startsWith(" /"):
    case output.startsWith(" *"):
    case output.startsWith(". "):
    case output.endsWith(" ."):
    case / \. /.test(output):
      return output;
    case output === "0 / 0":
      return Infinity;
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
