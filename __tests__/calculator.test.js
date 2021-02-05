import { Calculator } from './../src/calculator.js';
describe ('Calculator', () => {
  let reusableCalculator;
  
  beforeEach(() => {
    reusableCalculator = new Calculator(32, 78);
  });
  test('should create a calculator object', () => {
      expect(reusableCalculator.age).toEqual(32);
    });

    test('should create a planet calculator', () => {
      expect(reusableCalculator.planetCalculator()).toEqual({ mercury: (32 / 6), venus: (32 / .64), mars: (32 / 1.88), jupiter: (32 / 11.86) });
  });
});