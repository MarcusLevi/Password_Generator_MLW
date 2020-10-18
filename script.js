




// VARIABLES 
//=================================================================================================================================
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = [0,1,2,3,4,5,6,7,8,9];
var specialCaseChar = ['~','!','@','#','$','%','^','&','*','(',')','-','_','+'];

// VARIABLES
//==================================================================================================================================

// FUNCTIONS
//==================================================================================================================================

function generateOptions(){

  var length = prompt("How many characters would you like your password to contain?");

  if (length < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }
  if (length > 128){
    alert('The password must be less than 128 characters!');
    return;
  }
  var hasUppercase = confirm ("Click ok if you want to include uppercase.")
  var hasLowercase = confirm ("Click ok if you want to inclue lowercase.")
  var hasnumericChar = confirm ("Click ok if you want to inclued numbers.")
  var hasspecialChar = confirm ("Click ok if you want to include special charaters.")
  if (hasUppercase === false && hasLowercase === false && hasnumericChar === false && hasspecialChar === false){
    alert ("Please select one charater type")
  }
  var passwordChoice = {
    length:length, 
    hasUppercase:hasUppercase, 
    hasLowercase:hasLowercase,
    hasnumericChar:hasnumericChar,
    hasspecialChar:hasspecialChar
  }
  return passwordChoice 
   
}

function getRandom(){
  var randomIndex = Math.floor(Math.random() * 128)
}

function generatePassword(){
  var soultion = []
  var possibleChar = []
  var 

}


//FUNCTIONS
//==================================================================================================================================

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var hello = "hello";