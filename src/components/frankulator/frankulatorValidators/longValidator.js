import * as is from '../stringConstants/stringConstants';

const longValidator = inputNum => {

  if (/[a-z]/i.test(inputNum) && !/\+/.test(inputNum)) inputNum = '';

  return (inputNum === "") ? is.ENTER_A_NUMBER : Number(inputNum);

};

export default longValidator;
