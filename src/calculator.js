export class Calculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectency = expectancy;
  }
  planetCalculator() {
    const mercury = .24
    const venus = .64
    const mars = 1.88
    const jupiter = 11.86

    let planetAge = {
      mercury: (this.age / mercury),
      venus: (this.age / venus),
      mars: (this.age / mars),
      jupiter: (this.age / jupiter)
    };
    console.log(planetAge);
    return planetAge;
  }
}
// with number inputted from User
// a) ageinputted /.24
// b) ageinputted divided by .64
// c) ageinputted * 1.88
// d) ageinputted *11.86 years
// From number inputted in form 2: Calculate average age()