function palindrome(word) {
    //test if number, if so turn to string
    if(Number.isInteger(word)){
        word = word.toString()
    }
    //regex that will only return alphanumeric characters
    let regex = /[^A-Za-z0-9]/g;
    let result = word.replace(regex, "")
    
    // string comparison 
    if(result.toLowerCase() === result.split('').reverse().join('').toLowerCase()){
        return true;
    }
    return false;
    
};

console.log(palindrome('racecar'));
console.log(palindrome('Noon'));
console.log(palindrome('ciVic'));
console.log(palindrome('nice'));
console.log(palindrome(434));
console.log(palindrome(123));

console.log(palindrome("Sore was I ere I saw Eros."));
console.log(palindrome("A man, a plan, a canal -- Panama"));