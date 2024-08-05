# Rock Paper Scissors Lizard Spock
Rock Paper Scissors Lizard Spock is a fun and engaging extension of the classic Rock-Paper-Scissors game. Designed to reduce the frequency of ties and introduce more strategic play, this game was popularized by Sam Kass and Karen Bryla and gained widespread recognition through its appearance on the TV show "The Big Bang Theory."

# Mockup Screenshots
Below is the single mockup of the main playing area of the game created using Placeit
<br>

![Project Screenshot](/assets/images/mockuprpsls.png)

<br>

# UX
The Rock Paper Scissors Lizard Spock game was designed with simplicity and user engagement in mind. It features a clean and intuitive interface that allows users to easily make their choice and view the results.

The design ensures that users can:
- Quickly understand and play the game.
- View scores and results clearly
- Get a brief overview of the game's rules and mechanics.

# Colour Scheme
The chosen color scheme for Rock Paper Scissors Lizard Spock is designed to be vibrant and engaging, while maintaining a clear and readable interface. The icons themselves were designed using Canva.

The colors used are as follows:
- `#FFFFFF` - General body text and headers.
- `#235789` - Background color.
- `#2d3047`- Header text color.
- `#EF476F` - Score labels background color.
- `#5BC0EB` - Choice hover background color.
- `#4dcc7d` - Green glow for user wins.
- `#fc121b` - Red glow for user losses.
- `#464647` - Gray glow for draws.

# Typography
The game uses the Google Font called 'Asap' for its modern and clean style. This font was chosen for its readability and compatibility with the game's aesthetic.

# User Stories
- As a new user, I want to understand how to play the game so that I can enjoy it.
- As a new user, I want to see the current score so that I know the game's progress.
- As a new user, I want to be able to restart the game so that I can play again if I wish.

Returning Site Users
- As a returning user, I want to quickly restart the game to continue playing.
- As a returning user, I want to review the rules and scoring system to refresh my memory.

# Wireframes

Wireframes were developed for mobile, tablet and desktop. [Balsamiq](https://balsamiq.com/) was used to design the wireframes.


# Testing

- Firefox, Chrome and Safari were used to test the game.
- Scores increment properly, game over function works and play again button reloads the page;.
- I tested to make sure that the hover action feature worked by hovering over each icon on desktop or where a pointer is used.
- I tested to make sure that icons change color depending on whether user wins or loses to the computer.
- The header, about, rules and text are all readable.
- Using lighthouse, colors and fonts are accessable.

<br>

![Project Screenshot](/assets/images/lighthousetest.jpg)

<br>

# Bugs and Fixes
- when creating win function and increase score, console said that there was an invalid assignment to userscore. Changed const userScore and let computerScore to let userScore and let computerScore.

<br>

![Project Screenshot](/assets/images/invalidassignment.jpg)

<br>

- when trying to display increase in score in the game and display in the span, it was not displaying the increase as a result of the error below. forgot to call .innerHTML in win function under computerScore_span. Once corrected, it started increasing the score as expected.

<br>

![Project Screenshot](/assets/images/userscorespannotdefined.jpg)

<br>

- when updating win function to get result_div, css styles were removed from div as shown below. When I got the reference from the element document.querySelector(".result"), I forgot that the text is stored in a p element. Incluced p tag to correct error.

<br>

![Project Screenshot](/assets/images/divadjust.jpg)

# Validator Testing
- HTML

- CSS

- JavaScript

# Deployment

# Credits
## Content
- Tutorial on switch statements discovered on YouTube tutorial [Bro Code](https://www.youtube.com/watch?v=z2fcWdoph4U)
- [Free code camp](https://www.youtube.com/@freecodecamp) for styling of the score board.
## Media
- Rock paper scissors lizard spock icons were created by me using tools from [Canva](https://www.canva.com/)

# Acknowledgments
- Thanks to my mentor [Chris Quinn](https://github.com/10xOXR) for planning and helpful feedback throughout the project.
