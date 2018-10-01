// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length == 14) {
    return 'Diner\'s Club';
  } else if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length == 15) {
    return 'American Express';
  } else if (cardNumber[0] === '4') {
  	if ((cardNumber.startsWith('4903') || cardNumber.startsWith('4905') || cardNumber.startsWith('4911') || cardNumber.startsWith('4936')) && (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)) {
		return 'Switch';
	} else if (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19) {
      return 'Visa';
    }
  } else if (cardNumber[0] == '5' && (cardNumber[1] >= 1 && cardNumber[1] <= 5)  && cardNumber.length == 16) {
      return 'MasterCard';
  } else if ((cardNumber.startsWith('6011') || (cardNumber.startsWith('64') && cardNumber[2] >= 4 && cardNumber[2] <= 9)|| cardNumber.startsWith('65')) && (cardNumber.length == 16 || cardNumber.length == 19)) {
    return 'Discover';
  } else if ((cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304')) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro';
  } else if ((cardNumber.startsWith('633110') || cardNumber.startsWith('564182') || cardNumber.startsWith('6333') || cardNumber.startsWith('6759')) && (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)) {
  	return 'Switch';
  } else if (((cardNumber.slice(0, 6) >= 622126 && cardNumber.slice(0,6) <= 622925) || (cardNumber.slice(0, 3) >= 624 && cardNumber.slice(0,3) <= 626) || (cardNumber.slice(0, 4) >= 6282 && cardNumber.slice(0,4) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
  	return 'China UnionPay';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


