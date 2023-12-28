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
}

// Example usage
const calculator = new Calculator();

const resultAddition = calculator.add(5, 3);
console.log("5 + 3 =", resultAddition);

const resultSubtraction = calculator.subtract(8, 2);
console.log("8 - 2 =", resultSubtraction);

const resultMultiplication = calculator.multiply(4, 6);
console.log("4 * 6 =", resultMultiplication);

try {
  const resultDivision = calculator.divide(10, 2);
  console.log("10 / 2 =", resultDivision);
} catch (error) {
  console.error(error.message);
}
