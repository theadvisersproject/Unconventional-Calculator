 const defaultValue = 0;
 let currentResult = defaultValue;

 function getUserNumberInput(){
   return parseInt(userInput.value);
 }

 function createAndWriteLog(operators, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`;

 }
 
 
 function add(){
   const enteredNumber = getUserNumberInput();
   
   currentResult = currentResult + enteredNumber;
   outputResult(currentResult, calcDescription);
 }

 function substract(){
   const enteredNumber = getUserNumberInput();
   const calcDescription = `${currentResult} - ${enteredNumber}`;
   currentResult = currentResult - enteredNumber;
   outputResult(currentResult, calcDescription);
 }

 function multiply(){}

 function divide() {}

 
 addBtn.addEventListener('click', add);

  

