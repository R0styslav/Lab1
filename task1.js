function splitString(stringToSplit, separator) {
    
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('Original string: "' + stringToSplit + '"');
    console.log('Array consists of ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  }
  
  var tempestString = 'Some words to check my function';
  
  splitString(tempestString, ' ');