const ClearLast = output => {

  output = output.toString();

  if (output.endsWith(' ')) return output.slice(0, -3);
  return output.slice(0, -1);
};

export default ClearLast;
