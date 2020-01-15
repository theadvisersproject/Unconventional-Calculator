 const defaultValue = 0;
 let currentResult = defaultValue;

 function add(){
   const calcDescription = `${currentResult} + ${userInput.value}`;
   currentResult = currentResult + parseInt(userInput.value);//memorization: .toString() used to convert number into a string.
   outputResult(currentResult, calcDescription);
 }
 
 addBtn.addEventListener('click', add);

  

