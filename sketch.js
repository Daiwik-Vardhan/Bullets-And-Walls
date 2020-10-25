var wall, thickness;
var bullet, Speed, Weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  thickness = random(22,83);

  Speed = random(223,321);
  Weight = random(30,52);

  bullet = createSprite(50,200,15,50);
  bullet.velocityX = Speed ;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);
  if(hasCollided(bullet,wall))
  {
    var damage = 0.5 * Weight * Speed * Speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor(0,255,0);
    }
  }

  drawSprites();
}
function hasCollided(lbullet , lwall)
{

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;

}