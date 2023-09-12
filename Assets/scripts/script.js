// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = 8; //Initialize variable with minimum length of a password.
//Initialize variables for what the password contains to false. By default the password will be lower case alphabet 
//unless user chooses to include upper case letters, numbers, or special characters.
var containUpperCaseLetters = false;
var containSpecialChars = false;
var containNumbers = false;
var chars = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*()";
const initialGreeting = "Please answer a few simple questions to get started." + 
    "\n\nHow many characters would you like in your password? (Choose a number between 8 and 128)";
const invalidLength = "Invalid number. Enter a number between 8 and 128.";


// Write password to the #password input
function writePassword() 
{
  
  //Greet user and ask what length the password should be
  var continueProc = window.prompt(initialGreeting);

  if (continueProc) //User clicked OK and entered a value
  {
    /*
      1. Check the value entered.
        a. Value is invalid if:
          i. Value is not a number.
          ii. Value is less than 8.
          iii. Value is greater than 128.

          Action: Tell user the value is invalid and prompt them for another value.
        b. Value is valid in all other scenarios.

          Action: Set the password length to the user entered value.
    */
    pwdLength = continueProc;

    if (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128)
      window.prompt(invalidLength);  
  }
  else
  {
    if (continueProc == "") //User did not enter a value, but clicked OK
    {
      //Tell user the value is invalid and prompt them for another value.
      window.prompt(invalidLength);
    }
    else //User clicked cancel
    {
      //exit function
      return;
    }
  }

  //Once password length is known ask user about further formatting
  if (containUpperCaseLetters = window.confirm("Should the password contain UPPER CASE letters?\n(Ok = Yes, Cancel = No)"))
    chars = chars.concat(upperCase);
  if (containSpecialChars = window.confirm("Should the password contain special characters? !@#$%^&*()\n(Ok = Yes, Cancel = No)"))
    chars = chars.concat(specialChars);
  if (containNumbers = window.confirm("Should the password contain numbers?\n(Ok = Yes, Cancel = No)"))
    chars = chars.concat(nums);
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() 
{
  var randomVal;
  password = "";
  for (var i = 0; i < pwdLength; i++) 
  {
    //Choose a random number between 1 & the number of characters that can be used
    randomVal = Math.floor(Math.random() * chars.length);
    //take the random number and select the corresponding character from the string of available characters
    password += chars.substring(randomVal, randomVal + 1);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


