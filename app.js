/* 
Can you guess the number
Guess Numbers between 1 and 20
User types in a number and presses Guess
The User gets 5 chances and given hints
*/

let userAgree = confirm("Welcome to Guess the Secret Number!  Click ok to start guessing")
if(userAgree) {
    let computerNumber = Math.ceil(Math.random()*10)
    console.log(computerNumber)
    let counter = 0
    while(counter < 5) {
        let userGuess = prompt("Please enter a number between 1 and 20")
        if(userGuess == computerNumber) {
            alert("Yay! You guessed the Secret Number!!")
            break
        }
        else {
            alert("Sorry! Wrong Number")
        }
        counter += 1
          }
    
if(counter == 5) {
    alert("Sorry! Only 5 Guesses Allowed")
}
let playAgain = confirm("Play again?")
if(playAgain) {
    location.reload();
}
else {
    alert("Ok! Come back and play another time.")

}
}
else {
    alert("Ok! Come back and play another time.")
}