const ClearLast = output => {

  output = output.toString();
  return (output.endsWith(' ')) ? output.slice(0, -3) : output.slice(0, -1);
};

export default ClearLast;
