
window.onload = function () {
    let bigDiv = document.createElement("div");
    let smallCircle = document.createElement("div");
    let bigCircle = document.createElement("div");
    let start=document.createElement("button");
    let stop=document.createElement("button");
    smallCircle.classList.add("smallcircle");
    bigCircle.classList.add("bigcircle");
    start.classList.add("button");
    stop.classList.add("button");
    start.addEventListener("click",moveCircle);
    stop.addEventListener("click",stopCircle);

   start.innerHTML="START";
stop.innerHTML="STOP";
    bigDiv.appendChild(smallCircle);
    bigDiv.appendChild(bigCircle);
    bigDiv.appendChild(start);
    bigDiv.appendChild(stop);
    document.body.appendChild(bigDiv);
}

let angle = 0;
let currentX = 0;
let currentY = 0;
let centerWidth = 150;
let centerHeigth =150;
let stop=false;
function moveCircle(){
    let smallcircle=document.getElementsByClassName('smallcircle')[0];
    currentX = centerWidth + centerWidth * Math.cos(angle * Math.PI / 180);
    currentY = centerHeigth + centerHeigth * Math.sin(angle * Math.PI / 180);
    smallcircle.style.left = currentX + 'px';
    smallcircle.style.top = currentY + 'px';
    angle++;
    if (angle > 360) {
        angle = 0;
    }
   if(stop===true)
   return;
    setTimeout(moveCircle, 20);
}
function stopCircle(){
    stop=true;
}


