[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe Game Project

## Overview

My first project at General Assembly is a Single Page Application for the web allowing a user to play Tic Tac Toe.

My User Stories for this project are as follows:

  1. Only registered users can play Tic Tac Toe
  2. As a user, I want to be able to register for Tic Tac Toe with my email and a password.
  3. As a user once registered, I want to be able to log in to play.
  4. As a user, I want to be able to change my password once logged in.
  5. As a user, I want to click on a cell and see either x or o appear.
  6. As a user, I want to be unable to select the same cell twice, 2 X's or 2 O's in a row (must alternate) or have more than 9 selections in the same game
  7. As a user, I want to see my score on the screen after each game.
  8. As a user, I want to decide whether to play again after a game is complete.
  9. As a user, I want to retrieve a list of game statistics.
  10. As a user, I want to be able to log my moves.
  11. As a user, I want to be able to log out of the game.

## Technologies Used

  *HTML5
  *CSS3
  *Bootstrap
  *JavaScript
  *JQuery
  *GoogleFonts

  HTML5 was used to build the framework for the app. The app was styled with CSS and modals were created with Bootstrap.

  All game logic was written with JavaScript. JQuery was used for all DOM manipulation, view updates and AJAX calls to the API.

## Planning

My planning began with wireframing. This helped me understand how a user would flow through the app, what types of inputs were required and how many distinct views would need to be generated.

![wireframe_0](https://media.git.generalassemb.ly/user/11649/files/91c1eefe-7a2d-11e8-9f30-888cbaf5e065)
![wireframe_1](https://media.git.generalassemb.ly/user/11649/files/91e0356c-7a2d-11e8-8f1a-1be1047064cc)
![wireframe_2](https://media.git.generalassemb.ly/user/11649/files/91fa0122-7a2d-11e8-94aa-a8fa52671713)

In terms of data structures, i found arrays best helped me understand and conceptualize how the game logic could be interpreted through code.
I planned to use formfields if possible for gameboard cells to ease the display/capture of text-based input (X or O).
I planned to use modals for most of my dynamically generated user-facing messaging.

In terms of the coding, my focus was first on constructing functional game-logic and building a rudimentary UI to ease visualization. Building the game-logic was probably the most enjoyable portion of the project for me. While I enjoyed this part, it did serve to underscore some gaps in my knowledge especially regarding variable scoping, targeting the correct events/returns from functions, the construction of a modular code base, nested loops and higher level logic concerns (like understanding the proper way to score tic tac toe).

Building the logic also forced me to adopt a much more methodical, less reactive approach to problem solving. This was most evident when I encountered a bug in my reset function. Identifying the problem (and eventually, the correct fix) required an extended process of replication and recording to identify exactly what the pattern was and targeting the right returns through console logs and the debugger. This is not an approach that was intuitive or easy for me, but one that I learned by observing other peoples workflows.

Second, I focused on establishing fields for user authentication and linking those interactions to the API.

Finally, I focused on game-based API interactions. This was the most challenging portion of the project for me. Most of my difficulties stemmed from a lack of higer-level understanding regarding the way a server interacts with a client and a failure to properly understand exactly what the API requests were doing in terms of game-play.

My progression through this project relied heavily on the schedule provided. I found it to be very useful in keeping me on track and simplifying what, on the outset, looked like a daunting and very overwhelming task.

I found myself approaching each coding task in a fairly methodical way. I tested often with console logs/the debugger and tried to be as conscientious as possible with commits as each piece of functionality fell into place.

## Updates

Issued that need to be resolved:

* UX needs to be smoothed out. At present, the user is required to click a button if they would like their moves to be saved on the server. I have tried linking this functionality to login or reset, however, each of these options negativley affects the creation of the empty game object on the server. I would like to resolve this issue in future iterations.
* Allow a user to declare a 'quit' state if a game is abandoned. At present, abandoned games do show an 'over' state of false - however, unless the user clicks a button to create a new game - i have no way of preventing further (valid) clicks on abandoned games.

## Additional Functionality

In the future, I would like to include an option where the user can play against the computer.

I would like to go back to refactor my code base to ensure it is as DRY and efficient as possible.

I would like to address the bonus requirements.


##
