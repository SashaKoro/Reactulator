const inputCheck = (output, val, overwrite) => {

  output = output.toString();

  switch(true){
    case (overwrite && (!val.endsWith(" ") && !output.endsWith(" "))):
    case (/^0$/.test(output) && (val !== "." && !val.endsWith(" "))):
      output = "";
      break;
    case (val === "." && output.endsWith(".")):
    case (output.endsWith(" 0") && (val !== "." && !val.endsWith(" "))):
      output = output.slice(0, -1);
      break;
    case (val.endsWith(" ") && output.endsWith(" ")):
      output = output.slice(0, -3);
      break;
    case (output.length > 21):
        val = "";
        output = "";
  }
  return output + val;
};

export default inputCheck;
