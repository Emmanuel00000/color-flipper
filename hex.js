const btn = document.querySelector('button');
const body = document.querySelector('body');
let colorName = document.querySelector('span');
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function changeColor() {  
    let hex = '#';
    for (i = 0; i < 6; i++) {
        hex += arr[Math.floor(Math.random() * arr.length)];
    }
    body.style.background = hex;
    colorName.innerText = hex;
    btn.classList.add('animate');
}
btn.addEventListener('click', changeColor);

btn.addEventListener('animationend', function () {
    btn.classList.remove('animate');
});