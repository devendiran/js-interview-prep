function sum(...args) {
    const sumCb = function (...args1) {
      return sum(...args, ...args1);
    };
  
    sumCb.toValue = function () {
      return args;
    };
    return sumCb;
  }
  
  console.log(sum(1, 2, 4)(1)(5, 7, 5, 6, 7, 8).toValue());