var lettersDiv = "";

function showAlphabet(){
    for(i=0 ; i<35 ; i++){
        if(i%7 == 0 && i != 0){
            lettersDiv = lettersDiv + '<div style="clear:both;"></div>'
        }
        var id = "letter_"+i;
        lettersDiv = lettersDiv + '<div id="'+id+'" class="letter" onclick="checkLetter(wordToFind'+', \''+letters[i]+'\')">' + letters[i] + '</div>';
    }
    document.getElementById("alphabet").innerHTML = lettersDiv;
}