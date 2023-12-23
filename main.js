let tilesContainer = document.querySelector(".tiles");
let colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "teal",
  "purple",
  "brown",
];
let coloursList = [...colours, ...colours];
let tilesCount = coloursList.length;

/* Game starting */
let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(colour) {
  let element = document.createElement("div");

  element.classList.add("tile");
  element.setAttribute("data-colour", colour);
  element.setAttribute("data-revealed", "false");

  element.addEventListener("click", () => {
    let revealed = element.getAttribute("data-revealed");

    if (awaitingEndOfMove || revealed || element === activeTile) {
      return;
    }

    element.style.backgroundColor = colour;

    if (!activeTile) {
      activeTile = element;

      return;
    }

    let colourToMatch = activeTile.getAttribute("data-colour");

    if (colourToMatch === colour) {
      activeTile.setAttribute("data-revealed", "true");
      element.setAttribute("data-revealed", "true");
      activeTile = null;
      awaitingEndOfMove = false;
      revealCount += 2;

      if (revealCount === tilesCount) {
        alert("You win! Refresh the page to play again");
      }

      return;
    }

    awaitingEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = "";
      activeTile.style.backgroundColor = "";
      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  });

  return element;
}

/* Creating tiles */
for (let i = 0; i < tilesCount; i++) {
  let randomIndex = Math.floor(Math.random() * coloursList.length);
  let colour = coloursList[randomIndex];
  let tile = buildTile(colour);

  coloursList.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
