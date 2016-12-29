function woodallGenerator(inputnum) {
  if (/[a-z]/i.test(inputnum) === true || inputnum === ".") {
    inputnum = "";
  }
  if (inputnum === "") {
    return "Please enter a number";
  }
  if (/\./.test(inputnum) === true) {
    inputnum = "Number must be an Integer";
    return inputnum;
  }
  inputnum = Number(inputnum);
  return inputnum * Math.pow(2, inputnum) - 1;
}
