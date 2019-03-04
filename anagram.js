var Anagrams = function(){
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

    // Exposures
    var isAnagram = function(referenceWord, word){
        if (!(validWord(referenceWord) && validWord(word))) return false;

        referenceWord = removeBlanks(referenceWord).toLowerCase();
        word = removeBlanks(word).toLowerCase();

        return sortString(referenceWord) === sortString(word);
    };

    return {
        isAnagram: isAnagram
    };
}();