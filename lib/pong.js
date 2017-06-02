const Game = require('./game.js');
const GameView = require('./gameView.js');


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('game');
  let width = canvas.width;
  let height = canvas.height;
  let ctx = canvas.getContext('2d');
  let disable = false;
  let button = document.getElementById("button-container");
  let modal = document.getElementById("modal");

  function startGame() {
    disable = true;
    modal.id="modal-click";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("ai").innerHTML = "";
    document.getElementById("human").innerHTML = "";
    const game = new Game(width, height, ctx);
    new GameView(game, ctx, width, height).start();
  }

  document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && !disable) {
        startGame();
      } else if (e.keyCode === 13 && document.getElementById("winner").innerHTML.length > 0) {
        startGame();
      }
  });

  button.addEventListener("click", (e) => {
    modal.id="modal-click";
  });
});
