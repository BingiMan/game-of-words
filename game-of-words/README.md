# Project Overview

## GAME OF WORDS

 This App is about a game based on lenguage learning, starting the match , It will give you synonyms of a word that you need to compile in order to get points..
 
## API: https://www.wordsapi.com/


## Wireframes

![UNADJUSTEDNONRAW_thumb_b40](https://user-images.githubusercontent.com/50800873/60344689-1abffa80-9985-11e9-88e0-ca594e1f356e.jpg)
 
 
 

## MVP
- Find and use external api 
- Render data on page 
- Allow user to Play the Game
- User should be able to use the Input.

- Scoreboard
- Save their decoded Words on a List
- Add a timer
- Hint Penalty

## PostMVP
- Allow the user to drag and drop the coded word, instead of the Input.
- Allow the user to swap the random word, Like a "Roll the dice"
- Display a side section with the decoded words.

## Task

* Navigation bar // 
* Get random words //
* Separate every letter of the random word //
* Randomize the letters //
* Display synonyms on top of the random word //
* Roll dice to swap random word // {maybe}
* If player didnt guess the right word, it discount 1 point and change the word // 
* Store the words compiled and get all the data about it // {maybe}
* Scoreboard //
* Styling //

## React Component Hierarchy
```
< div className= ‘ App’ >
  <header>
    <Navigation />
    <HomePage />
    <Instruction />
  </header>

  <main>
    <Game />
    <Score />
    <Definition />
    <RandomWord />
    <Input />
    <DecodedWordList />
  </main>

  <footer>
    <Credits />
  </footer>
</div>
```

