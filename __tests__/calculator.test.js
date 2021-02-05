import { Calculator } from './../src/calculator.js';
describe ('Calculator', () => {
  let reusableCalculator;
  
  beforeEach(() => {
    reusableCalculator = new Calculator(32, 78);
  });
test('should create a calculator object', ( ) => {
    expect(reusableCalculator.age).toEqual(32);
  });

  test('should create a planet calculator', ( ) => {
    expect(reusableCalculator.planetCalculator()).toEqual([(32 / .24), (32 / .62), (32 / 1.88), (32 / 11.86)]);
  });
});