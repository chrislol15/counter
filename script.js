console.log("script is loading...")

let number = 0;

const decreaseBtn = document.querySelector("#minus");
const increaseBtn = document.querySelector("#plus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const secretmessageBtn = document.querySelector("#secretmessage");
const secretmessageBtn2 = document.querySelector("#secretmessage2");

decreaseBtn.addEventListener("click", function () {
    number--;
    document.querySelector("#answer").textContent = number;
});

increaseBtn.addEventListener("click", function () {
    number++;
    document.querySelector("#answer").textContent = number;
});

multiplyBtn.addEventListener("click", function () {
    number *= 2;
    document.querySelector("#answer").textContent = number;
});

divideBtn.addEventListener("click", function () {
    number /= 2;
    document.querySelector("#answer").textContent = number;
});

secretmessageBtn.addEventListener("click", function () {
    document.querySelector("#answer").textContent = "Michael smells like poo";
});

secretmessageBtn2.addEventListener("click", function () {
    document.querySelector("#answer").textContent = "too bad you clicked this button im going to hack you now";
});