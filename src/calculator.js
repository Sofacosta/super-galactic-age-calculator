export class Calculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectency = expectancy;
    this.planetAge = this.planetAgeCalculator();
    this.planetExpectancy = this.planetExpectancyCalculator(this.planetAgeCalculator());
  }
  planetAgeCalculator() {
    const mercury = .24;
    const venus = .64;
    const mars = 1.88;
    const jupiter = 11.86;

    const planetAge = {
      mercury: this.age / mercury,
      venus: this.age / venus,
      mars: this.age / mars,
      jupiter: this.age / jupiter,
    };

    console.log(planetAge);
    return planetAge;
  }
  planetExpectancyCalculator(planetAge) {
    const planetExpectancy = {
      mercury: this.expectancy - planetAge.mercury,
      venus: this.expectancy - planetAge.venus,
      mars: this.expectancy - planetAge.mars,
      jupiter: this.expectancy - planetAge.jupiter,
    }

    return planetExpectancy;
  }
}

const age = 34;
const expectancy = 80;
const calculator = new Calculator(age, expectancy);
const planetAge = calculator.planetAgeCalculator();
const planetExpectancy = (planetAge) => calculator.planetExpectancyCalculator(planetAge);

planetExpectancy(planetAge);





// with number inputted from User
// a) ageinputted /.24
// b) ageinputted divided by .64
// c) ageinputted * 1.88
// d) ageinputted *11.86 years
// From number inputted in form 2: Calculate average age()