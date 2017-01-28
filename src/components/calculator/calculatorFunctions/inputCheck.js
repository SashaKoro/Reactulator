const inputCheck = (output, val, overwrite) => {
  let newOutput = output.toString();
  let value = val;

  if (
    overwrite && (!value.endsWith(' ') && !newOutput.endsWith(' ')) ||
    /^0$/.test(newOutput) && (value !== '.' && !value.endsWith(' '))
  ) {
    newOutput = '';
  } else if (
    (value === '.' && newOutput.endsWith('.')) ||
    (newOutput.endsWith(' 0') && (value !== '.' && !value.endsWith(' ')))
  ) {
    newOutput = newOutput.slice(0, -1);
  } else if (value.endsWith(' ') && newOutput.endsWith(' ')) {
    newOutput = newOutput.slice(0, -3);
  } else if (newOutput.length > 21) {
    value = '';
    newOutput = '';
  }

  return newOutput + value;
};

export default inputCheck;
