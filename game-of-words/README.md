# Project Overview
------------------------------------------
## GAME OF WORDS

 This App is about a game based on lenguage learning, starting the match , It will give you synonyms of a word that you need to compile in order to get points..
 
## API: https://www.wordsapi.com/
------------------------------------------
## Wireframes

![UNADJUSTEDNONRAW_thumb_b40](https://user-images.githubusercontent.com/50800873/60344689-1abffa80-9985-11e9-88e0-ca594e1f356e.jpg)
 
------------------------------------------
## Task
------------------------------------------
* Navegation bar // 
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

