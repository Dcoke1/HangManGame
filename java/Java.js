document.onkeyup = function(event) {
	var usrGuess = event.key;
	//Check guess fx
	checkGuess (usrGuess);

};
var wordList=["vegeta","krillin"]
// var randomnumber = Math.floor(Math.random() * wordList.length);
var word = wordList


function checkGuess (usrGuess){
	var inPuzzle = false;
	
	for (var i = 0; i < word.length; i++) {
		//code
		if (usrGuess === word[i] ) {
			inPuzzle = true;
			//put letter on screen
			document.getElementById('V').innerHTML = "v";
		}
	}
	if (inPuzzle){
		//check win
	} else{
		//lose a dragonball
		document.getElementById('Attempts').innerHTML = "Wrong.Try again!";
	}
	if (usrGuess === word[i] + "" ) {
			inPuzzle = true;
			//put letter on screen
			document.getElementById('E').innerHTML = "e";
		}
		 else{
		//lose a dragonball
		document.getElementById('Attempts').innerHTML = "Wrong.Try again!";
	}

};

