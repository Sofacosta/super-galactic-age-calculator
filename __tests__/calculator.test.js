import { Calculator } from './../src/calculator.js';
describe ('Calculator', () => {
  let reusableCalculator;
  
  beforeEach(() => {
    reusableCalculator = new Calculator(32, 78);
  });
  test('should create a calculator object', () => {
    expect(reusableCalculator.age).toEqual(32);
  });

  test('should create a planet calculator returning your planet age', () => {
    expect(reusableCalculator.planetAgeCalculator()).toEqual({ mercury: 32 / .24, venus: 32 / .64, mars: 32 / 1.88, jupiter: 32 / 11.86 });
  });

  test('should calculate life expectancy in each planet', () => {
    const planetAge = reusableCalculator.planetAgeCalculator();
    expect(reusableCalculator.planetExpectancyCalculator(planetAge)).toEqual({ mercury: 78 - planetAge.mercury, venus: 78 - planetAge.venus, mars: 78 - planetAge.mars, jupiter: 78 - planetAge.jupiter});
  });

  //test('should calculate life expectancy in each planet', () => {
  //expect(reusableCalculator.lifeExpectancyPlanet()).toEqual();
  //});


});