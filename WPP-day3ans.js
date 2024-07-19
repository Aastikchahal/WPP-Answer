
var number = Math.ceil(Math.random() * 10); 

console.log(number);

// prompt the guess number between i to 10
var guessNumber = prompt("Guess the number between 1 and 10 ");


if(guessNumber == number) {
    console.log("Good Work");
}

else {
    console.log("Not Matched, the number is", number);
}