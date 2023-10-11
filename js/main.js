
//En esta seccion traemos los elementos del DOM

const seccionPrincipal = document.getElementById("seccion-principal");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const inputIngresar = document.getElementById("ingresar");
const formIngresoDocente = document.getElementById("ingreso-docente");
const contenedorAlumnos = document.getElementById("contenedor-alumnos");
const botonSalir = document.getElementById("salir");
let botonesDarBaja = document.querySelectorAll(".buton-baja");
const parrafoIngreso = document.getElementById("p-form-ingreso");

//variables global

let seccionPrincialClase;


//Funcion para agregar propiedad promedio al arreglo Materias del cada objeto del arreglo Alumnos
function calcularPromedio() {
    //Primero accedemos a cada alumno dentro del array alumnos
    alumnos.forEach(alumno => {
        //accedemos al arreglo materias que esta dentro de cada alumno
        alumno.materias.forEach(materia => {
            materia.promedio = Number(((materia.nota1 + materia.nota2 + materia.nota3) / 3).toFixed(2));
        })
    })
}

calcularPromedio();




//Funcion para mostrar listado de alumnos en el DOM
function cargarListadoAlumnos(listaAlumnos) {
    contenedorAlumnos.innerHTML = "";
    //Primero eliminamos la clase disabled para q el contenedor aparezca el el DOM y no tenga display none
    contenedorAlumnos.classList.remove("disabled");

    botonSalir.classList.remove("disabled");
    const h2Contenedor = document.createElement("h2");
    h2Contenedor.innerText = "LISTADO DE ALUMNOS REGISTRADOS";
    contenedorAlumnos.appendChild(h2Contenedor);

    //Accedemos al arreglo 
    listaAlumnos.forEach(alumno => {
        const divAlumno = document.createElement("div");
        divAlumno.classList.add("alumno");
        divAlumno.innerHTML = `
        <h3>${alumno.nombre}</h3>
        `;
        const divMaterias = document.createElement("div");
        divMaterias.classList.add("materias");

        alumno.materias.forEach(materia => {
            const divMateria = document.createElement("div");
            divMateria.classList.add("materia");
            divMateria.innerHTML = `
                        <h3>Materia: ${materia.materia}</h3>
                        <p>Primer trimestre: ${materia.nota1}</p>
                        <p>Segundo trimestre: ${materia.nota2}</p>
                        <p>Tercer trimestre: ${materia.nota3}</p>
                        <p>Promedio general: ${materia.promedio}</p>
        `;
            divMaterias.appendChild(divMateria);
        })

        divAlumno.appendChild(divMaterias);

        const botonBaja = document.createElement("button");
        botonBaja.classList.add("buton-baja");
        botonBaja.setAttribute("id", `${alumno.id}`);
        botonBaja.textContent = "Dar de baja";

        divAlumno.appendChild(botonBaja);
        contenedorAlumnos.appendChild(divAlumno);

    })

    actualizarBotonesDarBaja();
    //Guardamos en el localStorage el arreglo alumnos al final de la funcion
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    //Verificamos y guardamos en seccionPrincipalClase si seccionPrincipal tiene la clase disabled
    seccionPrincialClase = seccionPrincipal.classList.contains("disabled");
    //Guardamos en el localStorage seccionPrincipalClase la cual almacena un valor booleano
    localStorage.setItem("seccion-principal", seccionPrincialClase);
}

//esta funcion ocurre cuando hacemos click en el boton INGRESAR
function ingresarAlListado(e) {
    e.preventDefault();
    if (inputUsuario.value === "docente" && inputContraseña.value === "12345678") {
        seccionPrincipal.classList.add("disabled");
        cargarListadoAlumnos(alumnos);
        formIngresoDocente.reset();
    } else {
        parrafoIngreso.innerText = "Usuario o contraseña inválido. Por favor vuelve a escribir un usuario y contraseña";
    }



    //Lo comentado es el paso a paso de esta funcion para poder entenderla mas
    // //Verificamos si el boton ingresar funciona
    // console.log("boton apretado");
    // if (inputUsuario.value === "docente") {
    //     console.log("usuario valido");
    //     if (inputContraseña.value === "12345678") {
    //         //entre comillas la contraseña porque el input password guarda los datos en forma de string
    //         console.log("contraseña valida");
    //         seccionPrincipal.classList.add("disabled");
    //         cargarListadoAlumnos(alumnos);
    //         formIngresoDocente.reset();
    //     }else{
    //         console.log("contraseña invalida");
    //         // // console.log(inputContraseña.value);
    //         // // console.log(typeof inputContraseña.value);
    //     }
    // }else{
    //     console.log("usuario invalido");
    // }
}

