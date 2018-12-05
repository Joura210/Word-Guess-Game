//global variables

var guessLeft = 12;
var lettersUsed = "";
// var compGuess = "";
var underscores = [];
var wrongGuess = "";

// changing our page to show outcomes

var winTextwrongGuess = document.getElementById("wrongGuess");
var lettersUsedtext = document.getElementById("lettersUsed");
var underscorestext = document.getElementById("underscores");


//Build our array to pull from, blank array for the user to fill
var computerChoice = ["pikachu", "raichu", "bulbasaur", "ivysaur", "venusaur", "squirtle", "wartortle", "blastoise", "charmander", "charmeleon", "charizard"];
var used = [];
compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// console.log(compGuess)


// generate compGuess with underscores

var createUnderscores = () => {
    for (var i= 0; i < computerChoice.length; i++){
        underscores.push("_");
    }
return(underscores);

}
    // console.log(createUnderscores());



// make player able to log choices with onkey up function
document.onkeyup = function(event){
    var userGuess = event.key;
    // console.log(userGuess);
}