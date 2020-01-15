 const defaultValue = 0;
 let currentResult = defaultValue;

 function getUserNumberInput(){
   return parseInt(userInput.value);
 }
 
 
 function add(){
   const enteredNumber = getUserNumberInput();
   const calcDescription = `${currentResult} + ${enteredNumber}`;
   currentResult = currentResult + enteredNumber;
   outputResult(currentResult, calcDescription);
 }
 
 addBtn.addEventListener('click', add);

  

