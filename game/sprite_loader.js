//sprite runner tool runs a sprite sheet, to check it for a game
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//canvas window
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//sprite import
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

// frame selector
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const frameRate = 8;

function animate(){
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   // ctx.fillRect(50,500,100,100);
   ctx.drawImage(playerImage,  frameX * spriteWidth, frameY * spriteHeight, 
    spriteWidth, spriteHeight,  0 , 0, spriteWidth, spriteHeight,);
   
   //frame select 
if (gameFrame % frameRate == 0){
    if (frameX < 6) frameX++;
    else frameX = 0;
}
   gameFrame++; //slow down frmaes
   requestAnimationFrame(animate);
};
animate();