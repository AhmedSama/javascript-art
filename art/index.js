let dots = [];
let colorList = ["#8AF3FF","#101935","#EDFF71","#CA1551","#EAC435","#03CEA4","#17BEBB","#F6BD60"," #FFCA3A","#DA4167","#FF299C"]
let container = document.querySelector(".container")
function rand(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
makeDots();

dots.forEach(element => {
    container.appendChild(element);
});


onresize = function(e){
    dots = [];
    container.innerHTML = "";
    makeDots();
    dots.forEach(element => {
    container.appendChild(element);
});
}

function makeDots() {
    const dotNumber = Math.floor(container.offsetWidth*0.09) ;
    for (let i = 0; i < dotNumber; i++) {
        let dot = document.createElement("div");
        dot.style.position = "absolute";
        let width_height = rand(1, 60) + "px";
        dot.style.width = width_height;
        dot.style.height = width_height;
        dot.style.borderRadius = "50%";
        dot.style.left = rand(30, container.offsetWidth-30) + "px";
        dot.style.top = rand(30, container.offsetHeight-30 ) + "px";

        dot.style.background = colorList[rand(0, colorList.length)];
        dot.style.opacity = Math.random()+0.5;
        dots.push(dot);
    }
}
// document.addEventListener("resize",(e)=>{
    
// })
// let first = container.firstElementChild;
// let x = 20;
// let y = 20;
// function animate(){
//     requestAnimationFrame(animate);
//     first.style.left = x + "px";
//     first.style.top = y + "px";
//     x+= 0.2;
//     y+=0.5;
// }
// animate()