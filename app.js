
const cursos=document.getElementById('cursos');

const mostrarCarrito=document.getElementById('mostrarCarrito');

const carrito=document.getElementById('carrito');




cursos.addEventListener('click',(e)=>{ 
    if(e.target.classList.contains('agregar')){
        const imagen='';  
        const curs='';
        const profesor='';
        const precio=''; 
        const  obj={
         imagen:e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('src'),
          curs:e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.textContent,
          profesor:e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent,
          precio:e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent,
       
        }
        console.log(obj);
   
    }  
    
})
mostrarCarrito.addEventListener('mouseover',(e)=>{
    crearCarrito()
})
function crearCarrito(){
       carrito.style.display='block';
  
}








