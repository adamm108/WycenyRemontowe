
const pick = document.getElementById("pick");

var s = document.getElementById("room");
const addbutton = document.getElementById('add');


    addbutton.addEventListener('click', ()=> {
        const space = [];
     space.push(s.value);
        console.log(space);
    })
    let addresult = document.getElementsByClassName("addresult");
    addresult.textContent = (s)
    console.log(addresult.textContent)
