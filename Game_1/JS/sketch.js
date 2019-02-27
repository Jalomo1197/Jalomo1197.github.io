let snowflakes = []; // array to hold snowflake objects
var canves;
var gameOver = false;
var ball;
var ball_x = 100;
var ball_y = 200;
var shot = false;
var lowerbound_xspeed = 17;
var upperbound_xspeed = 19;
var lowerbound_size = 80;
var upperbound_size = 90;
var level = 1;
var colorchange = 110;

//Blue Object
var blue_random_y = 200;
var blue_obj_x = 1500;
var blue_obj_speed_x = 10;
var blue_obj_speed_y = -1;
var blue_obj_size = 50;
var blue_reset_obj = false;
var hitblue = false;

//Red Object
var red_random_y = 100;
var red_obj_x = 1500;
var red_obj_speed_x = 10;
var red_obj_speed_y = -1;
var red_obj_size = 50;
var red_reset_obj = false;
var hitred = false;

//Green Object
var green_random_y = 300;
var green_obj_x = 1500;
var green_obj_speed_x = 10;
var green_obj_speed_y = -1;
var green_obj_size = 50;
var green_reset_obj = false;
var hitgreen = false;

//Purple Object
var purple_random_y = 400;
var purple_obj_x = 1500;
var purple_obj_speed_x = 10;
var purple_obj_speed_y = -1;
var purple_obj_size = 50;
var purple_reset_obj = false;
var hitpurple = false;

//ChaseBall Object
var ChaseBall_in = false;
var ChaseBall_random_y = 200;
var ChaseBall_x = 1500;
var ChaseBall_speed_x = 5;
var ChaseBall_speed_y = 1;
var ChaseBall_size = 50;
var ChaseBall_reset_obj = false;
var hitChaseBall = false;

//code in setup runs once
function setup() {
  canves = createCanvas(1500, 800);

  switch (level){
    case 5:
      lowerbound_xspeed = 19;
      upperbound_xspeed = 20;
      lowerbound_size = 80;
      upperbound_size = 95;
      break;
    case 10:
      lowerbound_xspeed = 20;
      upperbound_xspeed = 22;
      lowerbound_size = 90;
      upperbound_size = 100;
      ChaseBall_in = true;
      colorchange += 1;
      ChaseBall_speed_x = 7;
      break;
    case 15:
      lowerbound_xspeed = 21;
      upperbound_xspeed = 25;
      lowerbound_size = 95;
      upperbound_size = 110;
      break;
    case 20:
      lowerbound_xspeed = 24;
      upperbound_xspeed = 25;
      lowerbound_size = 110;
      upperbound_size = 120;
      colorchange += 2;
      ChaseBall_speed_x = 10;
      break;
    case 22:
      ChaseBall_in = true;
    default:
      lowerbound_xspeed = lowerbound_xspeed;
      upperbound_xspeed = upperbound_xspeed;
      lowerbound_size = lowerbound_size;
      upperbound_size = upperbound_size;
  }

  if (!gameOver){
    background(0,0,0);
    rectMode(CENTER);
    if(blue_reset_obj){
      blue_random_y = random(0,800);
      blue_obj_x = 1400;
      blue_reset_obj = false;
      blue_obj_speed_x = random(lowerbound_xspeed,upperbound_xspeed);
      blue_obj_speed_y = random(-2,2);
      blue_obj_size = random(lowerbound_size,upperbound_size);
    }
    if(red_reset_obj){
      red_random_y = random(0,800);
      red_obj_x = 1400;
      red_reset_obj = false;
      red_obj_speed_x = random(lowerbound_xspeed,upperbound_xspeed);
      red_obj_speed_y = random(-2,2);
      red_obj_size = random(lowerbound_size,upperbound_size);
    }
    if(green_reset_obj){
      green_random_y = random(0,800);
      green_obj_x = 1400;
      green_reset_obj = false;
      green_obj_speed_x = random(lowerbound_xspeed,upperbound_xspeed);
      green_obj_speed_y = random(-2,2);
      green_obj_size = random(lowerbound_size,upperbound_size);
    }
    if(purple_reset_obj){
      purple_random_y = random(0,800);
      purple_obj_x = 1400;
      purple_reset_obj = false;
      purple_obj_speed_x = random(lowerbound_xspeed,upperbound_xspeed);
      purple_obj_speed_y = random(-2,2);
      purple_obj_size = random(lowerbound_size,upperbound_size);
    }
    if (ChaseBall_in = true && ChaseBall_reset_obj){
      ChaseBall_random_y = random(0,800);
      ChaseBall_x = 1400;
      ChaseBall_reset_obj = false;
      ChaseBall_speed_x = ChaseBall_speed_x;
      ChaseBall_speed_y = 2;
      ChaseBall_size = random(80,90);
    }
  }
  else{
      background(10,0,0);
      fill(100,100,100);
      noStroke();
      ellipse(700,300,400,400);
      rect (700,500,250,100);
      fill(0,0,0);
      ellipse(620,250,120,150);
      ellipse(780,250,120,150);
  }
}