const actualizarBotonesDarBaja = () => {
    //hacemos esto porque los botones recien existen en el DOM cuando cargamos los alumnos
    botonesDarBaja = document.querySelectorAll(".buton-baja");

    //y los traemos para poder darles eventos
    //con un ForEach ponemos un escuchador para cada boton 
    botonesDarBaja.forEach(boton => {
        boton.addEventListener("click", darDeBajaAlumno);
    })
}


const darDeBajaAlumno = (e) => {
    //obetenemos el id del boton y lo parseamos porque nos devuelve un tipo de dato en forma de string
    const idBotonBaja = Number(e.currentTarget.id);
    //obetenemos el index
    const index = alumnos.findIndex(alumno => alumno.id === idBotonBaja);
    //eliminamos el elemento de alumnos
    alumnos.splice(index, 1);
    cargarListadoAlumnos(alumnos);
}


//Funcion para obetener los datos del LocalStorage
const getAlumnosStorage = () => {
    //los parseamos porque estaban en formaton JSON
    const alumnosLS = JSON.parse(localStorage.getItem("alumnos"));
    return alumnosLS
}


//Funcion para obtener el estado de la variable seccion principal
const getSeccionPrincipal = () => {
    //creamos una variable donde almacenamos lo que obtenemos del LS con la clave "seccion-principal"
    const seccionPrincipalLS = localStorage.getItem("seccion-principal")
    //como el LS convierte todos los valores a string, comparamos con "true" en forma de string
    if (seccionPrincipalLS === "true") {
        seccionPrincipal.classList.add("disabled");
        //guardamos lo que nos returna la funcion getalumnosstorage en esa variable
        const alumnosStorage = getAlumnosStorage();
        //verificamos q dentro de alumnos storage haya algo y no este vacio
        if (alumnosStorage) {
            //cargamos los datos de alumnosStorage dentro de alumnos
            alumnos = alumnosStorage;
        }
        cargarListadoAlumnos(alumnos);

    } else {
        contenedorAlumnos.classList.add("disabled");
        botonSalir.classList.add("disabled");
        //guardamos lo que nos returna la funcion getalumnosstorage en esa variable
        const alumnosStorage = getAlumnosStorage();
        //verificamos q dentro de alumnos storage haya algo y no este vacio
        if (alumnosStorage) {
            //cargamos los datos de alumnosStorage dentro de alumnos
            alumnos = alumnosStorage;
        }
    }
}



//EVENTOS

//Cuando la pagina se recarga ocurre este evento
document.addEventListener("DOMContentLoaded", () => {
    //llamamos a la funcion getSeccionPrincipal
    getSeccionPrincipal();

})

//Cuando hacemos click en el boton submit del formulario ingreso docente se llama a este evento y llamamos a la funcion ingresar al Listadp
formIngresoDocente.addEventListener("submit", ingresarAlListado);

//Evento para salir de la lista de alumnos y volver al ingreso del docente
botonSalir.addEventListener("click", () => {
    contenedorAlumnos.classList.add("disabled");
    seccionPrincipal.classList.remove("disabled");
    botonSalir.classList.remove("disabled");
    //Verificamos y guardamos en seccionPrincipalClase si seccionPrincipal tiene la clase disabled
    seccionPrincialClase = seccionPrincipal.classList.contains("disabled");
    //Guardamos en el localStorage seccionPrincipalClase la cual almacena un valor booleano
    localStorage.setItem("seccion-principal", seccionPrincialClase);
})

