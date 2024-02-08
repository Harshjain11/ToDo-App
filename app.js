let input = document.querySelector("input");
let btn = document.querySelector("#btn");

let ul = document.querySelector("ul");


btn.addEventListener("click",function() {
    let task = input.value;
    input.value ="";
    let li = document.createElement('li');
    li.innerText = task;
    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delbtn");
   
    ul.appendChild(li);
    li.appendChild(delbtn);
    console.log("added");
});
// let delbtn = document.querySelectorAll(".delete");

// for(db of delbtn) {

// db.addEventListener("click",function(e) {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
// });
// }

ul.addEventListener("click",function(e) {
    
    if(e.target.nodeName == "BUTTON") {
        let listItem = e.target.parentElement;
        console.log(listItem);
        listItem.remove();
        
    } 
    
});