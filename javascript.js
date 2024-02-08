const openVentana = document.querySelector('.caja_perfil');
const modales = document.querySelector('.modales');
const closeVentana = document.querySelector('.back');

openVentana.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.add('open');
});
closeVentana.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.remove('open');
});

/*ventana habilidades*/

const open_habilidades = document.querySelector('.habilidades');
const show_habilidades = document.querySelector('.modal_habilidades');
const close_Ventana = document.querySelector('.back_2');

open_habilidades.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.add('open');
});
close_Ventana.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.remove('open');
});