import { TestScheduler } from 'jest';
import {Calculator} from './../src/calculator.js';
describe ('Calculator', () => {
  let reusableCalculator;
  beforeEach(() => {
    reusableCalculator = new Calculator('a','b');
  });
test('should create a calculator object', ( ) => {
    expect (reusableCalculator.age).toEqual('a', 'b')
  });
});