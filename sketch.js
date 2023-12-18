



function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 12, 100, 100);

    background(0);
    translate(width/2, height/2);
    drawFlower(100);
}


function draw() {
}


function mousePressed() {

    translate(mouseX, mouseY);
    drawFlower(random(10, 100));
}


function drawFlower(petalRadius)
{
    drawPetals(petalRadius);
    drawFace(petalRadius);
}

function drawEye(faceWidth)
{
    push();
    fill(0);
    noStroke();
    rotate(radians(-55));
    translate(faceWidth/3, 0);
    rotate(radians(110));
    let eyeWidth = faceWidth*.18;
    ellipse(0, 0, eyeWidth, eyeWidth*.7);

    fill(255);
    noStroke();
    ellipse(-eyeWidth*.2, eyeWidth*.05, eyeWidth*.45, eyeWidth*.3);
    ellipse(eyeWidth*.3, -eyeWidth*.1, eyeWidth*.3, eyeWidth*.2);
    pop();
}


function drawFace(faceWidth)
{
    circle(0, 0, faceWidth);

    // eyes
    drawEye(faceWidth);    
    push();
    scale(-1, 1);
    drawEye(faceWidth);    
    pop();

    // mouth

    let smileX = faceWidth/3;
    let smileY = faceWidth * .10;

    fill(255, 0, 0);
    strokeWeight(5);
    beginShape();
    curveVertex(-smileX, -faceWidth*1.3);
    curveVertex(-smileX, -smileY);
    curveVertex(0, smileX);
    curveVertex(smileX, -smileY);
    curveVertex(smileX, -faceWidth*1.3);
    endShape();

    beginShape();
    curveVertex(-smileX, faceWidth*.1);
    curveVertex(-smileX, -smileY);
    curveVertex(0, -smileX*.5);
    curveVertex(smileX, -smileY);
    curveVertex(smileX, faceWidth*.1);
    endShape();
}


function drawPetals(radius)
{
    fill(color('orange'));
    stroke(0);
    strokeWeight(3);

    for (let i=0; i<12; i++) {
        push();
        rotate(i*PI/6);
        fill(i, 100, 100);
        drawPetal(radius);
        pop();
    }
}


function drawPetal(radius)
{
    // draw sector

    let angle = PI/12;
    push();
    noStroke();
    arc(0, 0, 2*radius, 2*radius, -angle, angle);
    pop();

    // draw edges and semicircle

    let semicircleX = radius * cos(angle);
    let semicircleRadius = radius * sin(angle);

    line(0, 0, semicircleX, semicircleRadius);
    line(0, 0, semicircleX, -semicircleRadius);

    ellipseMode(CENTER);
    arc(semicircleX, 0, semicircleRadius*2, semicircleRadius*2, -PI/2, PI/2);
}


