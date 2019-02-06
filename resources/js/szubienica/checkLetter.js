function checkLetter(word, letter){

var isLetterMatch = false;
var id = "letter_"+letters.indexOf(letter);

    for(i=0; i<word.length ; i++){
        if(letter == word.charAt(i)){
            var firstPart = hiddenWordToFind.substring(0, i);
            var lastPart = hiddenWordToFind.substring(i+1, hiddenWordToFind.length);

            hiddenWordToFind = firstPart + letter + lastPart;
            isLetterMatch = true;
        }
    }

    if(isLetterMatch){
        document.getElementById(id).style.background = '#005500';
        document.getElementById(id).style.border = '3px solid #00a000';
        document.getElementById(id).style.color = '#00a000';
        document.getElementById(id).style.cursor = 'default';
        document.getElementById(id).setAttribute("onclick", ";");

        document.getElementById("wordToFind").innerHTML = hiddenWordToFind;
    }else{
        gallowsLevel++;
        //przegrana
        if(gallowsLevel==5){
            buildGallows(gallowsLevel);
            document.getElementById("info").innerHTML =
            'PORAŻKA! poprawne hasło to: <br> '+wordToFind+'<br><input type="button" onclick="document.location.reload(true)" value="Spróbuj jeszcze raz!">';
            for(i=0 ; i<letters.length ; i++){
                document.getElementById("letter_"+i).style.background = '#919191';
                document.getElementById("letter_"+i).style.border = '3px solid #adadad';
                document.getElementById("letter_"+i).style.color = '#adadad';
                document.getElementById("letter_"+i).style.cursor = 'default';
                document.getElementById("letter_"+i).setAttribute("onclick", ";");
            }
        }else{
            document.getElementById(id).style.background = '#550000';
            document.getElementById(id).style.border = '3px solid #a00000';
            document.getElementById(id).style.color = '#a00000';
            document.getElementById(id).style.cursor = 'default';
            document.getElementById(id).setAttribute("onclick", ";");

            buildGallows(gallowsLevel);
        }
    }

//wygrana
    if(!hiddenWordToFind.includes("-")){
        document.getElementById("infoWin").innerHTML =
                    'BRAWO, WYGRAŁEŚ!<br><div id="playAgainButton" onclick="document.location.reload(true)">Spróbuj jeszcze raz!</div>';

        for(i=0 ; i<letters.length ; i++){
            document.getElementById("letter_"+i).style.background = '#919191';
            document.getElementById("letter_"+i).style.border = '3px solid #adadad';
            document.getElementById("letter_"+i).style.color = '#adadad';
            document.getElementById("letter_"+i).style.cursor = 'default';
            document.getElementById("letter_"+i).setAttribute("onclick", ";");
    }
    }
}