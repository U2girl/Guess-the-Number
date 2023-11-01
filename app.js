/* 
Can you guess the number
Guess Numbers between 1 and 20
User types in a number and presses Guess
The User gets 5 chances and given hints
*/

let userAgree = confirm("Welcome to Guess the Secret Number! Click ok to start guessing!")

if(userAgree) {
    
    let computerNumber = Math.ceil(Math.random()*10)
    let counter = 0
    while(counter < 5) {
         let userGuess = prompt ("Great! Please enter a number.")
         if (userGuess == computerNumber) {
            alert("Yay!!  You guessed the secret Number!!!")
            break
        }
      
else {

    alert("Sorry -- Try again!")

}
counter = counter + 1
    }
if(counter == 5) {
alert("You lose! :(  Only 5 guesses allowed.")
}
let playAgain = confirm("Would you like to play again?")
if(playAgain) {
    location.reload();
}
else {
    alert("OK!  Come try again another time.")
}
}
else {
    alert("Ok!  Come back to guess another time.")
}
