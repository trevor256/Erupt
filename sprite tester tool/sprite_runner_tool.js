//sprite runner tool runs a sprite sheet, to check it for a game
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//canvas window
const CANVAS_WIDTH = canvas.width = 755;
const CANVAS_HEIGHT = canvas.height = 755;

//sprite import
const playerImage = new Image();
playerImage.src = 'sprite sheets/marie.png';


let playerState =  "idle"
// frame selector
const spriteWidth = 595;
const spriteHeight = 723;
let gameFrame = 0;
const staggerFrames = 18;
const spriteAnimations = [];
const animationStates = [
   {
      name: 'idle',
      frames: 8,
   },
   {
      name: 'jump',
      frames: 7,
   },
   {
      name: 'fall',
      frames: 7,
   },
   {
      name: 'run',
      frames: 9,
   },
   {
      name: 'dizzy',
      frames: 11,
   },
   {
      name: 'sit',
      frames: 5,
   }
];
animationStates.forEach((state, index) => {
   let frames = {
         loc: [],
   }
      for (let j = 0; j < state.frames; j++){
         let positionX = j * spriteWidth;
         let positionY = index * spriteHeight;
         frames.loc.push({x: positionX, y: positionY});
   }
   spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate(){
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;  //slow down frmaes
   frameX = spriteWidth * position;
   let frameY = spriteAnimations[playerState].loc[position].y;
   ctx.drawImage(playerImage,  frameX, frameY, 
    spriteWidth, spriteHeight,  0 , 0, spriteWidth, spriteHeight,);
   

   gameFrame++; //slow down frmaes
   requestAnimationFrame(animate);
};
animate();