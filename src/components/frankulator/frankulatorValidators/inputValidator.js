const inputValidator = (output, val, overwrite) => {

  output = output.toString();

  if (overwrite === "yes") {
    output = "";
    //overWriteFrank = "";
  }

  if(/^0$/.test(output) == true) {
    output = "";
  }

  if (output.length > 24) {
    val = "";
  }

  return output + val;
};

export default inputValidator;
