console.log("dbhawbd")
const menu=document.querySelector('nav .middle');
document.querySelector('.fa-bars').onclick=()=>{
    menu.classList.toggle('active');
    // document.querySelector('.fa-bars').style.display='none';
    // setTimeout(() => {
    //     document.querySelector('.fa-xmark').style.display='inline-block';
        
    // }, 400);

}
window.onscroll=()=>{
    menu.classList.remove('active')
}
document.querySelector('.fa-xmark').onclick=()=>{
    menu.classList.remove('active');
    // document.querySelector('.fa-xmark').style.display='none';
    // setTimeout(() => {
    //     document.querySelector('.fa-bars').style.display='inline-block';
        
    // }, 400);

}
let body=document.querySelector('body');
let width=body.offsetWidth;
console.log(width);
// if(body.offsetWidth > 900){
//     document.querySelector('.fa-xmark').style.display='none';
//     document.querySelector('.fa-bars').style.display='none';
// }