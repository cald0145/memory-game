let tilesContainer = document.querySelector('.tiles');
let colours = ['red', 'green', 'blue', 'yellow', 'orange', 'teal', 'purple', 'brown'];
let coloursList = [...colours, ...colours];
let tilesCount = coloursList.length;

/* Game starting */
let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

for (let i = 0; i < tilesCount; i++) {
    let randomIndex = Math.floor(Math.random() * coloursList.length);
    let colour = coloursList[randomIndex];
}