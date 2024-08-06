const hex = "0123456789ABCDEF";

function setColor (){
    let colorCode = "#";
    for(i=0; i<6; i++){
        colorCode += hex[Math.floor(Math.random()*16)];
    }
    console.log(colorCode);
    return colorCode;
}
function bgColor(){
    document.querySelector("body").style.backgroundColor=setColor()
}
const start = document.querySelector("#start");
let intervalId;
start.addEventListener("click", ()=>{
    if(!intervalId){
        intervalId = setInterval(bgColor,1000);
    }
})
const stop = document.querySelector("#stop")
stop.addEventListener("click", ()=>{
    clearInterval(intervalId);
    intervalId = null;
})
