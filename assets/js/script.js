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

/**
 * allows computer to make random selection between 1 & 5 using the array stored in selectChoice
 */
function getComputerChoice() {
    const selectChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return selectChoice[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + " . YOU WIN!!!";
}

function lose() {

}

function draw() {
    console.log("draw")
}

// Fuction with switch statement to compare user vs computer choice
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