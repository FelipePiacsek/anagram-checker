var Anagrams = function(){
    // Private functions

    // Exposures
    var isAnagram = function(referenceWord, word){
        if (!referenceWord || !word) return false;
        referenceWord = referenceWord.toLowerCase();
        word = word.toLowerCase();

        return true;
    };

    return {
        isAnagram: isAnagram
    };
}();