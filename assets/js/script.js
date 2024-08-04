// storing all of this in variables for later use. caching the dom

let userScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreArea_div = document.querySelector(".score-area");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");
const hypeMessage_div = document.getElementById("hype-message")
const playAgainButton = document.getElementById("play-again-button");

/**
 * allows computer to make random selection between 1 & 5 using the array stored in selectChoice
 */
function getComputerChoice() {
    const selectChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return selectChoice[randomNumber];
}

// Function checks if game is over if user or computer reaches 20 points
function checkGameOver() {
    if (userScore === 20) {
        gameOver("Congratulations, you beat a bot 🤖");
    } else if (computerScore === 20) {
        gameOver("Game over, you've been had by a robot 🤖");
    }
}

// Win function
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "🧑" + userChoice + "🧑 BEATS 🤖" + computerChoice + "🤖 . YOU WIN!!!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 500);
    checkGameOver();
}

// Lose Function
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "🧑" + userChoice + "🧑 LOSES TO 🤖" + computerChoice + "🤖 . TOO BAD!!!"
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 500);
    checkGameOver();
}

// Draw function
function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "🧑" + userChoice + "🧑 VS 🤖" + computerChoice + "🤖 ? TIE!!!"
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 500);
}

// Game over function hides all icons and displays message
function gameOver(message) {
    result_p.innerHTML = message;
    // Hide the game choices
    rock_div.style.display = 'none';
    paper_div.style.display = 'none';
    scissors_div.style.display = 'none';
    lizard_div.style.display = 'none';
    spock_div.style.display = 'none';
    hypeMessage_div.style.display = 'none';

    // Show the play again button
    playAgainButton.style.display = 'block';
}

// Fuction with switch statement to compare user vs computer choice. Using instead of if/else statement. Learned from youtube tutorial
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
        case 'rocklizard':
        case 'lizardspock':
        case 'spockscissors':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'paperspock':
        case 'spockrock':
            win(userChoice, computerChoice);
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
        case 'lizardrock':
        case 'spocklizard':
        case 'scissorsspock':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spockpaper':
        case 'rockspock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            draw(userChoice, computerChoice);
            break;
    }
}

// Add event listener to the "Play Again" button
playAgainButton.addEventListener('click', function() {
    // Reload the page
    window.location.reload();
});

// Main function with Event listners for rock paper scissors lizard spock icons
function main() {
    rock_div.addEventListener('click', function()
    {
        game("rock");
    })

    paper_div.addEventListener('click', function()
    {
        game("paper");
    })

    scissors_div.addEventListener('click', function()
    {
        game("scissors");
    })

    lizard_div.addEventListener('click', function()
    {
        game("lizard");
    })

    spock_div.addEventListener('click', function()
    {
        game("spock");
    })
}

main();