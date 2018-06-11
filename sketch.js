let img01;
let img02;
let img03;
let img04;  
let img05;   
let img06;
let file01;
let file02;
let file03;
let file04;
let file05;
let file06;
let background;

let GameOn = true;

function preload() {
    
  img01 = loadImage("./data/dice_md-01.png");
  img02 = loadImage("./data/dice_md-02.png");
  img03 = loadImage("./data/dice_md-03.png");
  img04 = loadImage("./data/dice_md-04.png");
  img05 = loadImage("./data/dice_md-05.png");  
  img06 = loadImage("./data/dice_md-06.png");
  file01 = loadSound("./data/voice_md-01.mp3");
  file02 = loadSound("./data/voice_md-02.mp3");
  file03 = loadSound("./data/voice_md-03.mp3");
  file04 = loadSound("./data/voice_md-04.mp3");
  file05 = loadSound("./data/voice_md-05.mp3");
  file06 = loadSound("./data/voice_md-06.mp3");
  background = loadSound("./data/background.mp3");
}

function setup() {
    createCanvas(windowWidth,windowWidth);
    background.loop();
    background.amp(0.05);
}

function draw() {
  if(frameCount%40 !== 0) return;
  if (GameOn) {
    DiceNumber = Math.floor(Math.random()*6);
  }
  switch(DiceNumber) {
  case 0:
    image(img01, 0, 0, width, height);
    break;
  case 1:
    image(img02, 0, 0, width, height);
    break;
  case 2:
    image(img03, 0, 0, width, height);
    break;
  case 3:
    image(img04, 0, 0, width, height);
    break;
  case 4:
    image(img05, 0, 0, width, height);
    break;
  case 5:
    image(img06, 0, 0, width, height);
    break;
  }
    
}

function mouseClicked() {
  GameOn = !GameOn;
  if (!GameOn) {
    switch (DiceNumber) {

    case 0:
      file01.play();
      break;
    case 1:
      file02.play();
      break;
    case 2:
      file03.play();
      break;
    case 3:
      file04.play();
      break;
    case 4:
      file05.play();
      break;
    case 5:
      file06.play();
      break;
    }
  }
}

}

function touchStarted() {
  GameOn = !GameOn;
  if (!GameOn) {
    switch (DiceNumber) {

    case 0:
      file01.play();
      break;
    case 1:
      file02.play();
      break;
    case 2:
      file03.play();
      break;
    case 3:
      file04.play();
      break;
    case 4:
      file05.play();
      break;
    case 5:
      file06.play();
      break;
    }
  }
}