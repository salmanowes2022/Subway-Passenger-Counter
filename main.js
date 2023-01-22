let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementEL = document.getElementById("increment-btn")

incrementEL.onclick =  function () {
    count += 1
    countEl.innerText = count
}

function save() {
    saveEl.innerText += count + " - "
    countEl.textContent = incrementEL();
    count = 0
}

console.log("Let's count people on the subway!")