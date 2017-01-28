const evaluate = (output) => {
  let newOutput = output.toString();

  if (
    newOutput.endsWith(' ') ||
    newOutput.startsWith(' /') ||
    newOutput.startsWith(' *') ||
    newOutput.startsWith('. ') ||
    newOutput.endsWith(' .') ||
    / \. /.test(newOutput)
  ) {
    return newOutput;
  } else if (newOutput === '0 / 0') {
    return Infinity;
  }

  if (newOutput !== '') newOutput = eval(newOutput);
  if (Object.is(newOutput, NaN)) newOutput = Infinity;

  return String(newOutput);
};

export default evaluate;
