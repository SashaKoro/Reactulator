const shortValidator = function(inputNum) {

  if (/[a-z]/i.test(inputNum)) {
    inputNum = "";
  }
  if (inputNum === "") {
    return "Please enter a number";
  }

  if (String(inputNum).length > 12) {
    inputNum = "Sorry, number is too long";
    return inputNum;
  }

  inputNum = Number(inputNum);
  return inputNum;

};

export default shortValidator;


//it('expects 445309093234258 to be too long', function() {
//  expect(primeNumberOrNot(445309093234258)).toEqual("Sorry, number is too long");
//});
//it('expects blank string to prompt Please enter a number', function() {
//  expect(primeNumberOrNot()).toEqual("Please enter a number");
//});
//it('expects string w/ alpha chars. to prompt Please enter a number', function() {
//  expect(primeNumberOrNot("abcDEF")).toEqual("Please enter a number");
//});
