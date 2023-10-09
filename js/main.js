let alumnos = [
    {
        id: 0,
        nombre: "Trejo, Flavia Lorena",
        materias: [
            {
                materia: "Matematicas",
                nota1: 4,
                nota2: 7,
                nota3: 6
            },
            {
                materia: "Lengua",
                nota1: 8,
                nota2: 9,
                nota3: 6
            },
            {
                materia: "Ciencias",
                nota1: 8,
                nota2: 4,
                nota3: 7
            }
        ]

    },
    {
        id: 1,
        nombre: "Jimenez, Alejandra",
        materias: [
            {
                materia: "Matematicas",
                nota1: 6,
                nota2: 7,
                nota3: 9
            },
            {
                materia: "Lengua",
                nota1: 9,
                nota2: 6,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 8,
                nota2: 6,
                nota3: 7
            }
        ]
    },
    {
        id: 2,
        nombre: "Romano, Sofia Micaela",
        materias: [
            {
                materia: "Matematicas",
                nota1: 8,
                nota2: 7,
                nota3: 9
            },
            {
                materia: "Lengua",
                nota1: 7,
                nota2: 6,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 6,
                nota2: 6,
                nota3: 8
            }
        ]
    },
    {
        id: 3,
        nombre: "Santucho, Maria Alejandra",
        materias: [
            {
                materia: "Matematicas",
                nota1: 6,
                nota2: 5,
                nota3: 7
            },
            {
                materia: "Lengua",
                nota1: 7,
                nota2: 8,
                nota3: 4
            },
            {
                materia: "Ciencias",
                nota1: 8,
                nota2: 4,
                nota3: 7
            }
        ]
    },
    {
        id: 4,
        nombre: "Cortez, Agustina Leandro",
        materias: [
            {
                materia: "Matematicas",
                nota1: 5,
                nota2: 9,
                nota3: 9
            },
            {
                materia: "Lengua",
                nota1: 9,
                nota2: 4,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 6,
                nota2: 6,
                nota3: 5
            }
        ]
    },
    {
        id: 5,
        nombre: "Juarez, Gabriel Ignacio",
        materias: [
            {
                materia: "Matematicas",
                nota1: 6,
                nota2: 5,
                nota3: 7
            },
            {
                materia: "Lengua",
                nota1: 7,
                nota2: 4,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 8,
                nota2: 5,
                nota3: 6
            }
        ]
    },
    {
        id: 6,
        nombre: "Rodriguez, Daiana Milagros",
        materias: [
            {
                materia: "Matematicas",
                nota1: 7,
                nota2: 9,
                nota3: 10
            },
            {
                materia: "Lengua",
                nota1: 9,
                nota2: 5,
                nota3: 7
            },
            {
                materia: "Ciencias",
                nota1: 9,
                nota2: 5,
                nota3: 8
            }
        ]
    },
    {
        id: 7,
        nombre: "Ruiz, Maria Romina",
        materias: [
            {
                materia: "Matematicas",
                nota1: 5,
                nota2: 6,
                nota3: 8
            },
            {
                materia: "Lengua",
                nota1: 4,
                nota2: 6,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 5,
                nota2: 6,
                nota3: 8
            }
        ]
    },
    {
        id: 8,
        nombre: "Ovejero, Lautaro Isamel",
        materias: [
            {
                materia: "Matematicas",
                nota1: 5,
                nota2: 8,
                nota3: 9
            },
            {
                materia: "Lengua",
                nota1: 3,
                nota2: 5,
                nota3: 5
            },
            {
                materia: "Ciencias",
                nota1: 6,
                nota2: 7,
                nota3: 9
            }
        ]
    },
    {
        id: 9,
        nombre: "Ortiz, Camilo Agustin",
        materias: [{
            materia: "Matematicas",
            nota1: 5,
            nota2: 6,
            nota3: 9
        },
        {
            materia: "Lengua",
            nota1: 7,
            nota2: 6,
            nota3: 8
        },
        {
            materia: "Ciencias",
            nota1: 5,
            nota2: 6,
            nota3: 4
        }
        ]
    },
    {
        id: 10,
        nombre: "Paz, Alejandra Micaela",
        materias: [
            {
                materia: "Matematicas",
                nota1: 6,
                nota2: 5,
                nota3: 6
            },
            {
                materia: "Lengua",
                nota1: 6,
                nota2: 6,
                nota3: 6
            },
            {
                materia: "Ciencias",
                nota1: 4,
                nota2: 5,
                nota3: 8
            }
        ]
    },
]



//En esta seccion traemos los elementos del DOM

const seccionPrincipal = document.getElementById("seccion-principal");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const inputIngresar = document.getElementById("ingresar");
const formIngresoDocente = document.getElementById("ingreso-docente");
const contenedorAlumnos = document.getElementById("contenedor-alumnos");
const botonSalir = document.getElementById("salir");
let botonesDarBaja = document.querySelectorAll(".buton-baja");





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
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
}


function ingresarAlListado(e) {
    e.preventDefault();
    //Verificamos si el boton ingresar funciona
    console.log("boton apretado");
    if (inputUsuario.value === "docente") {
        console.log("usuario valido");
        if (inputContraseña.value === "12345678") {
            //entre comillas la contraseña porque el input password guarda los datos en forma de string
            console.log("contraseña valida");
            seccionPrincipal.classList.add("disabled");
            cargarListadoAlumnos(alumnos);
            formIngresoDocente.reset();
        }else{
            console.log("contraseña invalida");
            // // console.log(inputContraseña.value);
            // // console.log(typeof inputContraseña.value);
        }
    }else{
        console.log("usuario invalido");
    }
}

const actualizarBotonesDarBaja = () =>{
    //hacemos esto porque los botones recien existen en el DOM cuando cargamos los alumnos
    botonesDarBaja = document.querySelectorAll(".buton-baja");

    //y los traemos para poder darles eventos
    //con un ForEach ponemos un escuchador para cada boton 
    botonesDarBaja.forEach(boton =>{
        boton.addEventListener("click", darDeBajaAlumno);
    })
}


const darDeBajaAlumno = (e) =>{
    //obetenemos el id del boton y lo parseamos porque nos devuelve un tipo de dato en forma de string
    const idBotonBaja = Number(e.currentTarget.id);
    //obetenemos el index
    const index = alumnos.findIndex(alumno => alumno.id === idBotonBaja);
    //eliminamos el elemento de alumnos
    alumnos.splice(index, 1);
    cargarListadoAlumnos(alumnos);
}

const getAlumnosStorage = () =>{
    const alumnosLS = JSON.parse(localStorage.getItem("alumnos"));
    return alumnosLS
}






//EVENTOS

document.addEventListener("DOMContentLoaded", () =>{
    const alumnosStorage = getAlumnosStorage();
    if (alumnosStorage) {
        alumnos = alumnosStorage;
    }
})
formIngresoDocente.addEventListener("submit", ingresarAlListado);
botonSalir.addEventListener("click", () =>{
    contenedorAlumnos.classList.add("disabled");
    seccionPrincipal.classList.remove("disabled");
    botonSalir.classList.remove("disabled");
})

