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



const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const inputIngresar = document.getElementById("ingresar");
const formIngresoDocente = document.getElementById("ingreso-docente");
const contenedorAlumnos = document.getElementById("contenedor-alumnos");

function calcularPromedio() {
    alumnos.forEach(alumno => {
        alumno.materias.forEach(materia => {
            materia.promedio = Number(((materia.nota1 + materia.nota2 + materia.nota3) / 3).toFixed(2));
        })
    })
}

calcularPromedio();

function cargarListadoAlumnos(listaAlumnos) {
    contenedorAlumnos.classList.remove("disabled");

    listaAlumnos.forEach(alumno => {
        const divAlumno = document.createElement("div");
        divAlumno.classList.add("alumno");
        divAlumno.innerHTML = `
        <h2>${alumno.nombre}</h2>
        `;
        divMaterias = document.createElement("div");
        divMaterias.classList.add("materias");


        listaAlumnos.materias.forEach(materia => {
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
}






formIngresoDocente.addEventListener("submit", ingresarAlListado);

function ingresarAlListado(e) {
    e.preventDefault();
    if (inputUsuario.value === "docente" && inputContraseña.value === 12345678) {
        cargarListadoAlumnos(alumnos);
    }
}





