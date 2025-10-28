const form = document.createElement('form');
document.body.appendChild(form);
form.classList.add('formulario');

// Crar el h1 con la frase "Refranero Español"
// **************************************
const h1 = document.createElement('h1');
h1.textContent = 'Refranero Español';
// añadir el h1 en el html
form.appendChild(h1);
// Crear una clase para el h1
h1.classList.add('formulario__titulo'); 
const labelNumerorefran = document.createElement('label')
labelNumerorefran.textContent = 'Cantidad:'.toUpperCase();
labelNumerorefran.classList.add('formulario__label');
form.appendChild(labelNumerorefran);

const inputNumerorefran = document.createElement('input');
inputNumerorefran.type = 'number';
inputNumerorefran.name = 'numeroRefran';
inputNumerorefran.min = '1';
inputNumerorefran.max = '10';

inputNumerorefran.value = '1';
inputNumerorefran.classList.add('formulario__input');
form.appendChild(inputNumerorefran);

const buttonSubmit = document.createElement('button');
buttonSubmit.type = 'submit';
buttonSubmit.textContent = 'SOLICITAR'.toUpperCase();
buttonSubmit.classList.add('formulario__button');
form.appendChild(buttonSubmit);

const textareaRefranes = document.createElement('textarea');
textareaRefranes.name = 'refran';
textareaRefranes.readOnly = true;
textareaRefranes.classList.add('formulario__textarea');
form.appendChild(textareaRefranes);

const botonCopiar = document.createElement('button');
botonCopiar.type = 'button';
botonCopiar.textContent = 'Copiar'.toUpperCase();
botonCopiar.classList.add('formulario__copiar');
form.appendChild(botonCopiar);


// ****************************************************
const refranesEspanoles = [
    "A quien madruga, Dios le ayuda.",
    "No es oro todo lo que reluce.",
    "Más vale pájaro en mano que ciento volando.",
    "Donde fuego hubo, cenizas quedan.",
    "Dime con quién andas y te diré quién eres.",
    "El que a buen árbol se arrima, buena sombra le cobija.",
    "Nunca llueve a gusto de todos.",
    "Perro ladrador, poco mordedor.",
    "A caballo regalado no le mires el dentado.",
    "Agua que no has de beber, déjala correr.",
    "Cada maestrillo tiene su librillo.",
    "El saber no ocupa lugar.",
    "Haz bien y no mires a quién.",
    "Hoy por ti, mañana por mí.",
    "La avaricia rompe el saco.",
    "Lo bien hecho, bien parece.",
    "Más vale prevenir que curar.",
    "Quien siembra vientos, recoge tempestades.",
    "Rectificar es de sabios.",
    "Zapatero, a tus zapatos."
];
// ****************************************************
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numeroRefran = parseInt(inputNumerorefran.value);
    const refranesSeleccionados = new Set();
    
    do {
        const indice = Math.floor(Math.random() * refranesEspanoles.length);
        refranesSeleccionados.add(refranesEspanoles[indice]);
    } while(refranesSeleccionados.size < numeroRefran);
    
    // Convertir el Set a string con los refranes
    const refran = Array.from(refranesSeleccionados)
        .map(r => `"${r}"`)
        .join('\n');
    
    textareaRefranes.value = refran;
});

// ^******************************************++
// Lógica para copiar los refranes al portapapeles
// ********************************
botonCopiar.addEventListener("click", function () {
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textareaRefranes.value);
    
});

// ^******************************************++

// Siempre tener un refran cuando se carga la página, por defecto 1 refrán aleatorio
// ********************************
window.addEventListener("load", function () {
    const indiceAleatorio = Math.floor(Math.random() * refranesEspanoles.length);
    textareaRefranes.value = '"' + refranesEspanoles[indiceAleatorio] + '"';
});