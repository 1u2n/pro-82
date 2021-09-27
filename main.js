var mouseEvent ="empty";
var last_position_of_x , last_position_of_y;
canvas = document.getElementById('myCanvas') ;
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
 
canvas.addEventListener ("mousedown" , my_mousedown) ; 
function my_mousedown(e)  {
    mouseEvent = "mousedown";
  radius = document.getElementById ("radius").value;
    color = document.getElementById("color").value ; 
    width_of_line = document.getElementById("width").value;
}
canvas.addEventListener ("mousemove" , my_mousemove) ; 

function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = ""
+ current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,
0 , 2 * Math.PI);
ctx.stroke();
}