var checkForAnagram = function(){
    var word = document.getElementById("word").value;
    var referenceWord = document.getElementById("referenceWord").value;
    console.log("Checking for anagram: Anagrams.isAnagram('" + referenceWord + "', '" + word + "');");

    document.getElementById("anagramStatus").value = Anagrams.isAnagram(referenceWord, word);
};
window.addEventListener('load', function(){
    document.getElementById("word").addEventListener("keyup", checkForAnagram);
    document.getElementById("referenceWord").addEventListener("keyup", checkForAnagram);
    document.getElementById("anagramStatus").addEventListener("keyup", checkForAnagram);
});