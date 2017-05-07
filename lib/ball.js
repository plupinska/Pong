class Ball {
  constructor(width, height, game) {
    this.pos = [270,270];
    this.vel = 3;
    this.xvel = 3;
    this.yvel = 2;
    this.radius = 10;
    this.color = "#5A879A";
    this.cwidth = width;
    this.cheight = height;
    this.drawCicle = this.drawCircle.bind(this);
    this.game = game.game;
  }

  drawCircle(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360, false);
    ctx.fill();
  }


  bounce(paddle1, paddle2) {
    // Ball Dimension
    let left_x = this.pos[0] - this.radius;
    let right_x = this.pos[0] + this.radius;
    let top_y = this.pos[1] + this.radius;
    let bottom_y = this.pos[1] - this.radius;
    // Paddle Dimension
    const paddle1y = paddle1.pos[1];
    const paddle1x = paddle1.pos[0];
    const paddle2y = paddle2.pos[1];
    const paddle2x = paddle2.pos[0];
    let degrees = 1.5708;

    if (this.hitTop()) {
      this.pos[1] = this.radius;
      this.yvel = -1 * this.yvel;
    } else if (this.hitBottom()) {
      this.pos[1] = this.pos[1] - this.radius * 2;
      this.yvel = -1 * this.yvel;
    }

    //  Account for ball hitting top of paddle
    let hitPaddle = false;

   if(left_x < (paddle1x+ paddle1.width) && right_x > paddle1x && bottom_y > paddle1y && top_y < (paddle1y +paddle1.height)){
      debugger
    let relativeIntersectY = (paddle1x + (paddle1.height/2)) - this.cheight;
    let normalizedRelativeIntersectionY = (relativeIntersectY/(paddle1.height/2));
    let bounceAngle = normalizedRelativeIntersectionY * 10*Math.PI/10;
    // this.xvel = -10*Math.cos(bounceAngle);
    // this.yvel = 10*-Math.sin(bounceAngle);
    debugger
    hitPaddle = true;
// right_x > paddle2x && bottom_y > paddle2y + paddle2.height
  } else if (((top_y > paddle2y + paddle2.height && (right_x > paddle2x)) && (bottom_y < paddle2y && (right_x > paddle2x) )) ){
    debugger
    let relativeIntersectY = (paddle2y + (paddle2.height/2)) - this.cheight;
    let normalizedRelativeIntersectionY = (relativeIntersectY/(paddle2.height/2));
    let bounceAngle = normalizedRelativeIntersectionY * 10*Math.PI/10;
    // this.xvel = 10*Math.cos(bounceAngle);
    // this.yvel = 10*-Math.sin(bounceAngle);
    hitPaddle = true;
  }

    if (this.hitLeftOrRight()) {
      this.yvel = this.yvel;
      this.xvel = -1 * this.xvel;
      debugger
      if (this.pos[0] < 0  && !hitPaddle) {
        this.game.humanPlayer.score += 1;
        this.game.aiPlayer.lives -=1;
        this.pos[0] = 5;
      } else if (!hitPaddle) {
        debugger
        this.pos[0] = 490;
        this.game.humanPlayer.lives -=1;
        this.game.aiPlayer.score +=1;

      }
    }

    this.move();
  }

  hitLeftOrRight() {
    return this.pos[0] < 0 || this.pos[0] > 500;
  }

  hitBottom() {
  return this.pos[1] + this.radius > 500;
  }

  hitTop() {
    return this.pos[1] - this.radius < 0;
  }

  move() {
    this.pos[0] += this.xvel;
    this.pos[1] += this.yvel;
  }


  // hasCollidedWith(paddle) {
  //   if (((paddle.pos[0]) <= (this.pos[0] + this.radius-2)) && ((this.pos[0] + this.radius) <= (paddle.pos[0] + paddle.width))) {
  //     if (((paddle.pos[1]) <= (this.pos[1] + this.radius-2)) && ((this.pos[1] + this.radius) <= (paddle.pos[1] + paddle.height))) {
  //       return true;
  //     }
  //   } else if (((paddle.pos[0]) <= (this.pos[0] - this.radius-2)) &&  ((this.pos[0] - this.radius) <= (paddle.pos[0] + paddle.width))) {
  //     if (((paddle.pos[1]) <= (this.pos[1] - this.radius-2)) && ((this.pos[1] - this.radius) <= (paddle.pos[1] + paddle.height))) {
  //       return true;
  //     }
  //   }
  //
  //   return false;
  // }
  //
  // ballMove(ballVx = this.vel, ballVy = this.vel) {
  //
  //   debugger
  //   this.pos[0] += ballVx;
  //   this.pos[1] += ballVy;
  // }
  //
  // changeXDirection() {
  //   let angle =
  //   this.vel = this.vel * -1;
  // }
}

module.exports = Ball;
