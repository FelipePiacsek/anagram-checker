var checkForAnagram = function(referenceWord, word){
    document.getElementById("anagramStatus").value = Anagrams.isAnagram(referenceWord, word);
};

var displayLettersDiff = function(referenceWord, word){
    var diffMap = Anagrams.lettersDiffMap(referenceWord, word);
    document.getElementById("lettersDiff").textContent = JSON.stringify(diffMap, null, 4);
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