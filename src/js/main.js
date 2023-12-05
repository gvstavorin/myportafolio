const nav = document.querySelector("#navbar");

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



abrir.addEventListener("click",()=>{

    nav.classList.add("visible");
})

abrir.addEventListener('touchstart', ()=>{

    nav.classList.add("visible");
});




cerrar.addEventListener("click",()=>{

    nav.classList.remove("visible");
})


cerrar.addEventListener("touchstart",()=>{

    nav.classList.remove("visible");
})