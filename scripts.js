var input = prompt("enter a sentence");
console.log(input)
alert("you said: " + input);


var first = input.charAt(0);
var last = input.charAt(input.length-1);
alert("The first letter of the sentence was " + first + " and the last letter was " + last);

var firstUpperCase = first.toUpperCase();
var lastUpperCase = last.toUpperCase();

var newstr = input.substring(1, input.length -1);
var newnewstr = firstUpperCase + newstr + lastUpperCase;

alert(newnewstr);