//runs over and over
function draw() {
  setup();
  if(!gameOver){
    if (mouseIsPressed){
      shot = true;
    }

    //declaring players ball
    fill(100,200,300);
    ball = ellipse(ball_x, ball_y, 50,50);
    fill(0,0,0);
    ellipse(ball_x+10,ball_y-10,10,10);
    fill(100,100,100);
    ellipse(ball_x+11,ball_y-11,5,5);


    //Movement of the players ball
    if (keyCode === DOWN_ARROW){
        ball_y = ball_y + 5 + level/7;
    }else if (keyCode === UP_ARROW) {
        ball_y = ball_y - 5 - level/7;
    }

    //Blue Flying Object
    //fill(11,11,200);
    fill(colorchange,67,33);
    ellipse(blue_obj_x,blue_random_y, blue_obj_size, blue_obj_size);
    blue_obj_x -= blue_obj_speed_x;
    blue_random_y -= blue_obj_speed_y;
    if (blue_obj_x < 0){
      blue_reset_obj = true;
    }

    //Red Flying Object
    //fill(200,11,20);
    fill(colorchange,67,33);
    ellipse(red_obj_x,red_random_y, red_obj_size, red_obj_size);
    red_obj_x -= red_obj_speed_x;
    red_random_y -= red_obj_speed_y;
    if (red_obj_x < 0){
      red_reset_obj = true;
    }

    //Green Flying Object
    //fill(20,200,20);
    fill(colorchange,67,33);
    ellipse(green_obj_x,green_random_y, green_obj_size, green_obj_size);
    green_obj_x -= green_obj_speed_x;
    green_random_y -= green_obj_speed_y;
    if (green_obj_x < 0){
      green_reset_obj = true;
    }

    //Purple Flying Object
    //fill(102, 51, 153);
    fill(colorchange,67,33);
    ellipse(purple_obj_x,purple_random_y, purple_obj_size, purple_obj_size);
    purple_obj_x -= purple_obj_speed_x;
    purple_random_y -= purple_obj_speed_y;
    if (purple_obj_x < 0){
      purple_reset_obj = true;
      level++;
    }


    //ChaseBall Flying Object
      fill(101,30,30);
      ellipse(ChaseBall_x,ChaseBall_random_y, ChaseBall_size, ChaseBall_size);
      fill(0,0,0);
      ellipse(ChaseBall_x-(ChaseBall_size/4),ChaseBall_random_y-(ChaseBall_size/4), 12, 12);
      fill(100,100,100);
      ellipse(ChaseBall_x-(ChaseBall_size/4)-1,ChaseBall_random_y-(ChaseBall_size/4)-1, 6, 6);
      ChaseBall_x -= ChaseBall_speed_x;
      if (ChaseBall_random_y > ball_y)
        ChaseBall_random_y -= ChaseBall_speed_y;
      else if (ChaseBall_random_y <= ball_y)
        ChaseBall_random_y += ChaseBall_speed_y;
      if (ChaseBall_x < 0){
        ChaseBall_reset_obj = true;
      }


    //assigning booleans
    hitblue = (ball_x >= blue_obj_x - blue_obj_size/2  && ball_x <= blue_obj_x + blue_obj_size/2) && (ball_y >= blue_random_y - blue_obj_size/2 && ball_y <= blue_random_y +        blue_obj_size/2);
    hitred = (ball_x >= red_obj_x - red_obj_size/2  && ball_x <= red_obj_x + red_obj_size/2) && (ball_y >= red_random_y - red_obj_size/2 && ball_y <= red_random_y +
              red_obj_size/2);
    hitgreen = (ball_x >= green_obj_x - green_obj_size/2  && ball_x <= green_obj_x + green_obj_size/2) && (ball_y >= green_random_y - green_obj_size/2 && ball_y <=
              green_random_y + green_obj_size/2);
    hitpurple = (ball_x >= purple_obj_x - purple_obj_size/2  && ball_x <= purple_obj_x + purple_obj_size/2) && (ball_y >= purple_random_y - purple_obj_size/2 && ball_y <=
              purple_random_y + purple_obj_size/2);
    hitChaseBall = (ball_x >= ChaseBall_x - ChaseBall_size/2  && ball_x <= ChaseBall_x + ChaseBall_size/2) && (ball_y >= ChaseBall_random_y - ChaseBall_size/2 && ball_y <= ChaseBall_random_y + ChaseBall_size/2);

    //checking for collision
    if (hitblue || hitred || hitgreen || hitpurple || hitChaseBall)
    {
      gameOver = true;
    }
  }
  fill(110,110,110);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

}


function windowResized(){
    canves = createCanvas(windowWidth, windowHieght);
}



// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.4; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}


//**********************************************************
//    To disable the scroll affect due by up and down keys
//**********************************************************
var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);

//https://creative-coding.decontextualize.com/making-games-with-p5-play/
