// Assignment code here
var passCrit = function() {

  var askLower = window.confirm('Includes lowercase characters?');

  if (!askLower) {
    askLower = "";
  } else {
    askLower = "abcdefghijklmnopqrstuvwxyz";
  }

  var askUpper = window.confirm('Includes uppercase characters?');
    if (!askUpper) {
      askUpper = "";
    } else {
      askUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
  var askNum = window.confirm('Includes numbers?');
    if (!askNum) {
      askNum = "";
    } else {
      askNum = "01233456789";
    }

  var askSpecial = window.confirm('Includes special characters?');
    if (!askSpecial) {
      askSpecial = "";
    } else {
      askSpecial = "~!@#$%^&*()_+";
    }

  var passString = askLower + askUpper + askNum + askSpecial;

    if (passString.length > 0) {
      return passString;
    } else {
      window.alert("Please choose at least one of the specified criteria.");
      return passCrit();
    }
}

var generatePassword = function() {
var askLong = window.prompt('Please specify your desired password length. Choose a number between 8 and 128.');
askLong = parseInt(askLong)
console.log('Password length is ' + askLong);

  if (isNaN(askLong) || askLong < 8 || askLong > 128) {
    return generatePassword();
  }

var passSet = passCrit();
var returnedPassword = "";

for (var i = 0, n = passSet.length; i < askLong; i++) {
  returnedPassword = returnedPassword + passSet[Math.floor(Math.random() * n)];
  }

  console.log('The generated password is ' + returnedPassword)
  return returnedPassword;
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
