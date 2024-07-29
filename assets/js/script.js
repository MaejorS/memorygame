// storing all of this in variables for later use. caching the dom

const userScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreArea_div = document.querySelector(".score-area");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

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