 const defaultValue = 0;
 let currentResult = defaultValue;

 function getUserNumberInput(){
   return parseInt(userInput.value);
 }

 function createAndWriteLog(operators, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
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


  

