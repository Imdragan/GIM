function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	
	background(0)

	rotateX(mouseY*0.01)
	rotateY(mouseX*0.01)

	let lato = 999
    
	if (mouseIsPressed) randomSeed(0)
	
	stroke(255)
	noFill()
	beginShape(LINES)
	for(let i=0; i<600; i=i+1){
		let lunghezza = random(1, 20)
		let posX = random(-lato, lato)
		let posY = random(-lato, lato)
		let posZ = random(-lato, lato)
		vertex(posX, posY, posZ)
		vertex(posX, posY + lunghezza, posZ)
	}
	endShape()
}