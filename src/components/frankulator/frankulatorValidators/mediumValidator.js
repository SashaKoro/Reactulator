import * as is from '../stringConstants/stringConstants';

const mediumValidator = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input)) {
    input = '';
  }
  if (input === '') {
    return is.ENTER_A_NUMBER;
  }
  if (String(input).length > 15) {
    return is.TOO_LONG;
  }

  return Number(input);
};

export default mediumValidator;
