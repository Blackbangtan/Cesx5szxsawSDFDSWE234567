function preload(){

}
function setup(){
canvas = createCanvas(700,550);
canvas.position(100,250);
video= createCapture(VIDEO);
video.hide();
tintcolor ="";
}
function draw(){
image(video,0,0,700,550);
tint(tintcolor);
}
function take_snapshot(){
save("Snapshot.jpeg");
}
function applyfilter(){
tintcolor= document.getElementById("filterchange").value;
}