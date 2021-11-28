import { estructura } from '../objetos.js';

// LEEMOS LOS FAVORITOS DEL USUARIO
const perfs = JSON.parse(localStorage.getItem("perfiles"))
let favoritos
perfs.forEach(e => {
    favoritos = e.favs
    /* Según la longitud del array de favoritos activamos o desactivamos el mensaje de no resultado 
     o el botón de borrar todos los favoritos */
    if(favoritos.length == 0) {
        document.getElementById("clearAll").style.display = "none"
        document.getElementById("resultado").style.display = "flex"
    } else if (favoritos.length == 1) {
        document.getElementById("clearAll").style.display = "none"
        document.getElementById("resultado").style.display = "none"
    }
    else {
        document.getElementById("resultado").style.display = "none"
        document.getElementById("clearAll").style.display = "flex"
    }
});

// PINTAMOS EL ARRAY DE FAVORITOS
estructura(favoritos)

// SELECCIONAMOS LOS FAVORITOS
favoritos.forEach(e => {
    document.getElementById(e.id).src = "../Images/FavoritoClick.svg"
})

// CLEAR ALL
var clear = document.getElementById("clearAll")
clear.addEventListener("click", e => {
    e.preventDefault()
    let perfiles = JSON.parse(localStorage.getItem("perfiles"))

    for (let i=0; i<perfiles.length; i++) {
        if (perfiles[i].registrado === true) {
            perfiles[i].favs = []
        }
    }

    localStorage.setItem("perfiles", JSON.stringify(perfiles))
    window.open("/index.html", "_self")
})