//variables globales
const formularioUi = document.querySelector('#formulario')
const listas1 = document.getElementById('listas1')
let arrayAct = [];

//Funciones
const CrearItem = (actividad) => {
    let item = {
        actividad: actividad, 
        estado: false
    }
    arrayAct.push(item);
    return item;
}

const GuardarDB = () => {
    localStorage.setItem('rutina' , JSON.stringify(arrayAct))
    LeerDB();
}
const LeerDB= () => {
    listas1.innerHTML = '';
    arrayAct = JSON.parse(localStorage.getItem('rutina'));
    if (arrayAct == null){
        arrayAct = [];
    } else{
        arrayAct.forEach(element => {
            listas1.innerHTML += ` <div id="listas1" class=mt-4>
            <div class="alert alert-danger" role="alert">
                <b> ${element.actividad} </b> - ${element.estado}
            </div>
        </div>`
        });
    }
}


//EventListener

formularioUi.addEventListener('submit', (e) => {
    e.preventDefault()
    let actividad = document.querySelector('#actividad').value;

    CrearItem(actividad)
    GuardarDB();

    formularioUi.reset();
});

document.addEventListener('DOMContentLoaded' , LeerDB)