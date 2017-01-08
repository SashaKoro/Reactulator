const inputValidator = (output, val, overwrite) => {

  output = output.toString();

  switch(true){
    case overwrite:
    case /^0$/.test(output):
      output = "";
      break;
    case output.length > 24:
      val = "";
  }
  return output + val;

};

export default inputValidator;
