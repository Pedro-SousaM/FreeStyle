


const menu1 = document.querySelector("#menu1")  
const op = document.querySelectorAll(".op")
let list = document.querySelectorAll(".scrollb")
let focus = 
menu1.addEventListener("mouseover", ()=>{

    op.forEach(op => op.style.transform="translateX(80vw)") 
})  
menu1.addEventListener("mouseout", ()=>{
    op.forEach(op => op.style.transform="translateX(-50px)") 
  }) 
  
  list.forEach(list=>{list.addEventListener("click", ()=>{
    console.log("cu")})})