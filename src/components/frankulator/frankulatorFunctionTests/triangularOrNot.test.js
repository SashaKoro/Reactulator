import triangularOrNot from '../frankulatorFunctions/triangularOrNot';
import expect from 'expect';

describe('triangularOrNot', () => {
  it('expects correct Triangular number evaluation', () => {
    expect(triangularOrNot(1)).toEqual("1 is a tri number");
    expect(triangularOrNot(3)).toEqual("3 is a tri number");
    expect(triangularOrNot(55)).toEqual("55 is a tri number");
    expect(triangularOrNot(76576500)).toEqual("76576500 is a tri number");
    expect(triangularOrNot(34532452345)).toEqual("34532452345 is NOT tri");
    expect(triangularOrNot(60)).toEqual("60 is NOT tri");
  });
});
