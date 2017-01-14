const inputValidator = (output, val, overwrite) => {

  output = output.toString();

  if (overwrite || (/^0$/.test(output))) output = "";

  if (output.length > 24) val = "";

  return output + val;

};

export default inputValidator;
