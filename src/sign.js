const canvasTag = document.getElementById("mycanvas");
const context = canvasTag.getContext("2d");
const clearSignTag = document.querySelector('.clearSign');
let mourseX = 0;
let mourseY = 0;
let start = false;
let emptySign = true;
function makeDraw() {
    context.lineCap = "round";
    context.lineTo(mourseX, mourseY);
    context.stroke();
}

canvasTag.addEventListener("mousedown", (event) => {
    mourseX = event.clientX - canvasTag.offsetLeft;
    mourseY = event.clientY - canvasTag.offsetTop;
    context.beginPath();
    context.moveTo(mourseX, mourseY);
    start = true;
});

canvasTag.addEventListener("mouseup", () => {
    start = false;
    const signTag = document.querySelector(".mysign");
    let url = canvasTag.toDataURL();
    if(!emptySign) {
        signTag.value = url;
        return;
    }
    else {
        signTag.value = "";
        return;
    }
});

canvasTag.addEventListener("mousemove", (event) => {
    if (start) {
        emptySign = false;
        mourseX = event.clientX - canvasTag.offsetLeft;
        mourseY = event.clientY - canvasTag.offsetTop;
        makeDraw();
    }
});

clearSignTag.addEventListener('click', function(){
    context.clearRect(0,0,canvasTag.width,canvasTag.height);
});
