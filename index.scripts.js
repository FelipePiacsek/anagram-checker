var checkForAnagram = function(referenceWord, word){
    document.getElementById("anagramStatus").value = Anagrams.isAnagram(referenceWord, word);
};

var displayLettersDiff = function(referenceWord, word){
    var diffMap = Anagrams.lettersDiffMap(referenceWord, word);
    var diffLetters = Object.keys(diffMap);
    var vowelDiffMap = {};
    var consonantDiffMap = {};
    for(var i = 0; i < diffLetters.length; i++){
        var letter = diffLetters[i];
        if (Anagrams.isVowel(letter)) {
            vowelDiffMap[letter] = diffMap[letter];
        }else {
            consonantDiffMap[letter] = diffMap[letter];
        }
    }
    document.getElementById("vowelsDiff").textContent = JSON.stringify(vowelDiffMap, null, 4);
    document.getElementById("consonantsDiff").textContent = JSON.stringify(consonantDiffMap, null, 4);
};

var letterTypedDigest = function(){
    var referenceWord = document.getElementById("referenceWord").value;
    var word = document.getElementById("word").value;
    checkForAnagram(referenceWord, word);
    displayLettersDiff(referenceWord, word);
};

window.addEventListener('load', function(){
    document.getElementById("word").addEventListener("keyup", letterTypedDigest);
    document.getElementById("referenceWord").addEventListener("keyup", letterTypedDigest);
});