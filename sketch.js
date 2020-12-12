var lixeiras = [];

function preload() {
  
  lixeiras[0]=loadImage('lixeira01.png')
  lixeiras[1]=loadImage('lixeira02.png')
  lixeiras[2]=loadImage('lixeira03.png')
  lixeiras[3]=loadImage('lixeira04.png')
  lixeiras[4]=loadImage('lixeira05.png')
  lixeiras[5]=loadImage('lixeira06.png')
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  j=0
  if(mouseIsPressed){
    image(lixeiras[j], 10, 10, 50, 50);
    
  }
  j++
  
}