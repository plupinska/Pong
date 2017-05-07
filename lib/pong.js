const Game = require('./game.js');
const GameView = require('./gameView.js');

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('game');
  let width = canvas.width;
  let height = canvas.height;
  let ctx = canvas.getContext('2d');
  let pressed = false;
  let enterPress = 0;
  let spacePress = 0;
  // document.addEventListener("keydown", (e) => {
  //   switch (e.keyCode) {
  //     case 13:
  //       if (!pressed) {
  //         const game = new Game(width, height);
  //         new GameView(game, ctx, width, height).start();
  //         pressed = true;
  //       }
  //   }
  // });

  window.addEventListener("keydown", (e) => {
    debugger
    if (e.keyCode === 13) {
      if (!pressed && (enterPress % 3 === 0)) {
        pressed = true;
        enterPress += 1;
        const game = new Game(width, height);
        new GameView(game, ctx, width, height).start();
      } else if (!pressed) {
        pressed = false;
        enterPress += 1;
        ctx.clearRect( 0, 0, 500, 500);
      } else {
        ctx.clearRect(0, 0, 500, 500);
        enterPress += 1;
      }
    } else if (e.keyCode === 32) {
        if (!pressed && enterPress % 3 === 0) {
          const aiGame = new aiGame(width, height);
          new GameView(aiGame, ctx, width, height).start();
          spacePress += 1;
          pressed = true ;
      } else {
        pressed = false;
        ctx.clearRect(0, 0, 500, 500);
        spacePress += 1;
      }
    }
  });
});
