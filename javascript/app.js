let userInput = document.querySelector('.userInput');

let button = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleClick);
  });

let currentInput = '';
let previousInput = '';
let operator = null;

function handleClick(event) {
  
  let value = event.target.textContent;

  if(value != 'C' && value != '<' && value != '='){
    let userInput = document.querySelector('.userInput');
    userInput.innerText += value;
  }

  console.log(typeof(value));
  console.log(value);

  // if(value === '<'){
  //   alert("it is delete");
  //   Delete();
  // }
  
  if (!isNaN(value) || value == '.') {
    
      currentInput += value;
      console.log('current input is' + currentInput);
      console.log('previus input is' + previousInput);

  }else if (['+', '-', 'x', '÷'].includes(value)) {  

    previousInput = currentInput;
    operator = value;
    currentInput = '';

  } else if (value === '=') {

    calculate();

      currentInput = '';
      previousInput = '';
      operator = null;

      // console.log("when press =" + value);
      // userInput.innerText = '';

      // setTimeout(() => {
      //   clearCalculator();
      // }, 2000);
  }
}

function calculate() {

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
  
    switch (operator) {

      case '+':
        result = num1 + num2;
        break;

      case '-':
        result = num1 - num2;
        break;

      case 'x':
        result = num1 * num2;
        break;

      case '÷':
        result = num1 / num2;
        break;

    }

    updateDisplay(result);
    currentInput = result.toString();
    operator = null;
  }

  function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');  // Reset the display to default
    let userInput = document.querySelector('.userInput');
    userInput.innerText = '';
    
  }

  // function clearResult(parameters) {
    
  // }

  function updateDisplay(value) {
    document.querySelector('.calculator-screen').textContent = value;
  }

  let deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener('click', Delete);


  function Delete() {
    let arr    = currentInput.split('');

    if (arr.length > 0) {
      arr.pop();
      currentInput = arr.join('');
      console.log("after delete current input is: " + currentInput);
      let userInput = document.querySelector('.userInput');
      userInput.innerText = '';
      userInput.innerText += currentInput;
    }
  // console.log('array is' + arr);
  
  // deleteChar = arr.length - 1;
  // console.log('delete char'+ deleteChar);
  
  // currentInput += arr[arr.length - 1];
  // console.log("after delete current input is" + currentInput);
  
}
      