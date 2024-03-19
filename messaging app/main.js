const mysrch = document.getElementById("myinput")
const btn = document.getElementById("btn")
const messag1 = document.getElementById("message1")
const messag2 = document.getElementById("message2")
let username = prompt("Enter your username");
let user = prompt("Enter your username who you want to chat");

const srch = document.getElementById("input")


btn.onclick = function(){
    messag1.textContent = username+ ':'+mysrch.value
}
btna.onclick = function(){
    messag2.textContent = user+ ':'+srch.value
}


