
const pick = document.getElementById("pick");

var s = document.getElementById("room");
const addbutton = document.getElementById('add');
const addwall = document.querySelector("button.addWall");


    addbutton.addEventListener('click', ()=> {
        const space = [];
        
     space.push(s.value);
        console.log(space);
   let spanResult = document.querySelector(' span.addresult');

    spanResult.textContent = space
    console.log(spanResult)

    })
  
addwall.addEventListener('click',()=>{
    var lenght = document.getElementById("lenght");
    var height = document.getElementById("height");
    var result = document.getElementById("result");
    const wallResult = lenght * height;
    result.textContent = wallResult;
    console.log(wallResult)
} )
console.log(addwall);