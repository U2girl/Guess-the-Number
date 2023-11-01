/* 
Can you guess the number
Guess Numbers between 1 and 20
User types in a number and presses Guess
The User gets 5 chances and given hints
*/

let userAgree = confirm("Would you like to try to guess the secret Number?")

if(userAgree) {
    
    let computerNumber = 3
    while(true) {
         let userGuess = prompt ("Please enter a number.")
         if (userGuess == computerNumber) {
            alert("Yay!!  You guessed the secret Number!!!")
        
         }
        
else {

    alert("Sorry -- Try again!")
}
    break

}
}

else {
    alert("Ok!  Come back to guess another time.")
}
