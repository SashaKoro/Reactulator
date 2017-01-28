import * as is from '../stringConstants/stringConstants';

const longValidator = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input) && !/\+/.test(input)) {
    input = '';
  }

  return input === '' ? is.ENTER_A_NUMBER : Number(input);
};

export default longValidator;
