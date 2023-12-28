class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }

  squareRoot(x: number): number {
    if (x < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(x);
  }

  exponentiation(x: number, y: number): number {
    return Math.pow(x, y);
  }

  modulus(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Cannot calculate modulus with divisor as zero");
    }
    return x % y;
  }
}

// Example usage
const calculator = new Calculator();

const resultSquareRoot = calculator.squareRoot(25);
console.log("Square root of 25 =", resultSquareRoot);

const resultExponentiation = calculator.exponentiation(2, 3);
console.log("2^3 =", resultExponentiation);

const resultModulus = calculator.modulus(10, 3);
console.log("10 % 3 =", resultModulus);
