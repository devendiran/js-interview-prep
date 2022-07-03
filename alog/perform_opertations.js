 
function performOperations(str) {
    console.log(str, '....')
    str = str.replaceAll(' ', '');
    let stack = [];
    let precomputedOperations = []
    for (let i =0; i < str.length ; i++) {
        if (str[i] === ')') {
           while(stack[stack.length - 1] !== '(') {
             precomputedOperations.unshift(stack.pop());
           }
           stack.pop();
           performOperations(precomputedOperations.join(''));
        } else {
           stack.push(str[i])
        }
    }
    return getResult(stack);
  }
   
  function getResult(stack) {
   let result = 0;
    while(stack.length  === 1) {
       let leftOperant = stack.pop();
       let operator = stack.pop();
       let rigthOperant = stack.pop();
   
       if(operator === '+') {
         result += sum(+rigthOperant,+leftOperant);
       } else {
         result += sub(+rigthOperant,+leftOperant);
       }
       stack.unshift(result);
    }
    return stack[0];
  }
   
  function sum(a, b) {
    return a + b
  }
   
  function sub(a, b) {
    return a - b
  }
  console.log(performOperations("3 + (2-1)"));