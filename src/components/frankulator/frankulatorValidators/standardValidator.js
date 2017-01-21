import * as is from '../stringConstants/stringConstants';

const standardValidator = inputNum => {

  if (/[a-z]/i.test(inputNum)) inputNum = "";

  return (inputNum === "") ? is.ENTER_A_NUMBER : Number(inputNum);

};

export default standardValidator;
