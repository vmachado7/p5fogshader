var f;
var img;

function preload() {
  f = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
  img = loadImage("f-texture.png");
}

function setup() {
  createCanvas(640, 480, WEBGL); 

  farSlider = createSlider(0,70,0);
  farSlider.position(20, 10);
  farSlider.style('width', '500px');

  nearSlider = createSlider(0,350,0);
  nearSlider.position(20, 45);
  nearSlider.style('width', '500px'); 

  textFont(f,15); 
}

function draw() { 
  background(200);
  let farSlide = farSlider.value();
  let nearSlide = nearSlider.value();

  push();
  fill(0);
  text('farSlider: ' + farSlide*10/7+'%', -width / 2 + 20, -height / 2 + 40);
  text('nearSlider: ' + nearSlide/3.5+'%', -width / 2 + 20, -height / 2 + 75);
  pop();

  //colorShade = createGraphics(200,200);
  //colorShade.background(img);
  
  cube(8,8.45,  farSlide,nearSlide);
  cube(10,8.3,  farSlide,nearSlide);
  cube(18,8,    farSlide,nearSlide);
  cube(30,7.5,  farSlide,nearSlide);
  cube(50,6.5,  farSlide,nearSlide);
  cube(75,5,    farSlide,nearSlide);
  cube(100,3,   farSlide,nearSlide);
  cube(125,1,   farSlide,nearSlide);
}

function cube(size,cubePos,slide1,slide2) {
  push();
  let truePos = cubePos/2;
  translate(50*(cubePos-3.5), 1 , -65*(cubePos-3.5));
  let opp = (slide1/50*truePos) + (slide2/50/truePos);
  
  fill(0)

  let colorShade = createGraphics(200, 200);
  colorShade.background(200, 200, 200, 100 * opp);
  colorShade.image(img, 0, 0, 200, 200);

  texture(colorShade);
  colorShade.background(200,200,200,100*opp);

  stroke(lerpColor(color(0), color(200), opp*0.4));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(size,size,size);
  pop();
}