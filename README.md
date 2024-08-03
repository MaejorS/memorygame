# Rock Paper Scissors Lizard Spock
This game allows the user to select an choice to try and beat the computer's choice. First to reach the max score wins.

# Bugs
- when creating win function and increase score, console said that there was an invalid assignment to userscore. Changed const userScore and let computerScore to let userScore and let computerScore.
![Project Screenshot](/assets/images/invalidassignment.jpg)
- when trying to display increase in score in the game and display in the span, it was not displaying the increase as a result of the error below. forgot to call .innerHTML in win function under computerScore_span. Once corrected, it started increasing the score as expected.
![Project Screenshot](/assets/images/userscorespannotdefined.jpg)
- when updating win function to get result_div, css styles were removed from div as shown below. When I got the reference from the element document.querySelector(".result"), I forgot that the text is stored in a p element. Incluced p tag to correct error.
![Project Screenshot](/assets/images/divadjust.jpg)
