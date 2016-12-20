function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
    
    strokeWeight(2.5);
    
    angleMode(DEGREES);
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  //var newMax = 36;
  //var volume = map(volume,0,1,0,newMax);
    
    
    translate(width/2, height/2);
    background(50);
    noFill();
    stroke(230);
    

    
    var numRaggi = round(map(volume, 0, 1, 0, 32))
    
    
    var incr = 360/numRaggi;
        ellipse(0,0,15,15);

    
    for(i = 0; i < numRaggi; i++){
          
    rotate(incr);
        
    disegnaFiocco();
    
    }
    
    
    noStroke();
    fill(230);
    textFont('Roboto Mono');
    textSize(12);
    text("Have a Holly Jolly Christmas",-100,-220);
    text("Milan — 2016",-42,220);
    //rect(-100,-120,198,10)
    
  
  
}

function disegnaFiocco() {
    line(0,-7.5,0,-130);
    ellipse(0,-137.5,10,10);
    line(0,-45.5,14,-69);
    line(0,-45.5,-14,-69);
    line(0,-85.5,41,-99);
    line(0,-85.5,-41,-99);
    
   /*  ellipse(0,0,15,15);
    line(0,-7.5,0,-130);
    ellipse(0,-137.5,10,10);
    line(0,-45.5,14,-69);
    line(0,-45.5,-14,-69);
    line(0,-85.5,41,-99);
    line(0,-85.5,-41,-99);*/
}