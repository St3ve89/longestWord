function findLongestWord(str) {
    var longestWord = 0;
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > longestWord) {
            longestWord = str[i].length;
        }
    }
    return longestWord;
}
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
);#   l o n g e s t W o r d 2  
 