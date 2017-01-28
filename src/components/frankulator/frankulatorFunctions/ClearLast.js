const clearLast = (output) => {
  let newOutput = output.toString();
  return newOutput.slice(0, -1);
};

export default clearLast;
