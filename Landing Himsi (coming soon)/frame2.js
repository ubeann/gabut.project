const btn = document.getElementsByClassName('btn');
const text = document.querySelector('.right');

console.log("start");

console.log(btn);
console.log(text);

for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", function () {
        reset();
        element.classList.add('active');
        // console.log(element.id);
        switch (element.id) {
            case "psdm":
                text.innerHTML = "PSDM";
                break
            default:
                text.innerHTML = "RISTEK";
        }
    })
}

function reset() {
    for (let index = 0; index < btn.length; index++) {
        const element = btn[index];
        element.classList.remove('active');
    }
}