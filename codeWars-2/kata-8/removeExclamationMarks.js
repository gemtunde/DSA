// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
  return s.replace("/!/g", "");

  //option 2
  //  return s.split("").filter(a=> a !== "!").join("")

  //return s.replaceAll('!', '');
}

removeExclamationMarks("Hello World!");
//removeExclamationMarks("Hello World!!");
//removeExclamationMarks("Hello World!!!!");