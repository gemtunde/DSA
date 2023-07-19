// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if 
//they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

function isValidIP(str) {
 let splitString = str.split('.');
  console.log(splitString)
 if(splitString.length !== 4) return false;
 for(let i= 0; i < splitString.length; i++){
   let  currentString = Number(splitString[i]);
     if(currentString >= 0 && currentString <= 255 && /\d{1,3}$/.test(currentString)) return false
     //else {return true}
 }
    return true
}

  isValidIP('');
  isValidIP('abc.def.ghi.jkl');
  isValidIP('123.456.789.0');
  isValidIP('12.34.56');
  isValidIP('01.02.03.04');
  isValidIP('256.1.2.3');
  isValidIP('1.2.3.4.5');
  isValidIP('123,45,67,89');
  isValidIP('1e0.1e1.1e2.2e2');
  isValidIP(' 1.2.3.4');
