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

 function calculateResults(calculationType) {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   let mathOperator;
   if (calculationType !== 'ADD' && calculationType !== 'SUBSTRACT' && calculationType !== 'DIVIDE' && calculationType !== 'MULTIPLY' || !enteredNumber ) {
     return;
   }

  //  if (
  //    calculationType === 'ADD' ||
  //    calculationType === 'SUBSTRACT' ||
  //    calculationType === 'DIVIDE' ||
  //    calculationType === 'MULTIPLY'
  //  ){
  //    all if elses; producing too much code;
  //  }

   if (calculationType === 'ADD') {
     currentResult += enteredNumber;
     mathOperator = '+';
   } else if (calculationType === 'SUBSTRACT') {
     currentResult -= enteredNumber;
     mathOperator = '-';
   } else if (calculationType === 'DIVIDE') {
     currentResult /= enteredNumber;
     mathOperator = '/';
   } else if (calculationType === 'MULTIPLY') {
     currentResult *= enteredNumber;
     mathOperator = '*';
   }



   createAndWriteLog(mathOperator, initialResult, enteredNumber);
   writeToLog(calculationType, initialResult, enteredNumber, currentResult);
 }


 function add() {
   calculateResults('ADD');
 }

 function substract() {
   calculateResults('SUBSTRACT');
 }

 function multiply() {
   calculateResults('MULTIPLY');
 }

 function divide() {
   calculateResults('DIVIDE');
 }


 addBtn.addEventListener('click', add);
 subtractBtn.addEventListener('click', substract);
 multiplyBtn.addEventListener('click', multiply);
 divideBtn.addEventListener('click', divide);
