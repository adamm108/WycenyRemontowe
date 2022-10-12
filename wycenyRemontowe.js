
const pick = document.getElementById("pick");

var s = document.getElementById("room");
const addbutton = document.getElementById('add');
const addwall = document.querySelector("button.addWall");
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add3');
var lenght = document.getElementById("lenght");
var height = document.getElementById("height");
    var result = document.getElementById("result");
    var resultWindow = document.getElementById("WindowResult");
var windowW = document.getElementById('windowwidth')
var windowH= document.getElementById('windowheight')
    

    addbutton.addEventListener('click', ()=> {
        
     space = s.value;
        console.log(space);
   let spanResult = document.querySelector(' span.addresult');

    spanResult.textContent = space
    console.log(spanResult)

    }) 
    add2.addEventListener('click',()=> {
    
        lenghtValue = lenght.value;  
           
        heightValue = height.value;
        let wallResult = parseFloat(lenghtValue) * parseFloat(heightValue);
        result.textContent = wallResult;
        console.log(wallResult)
    })
    add3.addEventListener('click',()=> {
    
        windowWidth = windowW.value;  
           windowHeight = windowH.value;
        let windowResult = parseFloat(windowWidth) * parseFloat(windowHeight);
        resultWindow.textContent = windowResult;
        console.log(windowResult)
    })
  
