import triangularOrNot from '../frankulatorFunctions/triangularOrNot';
import expect from 'expect';

describe(triangularOrNot, function() {
  this.timeout(200);
  it('expects 1 to be triangular', function() {
    expect(triangularOrNot(1)).toEqual("1 is a tri number");
  });
  it('expects 3 to be triangular', function() {
    expect(triangularOrNot(3)).toEqual("3 is a tri number");
  });
  it('expects 55 to be triangular', function() {
    expect(triangularOrNot(55)).toEqual("55 is a tri number");
  });
  it('expects 76576500 to be triangular', function() {
    expect(triangularOrNot(76576500)).toEqual("76576500 is a tri number");
  });
  it('expects 34532452345 to NOT be triangular', function() {
    expect(triangularOrNot(34532452345)).toEqual("34532452345 is NOT tri");
  });
  it('expects 60 to NOT be triangular', function() {
    expect(triangularOrNot(60)).toEqual("60 is NOT tri");
  });
});
