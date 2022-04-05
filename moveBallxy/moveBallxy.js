//Set global variable: position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 20;
var positionX = 0;
var positionY = 0;
var reverse = false;

//function that can change the position of the html element "ball"
function moveBall() {
    // two fixed x-axis and y-axis
    var Xmin = 0;
    var Xmax = 500;
    var Ymin = 0;
    var Ymax = 500;
/*//if ==reverse, the ball will move from bottom to top, right to left. 
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
    */

     if(positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === Ymin){
         reverse = !reverse;}
         
     if(reverse){
        positionX = positionX - velocity;
        ball.style.left = positionX + "px";
        positionY = positionY - velocity;
        ball.style.top = positionY + "px";
     } else { 
         positionX = positionX + velocity;
         ball.style.left = positionX + "px";
         positionY = positionY + velocity;
         ball.style.top = positionY + "px";
     }
 }

  // This call the moveBall function every 100ms
  setInterval(moveBall, 100);
