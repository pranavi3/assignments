/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
      this.result = 0;
  }

  add(val) {
      this.result += val;
  }

  subtract(val) {
      this.result -= val;
  }

  multiply(val) {
      this.result *= val;
  }

  divide(val) {
      if (val === 0) {
          throw new Error('Division by zero');
      }
      this.result /= val;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(str) {
      let val = [];
      let ops = [];
      let currNum = '';
      let open = 0;
      for (let i = 0; i < str.length; i++) {
          if (str[i] === ' ') {
              continue;
          } else if (str[i] === '(') {
              open++;
              ops.push(str[i]);
          } else if (str[i] === ')') {
              if(open==0){
                throw new Error();
              }
              while (ops.length !== 0 && ops[ops.length - 1] !== '(') {
                  let v2 = val.pop();
                  let v1 = val.pop();
                  let operation = ops.pop();
                  val.push(this.apply(v1, v2, operation));
              }
              if (ops.length === 0) {
                  throw new Error('Invalid parenthesis');
              }
              ops.pop(); // Remove '('
              open--;
          } else if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
              while (ops.length !== 0 && this.precedence(ops[ops.length - 1]) >= this.precedence(str[i])) {
                  let v2 = val.pop();
                  let v1 = val.pop();
                  val.push(this.apply(v1, v2, ops.pop()));
              }
              ops.push(str[i]);
              currNum = ''; // Reset current number
          } else if (!isNaN(parseInt(str[i])) || str[i] === '.') {
              currNum += str[i];
              if (i === str.length - 1 || isNaN(parseInt(str[i + 1])) && str[i + 1] !== '.') {
                  val.push(parseFloat(currNum));
                  currNum = ''; // Reset current number
              }
          } else {
              throw new Error('Invalid character in expression');
          }
      }
      if(open!=0){
        throw new Error();
      }
      while (ops.length !== 0) {
          let v2 = val.pop();
          let v1 = val.pop();
          val.push(this.apply(v1, v2, ops.pop()));
      }
      
      if (val.length !== 1 || ops.length !== 0) {
          throw new Error('Invalid expression');
      }
      this.result = val[0];
  }

  precedence(operator) {
      if (operator === '+' || operator === '-') return 1;
      else if (operator === '*' || operator === '/') return 2;
      return 0;
  }

  apply(v1, v2, operation) {
      switch (operation) {
          case '+': return v1 + v2;
          case '-': return v1 - v2;
          case '*': return v1 * v2;
          case '/': 
            if(v2 == 0)throw new Error();
            return v1/v2;
      }
  }
}

module.exports = Calculator;

