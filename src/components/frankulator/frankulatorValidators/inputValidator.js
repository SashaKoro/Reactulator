const inputValidator = (output, val, overwrite) => {
  let newOutput = output.toString();
  let value = val;

  if (overwrite || (/^0$/.test(newOutput))) {
    newOutput = '';
  }
  if (newOutput.length > 24) {
    value = '';
  }

  return newOutput + value;
};

export default inputValidator;
