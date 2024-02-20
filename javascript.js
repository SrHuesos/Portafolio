var resultado = window.confirm("Se recomienda visualizar el sitio web en un computador o portatil para una mejor experiencia");
if (resultado === true) {
    window.alert("Agradezco su atención");
} else {
    window.alert("Sigo trabajando para mejorar su experiencia. Agradezco su atención");
}

document.getElementById('BotonCopiar').addEventListener('click', copiarAlPortapapeles);

  function copiarAlPortapapeles(ev) {
    var codigoACopiar = document.getElementById('TextoACopiar').textContent;
    navigator.clipboard.writeText(codigoACopiar)
      .then(function() {
        mostrarAlerta("Texto copiado al portapapeles");
      })
      .catch(function(err) {
        mostrarAlerta("No se pudo copiar el texto: " + err);
      });
  }

  function mostrarAlerta(mensaje) {
    // Puedes personalizar la alerta aquí (por ejemplo, usando un modal o un elemento en la página)
    alert(mensaje);
  }


var openVentana = document.querySelector('.caja_perfil');
var modales = document.querySelector('.modales');
var closeVentana = document.querySelector('.back');
var btn_habilidades = document.querySelector('.btn_habilidades');
var btn_trabajos = document.querySelector('.btn_proyectos');

openVentana.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.add('open');
});
closeVentana.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.remove('open');
});
btn_habilidades.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.add('open')
    modales.classList.remove('open');
});
btn_trabajos.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrar_habilidades.classList.add('open')
    modales.classList.remove('open');
});

/*ventana habilidades*/

var open_habilidades = document.querySelector('.habilidades');
var show_habilidades = document.querySelector('.modal_habilidades');
var close_Ventana = document.querySelector('.back_2');
var btn_habilidades_2 = document.querySelector('.btn_habilidades_2');
var btn_trabajos_2 = document.querySelector('.btn_proyectos_2');
var btn_perfil_2 = document.querySelector('.btn_perfil_2');

open_habilidades.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.add('open');
});
close_Ventana.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.remove('open');
});
btn_trabajos_2.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrar_habilidades.classList.add('open')
    show_habilidades.classList.remove('open');
});
btn_perfil_2.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.add('open');
    show_habilidades.classList.remove('open');
});

/*ventana proyectos*/

var abrir_habilidades = document.querySelector('.proyectos');
var mostrar_habilidades = document.querySelector('.trabajos');
var cerrar_Ventana = document.querySelector('.back_3');
var btn_habilidades_3 = document.querySelector('.btn_habilidades_3');
var btn_perfil_3 = document.querySelector('.btn_perfil_3');

abrir_habilidades.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrar_habilidades.classList.add('open');
});
cerrar_Ventana.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrar_habilidades.classList.remove('open');
});
btn_habilidades_3.addEventListener('click', (e)=>{
    e.preventDefault();
    show_habilidades.classList.add('open')
    mostrar_habilidades.classList.remove('open');
});
btn_perfil_3.addEventListener('click', (e)=>{
    e.preventDefault();
    modales.classList.add('open');
    mostrar_habilidades.classList.remove('open');
});