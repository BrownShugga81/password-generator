// Assignment code here
var long;
var confirmNum;
var confirmSymbol;
var confirmUpper;
var confirmLower;
var choices;
var pickChoices;




upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
num = [0,1,2,3,4,5,6,7,8,9];
symbol = ["!","@","#","$","%","&","?"]



function generatePassword() {
  long = parseInt(prompt("How many characters would you like your password? [8-128]"));
    
  if (long > 7 && long < 129 ) {
    //console.log(long);

    // password requirements
    confirmNum = confirm("Include numbers?");
    confirmSymbol = confirm("Include special characters?");
    confirmUpper = confirm("Include Uppercase letters?");
    confirmLower = confirm("Include Lowercase letters?");
  }
  // invalid number given
  else {
    alert("Provide a correct value!")
    return generatePassword();

  };

  if (confirmLower && confirmUpper && confirmNum && confirmSymbol) {
    choices = [...upper, ...lower, ...num, ...symbol];
    console.log(choices)
    
  }
  


// received help from AskBCS
let returnVal = []

for (var i = 0; i < long; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  returnVal.push(pickChoices);
}
console.log(returnVal)
return returnVal.join(' ')
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

