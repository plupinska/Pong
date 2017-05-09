const Game = require('./game.js');
const GameView = require('./gameView.js');

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('game');
  let width = canvas.width;
  let height = canvas.height;
  let ctx = canvas.getContext('2d');


  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 13:

          document.getElementById("winner").innerHTML = "";
          document.getElementById("ai").innerHTML = "";
          document.getElementById("human").innerHTML = "";
          const game = new Game(width, height, ctx);
          new GameView(game, ctx, width, height).start();
    //   case 27:
    //       ctx.clearRect( 0, 0, 500, 500);
    //       document.getElementById("winner").innerHTML = "";
    }
  });
});
