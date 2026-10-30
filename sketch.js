let ghost ={
  x:240,
  y:180
};
let enemy ={
  x:240,
  y:180
};
let score=0;
let duration=30;
let startTime;
let state = 'start';
let spawnEvery = 60;

function setup(){
 createCanvas(480,360);
  drawGhost();
}

function draw(){
 background("#722f37");
  if (state === 'start') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Click to start', width / 2, height / 2);
    return;
  }

  if (state === 'over') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Game over\nScore: ' + score + '\nClick to retry', width / 2, height / 2);
    return;}
   let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);
  if (timeLeft <= 0) {
    state = 'over';
    return;}
  if (frameCount % spawnEvery === 0) spawnGhost();
  drawGhost(ghost.x, ghost.y);
  enemy.x += random(-3,3);
  enemy.y += random(-3,3);
  drawEnemy(enemy.x,enemy.y);

  textAlign(LEFT, TOP);
  fill(255);
  textSize(16);
  text('Score: ' + score, 12, 10);
  textAlign(RIGHT, TOP);
  text('Time: ' + ceil(timeLeft), width - 12, 10);

 noStroke();
 
fill(255);
textSize(16);
text('Score: ' + score, 12, 26);
  spookyfont = loadFont('https://fonts.googleapis.com/css2?family=Creepster&display=swap')
textFont("Roboto")
 // drawGhost(60,60)
 
  
  fill(40,30,50);
  rect(0,300,480,60);
  
}
function drawGhost(x,y){
noStroke();
  fill(220, 255, 230);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
  }
function drawEnemy(x,y){
noStroke();
  fill(220,0, 0);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
  }
function mousePressed(){
  if(dist(mouseX,mouseY,enemy.x,enemy.y) < 30){
    score -= 1;
  }
   if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score+=1;
   ghost.x += random(-100,100);
  ghost.y += random(-100,100);
  drawGhost(ghost.x,ghost.y);
   
   }
  if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    spawnGhost();
    return;
  }

}
function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}
