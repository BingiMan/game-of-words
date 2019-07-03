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
  </main>

  <footer>
    <Credits />
  </footer>
</div>
```
## Code Snippet
```
handleKeyDown = (event) => {
    const form = event.target.form;
    const characterKey = event.keyCode;//character code
    const currentInputIndex = Array.prototype.indexOf.call(form, event.target)

    // console.log(key);
    // avoid doing something when:
    // backspace : 8 and first character
    // enter: 13
    // space : 32
    //  - : 189
    //  tab : 9
    if ((characterKey === 8 && currentInputIndex === 0) || characterKey === 32 || characterKey === 13 || characterKey === 189 || characterKey === 9)
      event.preventDefault();//Do nothing on UI

    // Avoid  writing                       //(If current index is empty and its not 0) and the character is not TAB aor space
    if ((event.target.value.length >= 1 || (event.target.value === '' && currentInputIndex !== 0)) && characterKey !== 9 && characterKey !== 32) {
      if (characterKey === 8) {  // delete when backspace
        if (currentInputIndex > 0) // avoid going to less than 0 index
          form.elements[currentInputIndex - 1].focus();

        form.elements[currentInputIndex].value = '';
        event.preventDefault(); // avoid focusing on previous when assigning empty
      } else if (currentInputIndex + 1 < form.elements.length) {
        form.elements[currentInputIndex + 1].focus(); // go to next field//input if length of characters is higher than 1 character
      } else {
        event.target.value = event.target.value.charAt(0); // writes a character if characters length is 0
        event.preventDefault();
      }
    }
  };
```

