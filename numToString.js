//given a number, output that number in english
//ex. given the number 123 output would be "one hundrend twenty three"
//this function works from right to left, grabbing the ones column first
//if the tens column is a one, it checks the string and then replaces the
//returnString with the correct word from the teens object
//this works up to the 100 millions place and needs to be DRYed up

var divider = 10;
var ones = {
  0 : "zero",
  1 : "one",
  2 : "two",
  3 : "three",
  4 : "four",
  5 : "five",
  6 : "six",
  7 : "seven",
  8 : "eight",
  9 : "nine"
};

var teens = {
  "zero" : "ten",
  "one" : "eleven",
  "two" : "twelve",
  "three" : "thirteen",
  "four" : "fourteen",
  "five" : "fifteen",
  "six" : "sixteen",
  "seven" : "seventeen",
  "eight" : "eighteen",
  "nine" : "nineteen"
};

var tens = {
  2 : "twenty",
  3 : "thirty",
  4 : "forty",
  5 : "fifty",
  6 : "sixty",
  7 : "seventy",
  8 : "eighty",
  9 : "ninety"
};

var returnString = "";

function numToString(){
  var number = arguments;
  number = stripCommas(number);
  var word;
  var count = 1;
  while (number > 0){
    var remainder = number % 10;
    var stringOfNumber = number.toString();
    if (count === 1){
      word = ones[remainder];
      returnString += word;
    }else if (count === 2 && remainder !== 1){
      word = tens[remainder];
      returnString = word + " " + returnString;
    }else if (count === 2 && remainder === 1 ){
     word = findTeens(returnString);
     returnString = word;
    }else if (count === 3){
      word = ones[remainder];
      returnString = word + " hundred " + returnString;
    } else if (count === 4){
      word = ones[remainder];
      returnString = word + " thousand " + returnString;
    }else if (count === 5 && remainder === 1) {
      var space = returnString.indexOf(" ");
      word = findTeens(returnString.slice(0, space));
      returnString = returnString.slice(space+1, returnString.length);
      returnString = word + " " + returnString;
    }
    else if (count === 5){
      word = tens[remainder];
      returnString = word + " " + returnString;
    }else if (count === 6){
      word = ones[remainder];
      returnString = word + " hundred " + returnString;
    }else if (count === 7){
      word = ones[remainder];
      returnString = word + " million " + returnString;
    }else if (count === 8 && remainder === 1){
      space = returnString.indexOf(" ");
      word = findTeens(returnString.slice(0, space));
      returnString = returnString.slice(space+1, returnString.length);
      returnString = word + " " + returnString;
    }else if (count === 8){
      word = tens[remainder];
      returnString = word + " " + returnString;
    }else if (count === 9){
      word = ones[remainder];
      returnString = word + " hundred " + returnString;
    }
    number = Math.floor(number/10);
    count+=1;
  }
  console.log(returnString);
}

function findTeens(string){
  return teens[string];
}

function stripCommas(num){
  var string = '';
  var k;
  for (k in num){
    string += num[k];
  }
  return parseInt(string);
}

numToString(158,651,319);
