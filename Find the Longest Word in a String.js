function findLongestWord(str) {
    var longesWord = 0;

    // Split string into array by space
    var arr = str.split(" ");
    // make for loop to go trough each one 
    for (var i = 0; i < arr.length; i++) {
        if (str[i].length > longestWord) {
            longestWord = str[i].length;
            console.log(i);
        }
    }
    // count the number of letters on each one
    //if the world longer then the longestwordlength then put the word into the var
    return longestWord;
}

console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
);