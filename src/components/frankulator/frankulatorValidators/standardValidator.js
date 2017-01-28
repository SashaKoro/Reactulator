import * as is from '../stringConstants/stringConstants';

const standardValidator = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input)) input = '';

  return input === '' ? is.ENTER_A_NUMBER : Number(input);
};

export default standardValidator;
