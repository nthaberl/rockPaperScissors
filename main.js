/* 
rock > scissors
scissors > paper
paper > rock
 */
let userInput = window.prompt("It's time for rock paper scissors! Choose wisely: ");

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
        return userInput
    }
    else {
        return alert("Please choose rock, paper, or scissors.")
    }
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        choice = "rock"
    }
    if (random === 1){
        choice = "paper"
    }
    if (random === 2){
        choice = "scissors"
    }
    return choice
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === "bomb"){
        return alert ("Congrats, you obliterated the computer 8)")
    }
    if (userChoice === computerChoice){
        console.log("You both chose the same weapon, it's a tie")
        return alert ("it's a tie!")
    }
    if (userChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("computer won")
            return alert("The computer chose paper won :(")
        }
        else {
            console.log("you won")
            return alert("The computer chose scissors, you won!")
        }
    }
    if (userChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("computer won")
            return alert("The computer chose scissors and won :(")
        }
        else {
            console.log("you won :)")
            return alert("The computer chose rock, you won!")
        }
    }
    if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log("computer won")
            return alert("The computer chose rock and won :(")
        }
        else {
            console.log("you won")
            return alert("The computer chose paper, you won!")
        }
    }
}

function playGame(){
    userChoice = getUserChoice(userInput);
    console.log(userChoice)

    computerChoice = getComputerChoice();
    console.log(computerChoice)

    console.log(determineWinner(userChoice, computerChoice));
}

// console.log(getUserChoice("rock"))
// console.log(getComputerChoice())
// console.log(determineWinner("scissors", "rock"))
playGame();
