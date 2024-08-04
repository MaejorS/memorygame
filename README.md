# Rock Paper Scissors Lizard Spock
Rock Paper Scissors Lizard Spock is a fun and engaging extension of the classic Rock-Paper-Scissors game. Designed to reduce the frequency of ties and introduce more strategic play, this game was popularized by Sam Kass and Karen Bryla and gained widespread recognition through its appearance on the TV show "The Big Bang Theory."

# Mockup Screenshots
Below is the single mockup of the main playing area of the game created using Placeit
![Project Screenshot](/assets/images/mockuprpsls.png)

# UX
The Rock Paper Scissors Lizard Spock game was designed with simplicity and user engagement in mind. It features a clean and intuitive interface that allows users to easily make their choice and view the results.

The design ensures that users can:
- Quickly understand and play the game.
- View scores and results clearly
- Get a brief overview of the game's rules and mechanics.

# Colour Scheme
The chosen color scheme for Rock Paper Scissors Lizard Spock is designed to be vibrant and engaging, while maintaining a clear and readable interface. The icons themselves were designed using Canva.

The colors used are as follows:
- #FFFFFF - General body text and headers.
- #235789 - Background color.
- #2d3047 - Header text color.
- #EF476F - Score labels background color.
- #5BC0EB - Choice hover background color.
- #4dcc7d - Green glow for user wins.
- #fc121b - Red glow for user losses.
- #464647 - Gray glow for draws.

# Typography
The game uses the Google Font called 'Asap' for its modern and clean style. This font was chosen for its readability and compatibility with the game's aesthetic.

# User Stories
- As a new user, I want to understand how to play the game so that I can enjoy it.
- As a new user, I want to see the current score so that I know the game's progress.
- As a new user, I want to be able to restart the game so that I can play again if I wish.

Returning Site Users
- As a returning user, I want to quickly restart the game to continue playing.
- As a returning user, I want to review the rules and scoring system to refresh my memory.


# Bugs
- when creating win function and increase score, console said that there was an invalid assignment to userscore. Changed const userScore and let computerScore to let userScore and let computerScore.
![Project Screenshot](/assets/images/invalidassignment.jpg)
- when trying to display increase in score in the game and display in the span, it was not displaying the increase as a result of the error below. forgot to call .innerHTML in win function under computerScore_span. Once corrected, it started increasing the score as expected.
![Project Screenshot](/assets/images/userscorespannotdefined.jpg)
- when updating win function to get result_div, css styles were removed from div as shown below. When I got the reference from the element document.querySelector(".result"), I forgot that the text is stored in a p element. Incluced p tag to correct error.
![Project Screenshot](/assets/images/divadjust.jpg)
