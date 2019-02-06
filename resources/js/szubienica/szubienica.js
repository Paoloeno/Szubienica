window.onload = showBoard;

var wordNumber = Math.floor(Math.random()*52);
var wordToFind = sentenceData[wordNumber];

wordToFind = wordToFind.trim();
wordToFind = wordToFind.toUpperCase();
var gallowsLevel;
var hiddenWordToFind = "";

for(i=0; i<wordToFind.length ; i++){
    if(wordToFind.charAt(i) == " "){
        hiddenWordToFind = hiddenWordToFind + " ";
    }else{
        hiddenWordToFind = hiddenWordToFind + "-";
    }
}

function showBoard(){
    document.getElementById("wordToFind").innerHTML = hiddenWordToFind;
    showAlphabet();
    showGallows();
    gallowsLevel = 0;
}

