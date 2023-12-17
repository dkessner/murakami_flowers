



function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(0);

    translate(width/2, height/2);
    
    drawFlower();
}


function drawFlower()
{
    let petalRadius = 100;
    drawPetals(petalRadius);
    drawFace(petalRadius);
}


function drawFace(faceWidth)
{
    circle(0, 0, faceWidth);
}


function drawPetals(radius)
{
    fill(color('orange'));
    stroke(0);
    strokeWeight(3);

    for (let i=0; i<12; i++) {
        push();
        rotate(PI/12 + i*PI/6);
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


