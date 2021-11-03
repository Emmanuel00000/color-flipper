const btn = document.querySelector('button');
const body = document.querySelector('body');
let colorName = document.querySelector('span');
let arr = ['blue', '#00f7ff', '#ff0040', '#ddc807', 'brown'];

function changeColor() {
    let randomNum = Math.floor(Math.random() * arr.length);
    body.style.background = arr[randomNum];
    colorName.innerText = arr[randomNum];
    btn.classList.add('animate');
}
btn.addEventListener('click', changeColor);

btn.addEventListener('animationend', function () {
    btn.classList.remove('animate');
});