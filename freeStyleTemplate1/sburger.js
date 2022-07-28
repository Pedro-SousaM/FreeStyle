


const menu1 = document.querySelector("#menu1")  
const op = document.querySelectorAll(".op")
menu1.addEventListener("mouseover", ()=>{

    op.forEach(op => op.style.transform="translateX(80vw)") 
})  
menu1.addEventListener("mouseout", ()=>{
    op.forEach(op => op.style.transform="translateX(-50px)") 
  }) 
  
 
