
// new webpage section

document.getElementById("new-today").addEventListener("click", function () {
    window.location.href = "devBoard.html";
});




// body background color
document.getElementById("theme-btn").addEventListener("click", function () {
    let num1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let num2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let num3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let rgbColor = `rgb(${num1},${num2},${num3})`
    document.body.style.backgroundColor = rgbColor;
})



// date Task
let realDate = new Date();
let realTimeDate = realDate.toDateString().split(" ");
let div = document.createElement("div");
div.innerHTML = `<p class="font-medium text-lg">${realTimeDate[0]},</p><h1 class=font-bold text-lg>${realTimeDate[1]} ${realTimeDate[2]}  ${realTimeDate[3]}</h1>`;
document.getElementById("realTime-Date").appendChild(div);





// complete button task


const completeBtn = document.querySelectorAll(".complete-btn");

let totalTask = document.getElementById("task-remain").innerText;

let convertedTotalTask = parseInt(totalTask);
let totalCompleteTask = document.getElementById("task-complete").innerText;
let convertedTotalCompleteTask = parseInt(totalCompleteTask);
for (let btn of completeBtn) {
    btn.addEventListener("click", function (event) {
        convertedTotalTask--;
        convertedTotalCompleteTask++;
        if (convertedTotalTask <= completeBtn.length) {
            alert("Board Update Successfully");
            let taskOfCard = event.target.parentNode;
            let taskCard = taskOfCard.parentNode;
            let taskValue = taskCard.querySelector(".task-of-card").innerText;

            let realDate = new Date();
            let currentTime = realDate.toLocaleTimeString("en-us", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            });
            let div = document.createElement("div");
            div.innerHTML = `<p class="bg-slate-100 rounded-lg p-4 mx-6 my-6 font-normal text-lg">You have Complete The Task <span class="font-semibold">${taskValue}</span> at <span class="font-semibold">${currentTime}</span></p>`
            document.getElementById("activity-history").appendChild(div);
        }

        if (convertedTotalTask <= 0) { alert("Congrats!!!You have complete all the current task.") }

        let finalTotalTask = Math.max(0, convertedTotalTask);
        document.getElementById("task-remain").innerText = finalTotalTask;
        document.getElementById("task-complete").innerText = convertedTotalCompleteTask;
        event.target.disabled = true;
    })

}

document.getElementById("history-cleaner-btn").addEventListener("click", function (event) {
    let activityLog = event.target.parentNode;
    let activityHistory = activityLog.parentNode;
    let activityFather = activityHistory.nextElementSibling;
    activityFather.innerHTML="";
})




