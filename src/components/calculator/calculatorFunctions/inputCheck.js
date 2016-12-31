const inputCheck = (output, val, overwrite) => {

  output = output.toString();

  // Clear error

  if (Object.is(overwrite, 'maybe')) {
    if (!val.endsWith(" ") && !output.endsWith(" ")) {
      output = "";
    }
  }

  if (val.endsWith(" ") && output.endsWith(" ")) {
    output = output.slice(0, -3);
  }

  if (val === "." && output.endsWith(".")) {
    output = output.slice(0, -1);
  }

  if (/^0$/.test(output) && (val !== "." && !val.endsWith(" "))) {
    output = "";
  }
  if (output.endsWith(" 0") && (val !== "." && !val.endsWith(" "))) {
    output = output.slice(0, -1);
  }

  if (output.length > 21) {
    val = "";
    output = "";
   // Throw error
  }

  return output + val;
};

export default inputCheck;
