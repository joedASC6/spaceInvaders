

function setup(){
    createCanvas (800, 600);
    background('rgb(2, 0, 97)');
}

let invaders = 0
let shoot = 0;
let num = 0 ;
function draw() {
    //invaders += 10;
 
    fill('rgb(68, 66, 76)');
  triangle(440 + num , 580, 400 + num, 530, 360 + num , 580);
  stroke(8);
  line( 400 + num, 530 + shoot, 400 + num, 525 + shoot);


  if (keyIsDown(RIGHT_ARROW)){
    background('rgb(2, 0, 97)');
    num += 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    background('rgb(2, 0, 97)');
    num -= 5;
  }else if (keyCode === UP_ARROW) {
    shoot -= 8;
  }
  triangle(440 + num , 580, 400 + num, 530, 360 + num , 580);
 
  fill('rgb(190, 51, 255)');
  triangle(20 + invaders, 20, 70 + invaders, 20, 45 + invaders, 70);
  triangle(95 + invaders, 20, 145 + invaders, 20, 120 + invaders, 70);
  triangle(170 + invaders, 20, 220 + invaders, 20, 195 + invaders, 70);
  triangle(245 + invaders, 20, 295 + invaders, 20, 270 + invaders, 70);
  triangle(320 + invaders, 20, 370 + invaders, 20, 345 + invaders, 70);
  triangle(395 + invaders, 20, 445 + invaders, 20, 420 + invaders, 70);

  //2nd row
  fill('rgb(190, 51, 255)');
  triangle(35 + invaders, 80, 70 + invaders, 80, 45 + invaders, 130);
  triangle(105 + invaders, 80, 145 + invaders, 80, 120 + invaders, 130);
  triangle(185 + invaders, 80, 220 + invaders, 80, 195 + invaders, 130);
  triangle(260 + invaders, 80, 295 + invaders, 80, 270 + invaders, 130);
  triangle(335 + invaders, 80, 370 + invaders, 80, 345 + invaders, 130);
  triangle(405 + invaders, 80, 445 + invaders, 80, 420 + invaders, 130);
}



//function keyPressed() {
 // if (keyCode === UP_ARROW) {
  //  num = "red";
  //}
//}

















//function keyPressed() {
  //if (keyCode === UP_ARROW) {
    //num = "red";
  //}
//}