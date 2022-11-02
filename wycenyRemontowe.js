const pick = document.getElementById("pick");

const addwall = document.querySelector("button.addWall");
const add3 = document.getElementById("add3");
var lenght = document.getElementById("lenght");
var height = document.getElementById("height");
var result = document.getElementById("result");
var resultWindow = document.getElementById("WindowResult");
const BathFloorResult = document.getElementById("BathFloorResult");
var windowW = document.getElementById('windowwidth')
var windowH = document.getElementById('windowheight')
const windowFinal = document.getElementById('windowfinal')
const wallFinal = document.getElementById('wallfinal')
const bathroomWidth = document.getElementById('bathWidth')
const bathroomLenght = document.getElementById('bathLenght')

add3.addEventListener('click', () => {

    let lenghtValue = lenght.value;
    let heightValue = height.value;
    let bathWidth = bathroomWidth.value;
    let bathLenght = bathroomLenght.value;
    let wallResult = parseFloat(lenghtValue) * parseFloat(heightValue);
    result.textContent = wallResult;
    console.log(wallResult);
    let windowWidth = windowW.value;
    let windowHeight = windowH.value;
    let windowResult = parseFloat(windowWidth) * parseFloat(windowHeight);
    BathFloorResult.textContent = parseFloat(bathWidth) * parseFloat(bathLenght);
    console.log(windowResult);
    windowFinal.innerText = windowResult;
    wallfinal.innerText = parseFloat(wallResult) - parseFloat(windowResult);
});