const menu=document.querySelector('nav .middle');
document.querySelector('.fa-bars').onclick=()=>{
    menu.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('active')
}
document.querySelector('.fa-xmark').onclick=()=>{
    menu.classList.remove('active');
}
let body=document.querySelector('body');
let width=body.offsetWidth;
const getAll=Array.from(document.querySelectorAll('input'));
getAll.forEach((input)=>input.addEventListener('keydown',(event)=>{
    if (event.target.value.length===0 && event.keyCode===32) {
        event.preventDefault();
    }
}))
document.querySelector('textarea').addEventListener('keydown',(e)=>{
    if (e.target.value.length===0 && e.keyCode===32) {
        e.preventDefault();
    }  
})