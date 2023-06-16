let x 
let y


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = 0
  y = 0
  
}

function draw() {
  background(0);
  translate(windowWidth/2,windowHeight/2);
  rotate(-90);
  scale(1.5)


  
  let h = hour();
  let m = minute();
  let s = second();
  //let ms = new
  //Date().getMilliseconds();
  
  //let angolo_h = TWO_PI / 12 * h + TWO_PI/12/60*m
  //let angolo_m = TWO_PI / 60 * m
  //let angolo_s = TWO_PI / 60 * s + TWO_PI /60 * ms /1000
  
  //Secondi
  strokeWeight(8);
  stroke(255,50,200);
  noFill();
  let end1 = map(s,0,60,0,360);
  arc(x+0,y+0,200,200,0,end1);
  
  //Minuti
  stroke(255,100,100);
  //noFill();
  let end2 = map(m,0,60,0,360);
  arc(x+0,y+0,150,150,0,end2)
  
  //Ore
  stroke(255,200,50);
  let end3 = map(h % 12, 0, 12, 0,360);
  arc(x+0,y+0,100,100,0,end3)
  
  //facina
  stroke(255)
  ellipse(x+10,y+-10,10,5);
  ellipse(x+10,y+10,10,5);
  arc(x+0,y+0,50,50,110,250,);
  
  //cerchio esterno
  ellipse(x+0,y+0,230,230)
  
  //corpo
  //line(x+-115,y+0,x+-240,y+0)
  
  //braccio sinistro
  //line(x+-150,y+0,x+-130,y+-130)
  //line(x+-130,y+-130,x+20,y+-150)
  
  //braccio destro
  //line(x+-150,y+0,x+-130,y+130)
  //line(x+-130,y+130,x+5,y+150)
  
  //gambre
  //line(x+-240,y+0,x+-400,y+60)
  //line(x+-240,y+0,x+-400,y+-60)
  
  if(keyIsPressed){
    
    
    if (key == "ArrowRight"){
      y = y + 1
    }
    
    
    if (key == "ArrowLeft"){
      y = y -1
    }
    if (key == "ArrowUp"){
      x = x +1
    }
    if (key == "ArrowDown"){
      x = x -1
    }
  } 
}

