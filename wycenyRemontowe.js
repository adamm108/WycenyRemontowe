
const pick = document.getElementById("pick");

var s = document.getElementById("room");
const addbutton = document.getElementById('add');
const addwall = document.querySelector("button.addWall");
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add2');
var lenght = document.getElementById("lenght");
var height = document.getElementById("height");
    var result = document.getElementById("result");
var windowWIdth = document.getElementById('windowwidth')
var windowHeight= document.getElementById('windowheight')
    

    addbutton.addEventListener('click', ()=> {
        const space = [];
        
     space.push(s.value);
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
    
        lenghtValue = lenght.value;  
           
        heightValue = height.value;
        let wallResult = parseFloat(lenghtValue) * parseFloat(heightValue);
        result.textContent = wallResult;
        console.log(wallResult)
    })
  
