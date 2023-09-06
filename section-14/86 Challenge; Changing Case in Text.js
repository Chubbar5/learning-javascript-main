var name = prompt("What is your name?");

var firstChar = name.slice(0,1);
var restOfName = name.slice(1,5);
var capFirstChar = firstChar.toUppserCase();
var restOfCap = restOfName.toLowerCase();
var capitalizedName = capFirstChar + restOfCap;

alert(capitalizedName);


