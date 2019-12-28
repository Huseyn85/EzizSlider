var slides=document.querySelectorAll("#slides .slide");
var currentslide=0;
var interval=setInterval(nextslide,2000);
function nextslide(){
slides[currentslide].className="slide";
currentslide=(currentslide+1)%slides.length;
slides[currentslide].className="slide showing";

}