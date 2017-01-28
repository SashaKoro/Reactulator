import * as is from '../stringConstants/stringConstants';

const shortValidator = (inputNum) => {
  let input = inputNum;
  if (/[a-z]/i.test(input)) {
    input = '';
  }
  if (input === '') {
    return is.ENTER_A_NUMBER;
  } else if (String(input).length > 12) {
    return is.TOO_LONG;
  }

  return Number(input);
};

export default shortValidator;
