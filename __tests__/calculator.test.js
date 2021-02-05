import { TestScheduler } from 'jest';
import {Calculator} from './../src/calculator.js';
describe ('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator('a', 'b', 'c', 'd');
  });

  test('should create a calculator object', ( ) => {
    expect (reusableCalculator.Mercury).toEqual('a')
  });
});