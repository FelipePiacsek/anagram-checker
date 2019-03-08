var checkForAnagram = function(referenceWord, word){
    document.getElementById("anagramStatus").value = Anagrams.isAnagram(referenceWord, word);
};

var displayLettersDiff = function(referenceWord, word){
    var diffMap = Anagrams.lettersDiffMap(referenceWord, word);
    var diffLetters = Object.keys(diffMap);
    var vowels = [];
    var consonants = [];
    var i, j;
    for(i = 0; i < diffLetters.length; i++){
        var letter = diffLetters[i];
        if (Anagrams.isVowel(letter)) {
            for(j = 1; j <= diffMap[letter]; j++){
                vowels.push(letter);
            }
        }else {
            for(j = 1; j <= diffMap[letter]; j++){
                consonants.push(letter);
            }
        }
    }
    var vowelsString = vowels.sort().join(" ");
    var consonantsString = consonants.sort().join(" ");
    document.getElementById("vowelsDiff").textContent = vowelsString;
    document.getElementById("consonantsDiff").textContent = consonantsString;
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