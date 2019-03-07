var Anagrams = function(){
    // Constants
    var VOWELS = ["a", "e", "i", "o", "u"];

    // Private functions
    var removeBlanks = function(string){
        return string.replace(new RegExp(" ", "g"), "");
    };

    var sortString = function(string){
        return string.split("").sort().join("");
    };

    var validWord = function(word){
        return !!word && typeof word === "string";
    };

    var lettersMap = function(word) {
        var letters = removeBlanks(word).toLowerCase().split("");
        var map = {};
        for(var i = 0; i < letters.length; i++){
            if (!map[letters[i]]){
                map[letters[i]] = 1;
            }else{
                map[letters[i]]++;
            }
        }
        return map;
    };

    // Exposures
    var isAnagram = function(referenceWord, word){
        if (!(validWord(referenceWord) && validWord(word))) return false;

        referenceWord = removeBlanks(referenceWord).toLowerCase();
        word = removeBlanks(word).toLowerCase();

        return sortString(referenceWord) === sortString(word);
    };

    var lettersDiffMap = function(referenceWord, word) {
        var referenceWordLetterUsage = lettersMap(referenceWord);
        var referenceLetters = Object.keys(referenceWordLetterUsage);
        var wordLetterUsage = lettersMap(word);
        var diffMap = {};
        for(var i = 0; i < referenceLetters.length; i++){
            var letter = referenceLetters[i];
            var referenceAmount = referenceWordLetterUsage[letter];
            var amountUsed = wordLetterUsage[letter];
            if (isNaN(amountUsed)){
                diffMap[letter] = referenceAmount;
            }else{
                diffMap[letter] = referenceAmount - amountUsed;
            }
        }

        return diffMap;
    };

    var isVowel = function(letter){
        return VOWELS.indexOf(letter.toLowerCase()) > -1;
    };

    return {
        isAnagram: isAnagram,
        lettersDiffMap: lettersDiffMap,
        isVowel: isVowel
    };
}();