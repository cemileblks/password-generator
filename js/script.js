// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passLength = prompt("How many characters would you like your password to contain? (Please enter a number between 8-128)");

  passLength = parseInt(passLength);

  if (passLength < 8) {
    alert("Password length must be at least 8 characters!");
    return null;
  }
  else if (passLength > 128) {
    alert("Password length must be less than 129 characters");
    return null;
  }
  else if (isNaN(passLength)) {
    alert("Password length must be provided as a number!");
    return null;
  }

  let includeSpecialCharacters = confirm("Click OK to confirm including special characters.");
  let includeNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  let includeUppercaseCharacters = confirm("Click OK to confirm including UPPERCASE characters.");
  let includeLowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");

  if (!(includeSpecialCharacters || includeNumericCharacters || includeUppercaseCharacters || includeLowercaseCharacters)) {
    alert("At least one character type should be selected");
    return null;
  }

  let userPassCriteria = [];

  if (includeSpecialCharacters) {
    userPassCriteria = userPassCriteria.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
    userPassCriteria = userPassCriteria.concat(numericCharacters);
  }
  if (includeUppercaseCharacters) {
    userPassCriteria = userPassCriteria.concat(upperCasedCharacters);
  }
  if (includeLowercaseCharacters) {
    userPassCriteria = userPassCriteria.concat(lowerCasedCharacters);
  }

  return { passLength, userPassCriteria };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {

  let { passLength, userPassCriteria } = getPasswordOptions();

  if (!userPassCriteria) {
    return ""; // Handle null or invalid user input
  }

  let generatedPass = "";

  for (let i = 0; i < passLength; i++) {
    generatedPass += getRandom(userPassCriteria);
  }

  return generatedPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);