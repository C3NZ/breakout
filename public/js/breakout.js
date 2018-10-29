import {BasicBrick} from './brick.js';
import {initHandlers} from './utils.js'

//Global variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//the balls x and y position
let x = canvas.width/2;
let y = canvas.height - 30;

//What to changes the balls x and y position with.
let dx = 2;
let dy = -2;

//Size of the ball
const ballRadius = 10;

//Brick meta information
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


//Create a multi-dimensional array to represent the bricks to destroy
const bricks = [];

//Checking to see if the ball collides with any bricks
function collisionDetection() {
    for(let col = 0; col < brickColumnCount; col++) {
        for(let row = 0; row < brickRowCount; row++) {
            const brick = bricks[col][row];
            
            //Make sure that the brick has a status of 1
            if(brick.status == 1) {
                if(x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
                    dy = -dy;
                    brick.status = 0;
                    score++;
                }
            }
        }
    }
}

//Draw the paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let hslValue = 0;
const counter = 0;

//Draw all of our bricks
function drawBricks() {

                        }
    }
    }
}

//draw the score 
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

//Draw the lives the player has left
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

//draw the screen
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(1px)'
    //Draw both our paddle and ball.
    drawBall();
    drawBricks(); 
    drawPaddle();
    drawScore();
    drawLives();
    //Collision 
    collisionDetection()

    //Collision detection logic for the x axis. Constrains the ball to both walls
    if(x + dx > canvas.width - ballRadius || x + dx < 0 + ballRadius){
        dx = -dx;
    }

    //Collision detection logic for the y axis.
    //If the ball hits the bottom of the screen, game over!
    if(y + dy < 0 + ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height - ballRadius){
        //Check if the ball hit the paddle, if not GG
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }else{
            lives--;
            if(!lives) {
                return document.location.reload();
            }else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = 2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }
    
               
    //Handle moving the paddle left and right if the user is pressing a button
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }

    x += dx;
    y += dy;

} 

//Run our code 
function run() {
    //update(
    initHandlers();
    //Add event listeners for keys being pressed updd & down
    draw();
    requestAnimationFrame(run);
}

run();
