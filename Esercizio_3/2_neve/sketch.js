const SNOWFLAKES_PER_LAYER = 150;
const MAX_SIZE = 12;
const GRAVITY = 1.4;
const LAYER_COUNT = 5;

const SNOWFLAKES = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let l = 0; l < LAYER_COUNT; l++) {
    SNOWFLAKES.push([]);
    for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
      SNOWFLAKES[l].push({
        x: random(width),
        y: random(height),
        mass: random(0.75, 1),
        l: l + 1
      });
    }
  }
}

function draw() {
  background("rgb(11,80,110)");

  for (let l = 1; l < SNOWFLAKES.length; l++) {
    const LAYER = SNOWFLAKES[l];

    for (let i = 0; i < LAYER.length; i++) {
      const snowflake = LAYER[i];
      circle(snowflake.x, snowflake.y, (snowflake.l * MAX_SIZE) / LAYER_COUNT);
      updateSnowflake(snowflake);
    }
  }
}


function updateSnowflake(snowflake) {
  const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
  if (snowflake.y > height + diameter) snowflake.y = -diameter;
  else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;
}
