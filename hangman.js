var phrase = "atlanta";
var characters = phrase.split("");

//ask user to guess a letter
var numberOfGuesses = 0;
var everFound = false;

printInitial(); //print intial display and hint
var printHint = [];

for (var l = 0; l < phrase.length; l++) {
  printHint.push("_");
}
console.log(printHint.join(""));

while (numberOfGuesses < 6) {
  var guess = prompt("Guess a letter:").toLowerCase();
  //loop through each character in the phrase to find matches
  for (var j = 0; j < characters.length; j++) {
    //if a match was found...
    if (characters[j] === guess) {
      printHint[j] = guess;
      //set boolean to true: used to limit number of guesses
      everFound = true;
    }
  }
  //if character wasn't found, increment number of guesses
  if (!everFound) {
    numberOfGuesses++;
    printMiss(numberOfGuesses);
    console.log(printHint.join(""));
  }
  else {
    if(printHint.join("") === phrase) {
      console.log(printHint.join(""));
      console.log("***** YOU WIN!!!! *****");
      break;
    }
    printMiss(numberOfGuesses);
    console.log(printHint.join(""));
  }
  everFound = false;
}

function printMiss(num) {
  switch(num) {
    case 0:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |");
      console.log(" |");
      console.log(" |");
      console.log("---");
      break;
    case 1:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |");
      console.log(" |");
      console.log("---");
      break;
    case 2:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |   |");
      console.log(" |");
      console.log("---");
      break;
    case 3:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |   |");
      console.log(" |   \\");
      console.log("---");
      break;
    case 4:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |   |");
      console.log(" |  /\\");
      console.log("---");
      break;
    case 5:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |   |-");
      console.log(" |  /\\");
      console.log("---");
      break;
    case 6:
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(" -----");
      console.log(" |   |");
      console.log(" |   O");
      console.log(" |  -|-");
      console.log(" |  /\\");
      console.log("---");
      console.log("YOU LOSE!");
      break;
  }
}

function printInitial() {
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  console.log(" -----");
  console.log(" |   |");
  console.log(" |");
  console.log(" |");
  console.log(" |");
  console.log("---");
}
