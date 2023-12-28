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

  factorial(x: number): number {
    if (x < 0) {
      throw new Error("Cannot calculate factorial of a negative number");
    }
    if (x === 0 || x === 1) {
      return 1;
    }
    return x * this.factorial(x - 1);
  }

  sine(angleInRadians: number): number {
    return Math.sin(angleInRadians);
  }

  cosine(angleInRadians: number): number {
    return Math.cos(angleInRadians);
  }

  tangent(angleInRadians: number): number {
    return Math.tan(angleInRadians);
  }
}

// Example usage
const calculator = new Calculator();

const resultFactorial = calculator.factorial(5);
console.log("Factorial of 5 =", resultFactorial);

const resultSine = calculator.sine(Math.PI / 2);
console.log("Sine of π/2 =", resultSine);

const resultCosine = calculator.cosine(0);
console.log("Cosine of 0 =", resultCosine);

const resultTangent = calculator.tangent(Math.PI / 4);
console.log("Tangent of π/4 =", resul
