 const defaultValue = 0;
 let currentResult = defaultValue;
 let logEntries = [];

 //gets into from input field.
 function getUserNumberInput() {
   return parseInt(userInput.value);
 }

 //generates and writes calculation log
 function createAndWriteLog(operators, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`;
   outputResult(currentResult, calcDescription); //vendor file
 }

 //writing log entries using object
 function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
   const logEntry = {
     operation: operationIdentifier,
     prevResult: prevResult,
     number: operationNumber,
     result: newResult
   };

   logEntries.push(logEntry);
   console.log(logEntries);
 }


 function add() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult += enteredNumber;
   createAndWriteLog('+', initialResult, enteredNumber);
   writeToLog('ADD', initialResult, enteredNumber, currentResult);
 }

 function substract() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult -= enteredNumber;
   createAndWriteLog('-', initialResult, enteredNumber);
   writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
 }

 function multiply() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult *= enteredNumber;
   createAndWriteLog('*', initialResult, enteredNumber);
   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
 }

 function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult /= enteredNumber;
   createAndWriteLog('/', initialResult, enteredNumber);
   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
 }


 addBtn.addEventListener('click', add);
 subtractBtn.addEventListener('click', substract);
 multiplyBtn.addEventListener('click', multiply);
 divideBtn.addEventListener('click', divide);
