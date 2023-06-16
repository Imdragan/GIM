let posY
let posX
let velX
let velY

function setup(){
	createCanvas(windowWidth, windowHeight)
	noStroke()
	posX = random(windowWidth)
	posY = random(windowHeight)
	velX = 5
	velY = 10
	background(0)
  
}

function draw(){
	noStroke()
	fill(map(posX, 0, width, 0, 255), map(posY, 0, width, 0, 255), 0)
	
	const g = (sin(frameCount *0.2) + 1) * 120
	const b = (sin(frameCount * 0.25) + 1) * 100
	fill(random(0,255)) 

	const d = sin(frameCount * 0.08) * 180 + 1

	ellipse(posX, posY, d, d)
	ellipse(width - posX, posY, d, d)

  //ellipse(posX+200, posY+200, d, d)
	//ellipse(width - posX, posY, d, d)
  
  //ellipse(posX-200, posY-200, d, d)
	//ellipse(width - posX-200, posY-200, d, d)
  
	posX = posX + velX
	posY = posY + velY

	if (posX >= width || posX <= 6) velX = -velX
	if (posY >= height || posY <= 9) velY = -velY
  

}

function keyPressed(){
	if (key == 's') save("pong.png") 
}

