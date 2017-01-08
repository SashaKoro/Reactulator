const ClearLast = output => {

  output = output.toString();

  switch(output.endsWith(' ')) {
    case true:
      return output.slice(0, -3);
    case false:
      return output.slice(0, -1);
  }
};

export default ClearLast;
