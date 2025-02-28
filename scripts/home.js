
// new webpage section

document.getElementById("new-today").addEventListener("click", function () {
    window.location.href = "devBoard.html";
});



// body section color change
const uniqueBgColor = ["#cdb4db", "#ffc8dd", "#faedcd", "#be95c4","#c6ac8f","#f27059","#a4c3b2","#a3b18a","#dad7cd","#F1F5F9"];
let i = 0;
document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = uniqueBgColor[i];
    i++;
    if (i >= uniqueBgColor.length){
        i = 0;
    }       
}
);


// date Task
const realDate=new Date();
const realTimeDate=realDate.toDateString().split(" ");
const div=document.createElement("div");
div.innerHTML=`<p class="font-medium text-lg">${realTimeDate[0]},</p><h1 class=font-bold text-lg>${realTimeDate[1]} ${realTimeDate[2]}  ${realTimeDate[3]}</h1>`;
document.getElementById("realTime-Date").appendChild(div);

