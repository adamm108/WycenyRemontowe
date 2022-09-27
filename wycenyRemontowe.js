
const pick = document.getElementById("pick");

var s = document.getElementById("room");

const addRoom = ()=>{
    const space = [];
 space.push(s.value);
    console.log(space);
}
const addbutton = document.getElementById('add');
    addbutton.addEventListener('click',addRoom() );