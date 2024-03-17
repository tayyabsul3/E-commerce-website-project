const Modal = document.querySelector(".modal");
const CloseBtn = document.querySelector("#close");
const showmenuBtn = document.querySelector(".show_menu");
showmenuBtn.addEventListener("click", ()=>{
  Modal.classList.add("active");
})

CloseBtn.addEventListener("click",()=>{
  Modal.classList.remove("active");
})