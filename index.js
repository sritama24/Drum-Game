// alert("hello !");
// function clickEvent(){
//     alert("I got clicked !");
// }
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    var key =this.innerHTML;
    switch(key){
        case "R":  var audio = new Audio("sounds/crash.mp3");
        break; 
        case "I":  var audio = new Audio("sounds/kick-bass.mp3");
        break;
        case "F":  var audio = new Audio("sounds/snare.mp3");
        break;
        case "A":  var audio = new Audio("sounds/tom-1.mp3");
        break;
        case "S":  var audio = new Audio("sounds/tom-2.mp3");
        break;
        case "A":  var audio = new Audio("sounds/tom-3.mp3");
        break;
        case "R❤️":  var audio = new Audio("sounds/tom-4.mp3");
        break;
        case "U":  var audio = new Audio("sounds/crash.mp3");
        break; 
        default: console.log(key);

    }
    audio.play();
  });
}