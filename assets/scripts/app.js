 const defaultValue = 0;
 let currentResult = defaultValue;

 //gets into from input field.
 function getUserNumberInput(){
   return parseInt(userInput.value);
 }

 //generates and writes calculation log
 function createAndWriteLog(operators, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`;
   outputResult(currentResult, calcDescription); //from vendor.js
 }
 
 
 function add(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult + enteredNumber;
   createAndWriteLog('+', initialResult, enteredNumber);
 }

 function substract(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult - enteredNumber;
   createAndWriteLog('-', initialResult, enteredNumber);
 }

 function multiply(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult * enteredNumber;
   createAndWriteLog('*', initialResult, enteredNumber);
 }

 function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult / enteredNumber;
   createAndWriteLog('/', initialResult, enteredNumber);
 }

 
 addBtn.addEventListener('click', add);
 subtractBtn.addEventListener('click',substract);
 multiplyBtn.addEventListener('click',multiply);
 divideBtn.addEventListener('click',divide);


  

