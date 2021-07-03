var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var rover_width=100
var rover_height=90
var rover_x=10
var rover_y=10
var background_canvas="mars.jpg"
var rover_image="rover.png"
function add(){
  background_imgtag=new Image()
  background_imgtag.onload=uploadBackground
  background_imgtag.src=background_canvas
  rover_imgtag=new Image()
  rover_imgtag.onload=uploadrover
  rover_imgtag.src=rover_image
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_height,rover_width)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keypessed=e.keyCode
console.log(keypessed)
if (keypessed=='38'){
    console.log("up")
}
if (keypessed=='40'){
    console.log("down")
}
if (keypessed=='39'){
    console.log("right")
}
if (keypessed=='37'){
    console.log("left")
}
}