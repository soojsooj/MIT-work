/*//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 50;
var positionX = 0;
var positionY = 0;
var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
    // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = 500;
    var Ymin = 0;
    var Ymax = 500;

    if(reverse){
        positionX = positionX - velocity;
        positionY = positionY - velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    } else { 
        positionX = positionX + velocity;
        positionY = positionY + velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px"; 
    }
    if(positionX > Xmax || 
        positionX === Xmin || 
        positionY > Ymax || 
        positionY === Ymin){
        reverse = !reverse;
    }
    }
 
  
  // This call the moveBall function every 100ms
  setInterval(moveBall, 100);
*/

//bonus practice!
//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
var velocity = 5;
var positionX = 0;
var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
    // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = 1230;
   

    if(reverse){
        positionX = positionX - velocity;
        ball.style.left = positionX + "px"; 
        ball1.style.left = positionX + "px"; 
        ball2.style.left = positionX + "px"; 
        ball3.style.left = positionX + "px"; 
        ball4.style.left = positionX + "px"; 
        ball5.style.left = positionX + "px"; 
    } else { 
        positionX = positionX + velocity;
        ball.style.left = positionX + "px";  
        ball1.style.left = positionX + "px";  
        ball2.style.left = positionX + "px";  
        ball3.style.left = positionX + "px";  
        ball4.style.left = positionX + "px";  
        ball5.style.left = positionX + "px";  
    }
    if(positionX > Xmax || 
        positionX === Xmin ){
        reverse = !reverse;
    }
    }
 
  
  // This call the moveBall function every 100ms
  setInterval(moveBall, 100);

 


