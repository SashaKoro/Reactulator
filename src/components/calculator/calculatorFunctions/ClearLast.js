const clearLast = (output) => {
  let newOutput = output.toString();
  return (newOutput.endsWith(' ')) ? newOutput.slice(0, -3) : newOutput.slice(0, -1);
};

export default clearLast;
