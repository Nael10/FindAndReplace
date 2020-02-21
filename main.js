var submitButton = document.getElementById("submitButton");
var before = document.getElementById("before");
var after = document.getElementById("after");
var wordInfo = document.getElementsByClassName("panel-body");
var reader = new FileReader();
var testFile; 


submitButton.addEventListener("click", function(event){
    testFile = document.getElementById("testFile").files[0];
    
    reader.onload = function(event){
// Create a table with all the words and how many times they were used
const wordUsageTable = event.target.result
    .match(/[a-zA-Z']+/g) // find all words
    .map(word => word.toLowerCase()) // convert each word into lowercase
    .reduce((result, word) => { // create the table
    result[word] = ~~result[word] + 1;
    return result;
    }, {});

const [mostUsedWord, wordCount] = Object
	.entries(wordUsageTable) // convert the object into an array with their keys and values
    .reduce((result, keyValue) => {
    return keyValue[1] > result[1] ? keyValue : result; // find the word with highest count
     });
  
    var re = RegExp(mostUsedWord,"gi");

    before.innerText = event.target.result; //original text
    after.innerText = event.target.result.replace(re, "foo" + mostUsedWord + "bar"); //replace the most used word with "foo" before and "bar" after the word
    
    
    //console.dir(wordUsageTable);
    alert(`Most used word was "${mostUsedWord}" with ${wordCount} references`);
    }
reader.readAsText(testFile);
});




