import { estructura } from '../objetos.js';

// LEEMOS LOS FAVORITOS DEL USUARIO
const favs = JSON.parse(localStorage.getItem("favs"))
/* Según la longitud del array de favoritos activamos o desactivamos el mensaje de no resultado 
o el botón de borrar todos los favoritos */
if(favs.length == 0) {
    document.getElementById("clearAll").style.display = "none"
    document.getElementById("resultado").style.display = "flex"
} else if (favs.length == 1) {
    document.getElementById("clearAll").style.display = "none"
    document.getElementById("resultado").style.display = "none"
}
else {
    document.getElementById("resultado").style.display = "none"
    document.getElementById("clearAll").style.display = "flex"
}

// PINTAMOS EL ARRAY DE FAVORITOS
estructura(favs)

// SELECCIONAMOS LOS FAVORITOS
favs.forEach(e => {
    document.getElementById(e.id).src = "../Images/FavoritoClick.svg"
})

// CLEAR ALL
var clear = document.getElementById("clearAll")
clear.addEventListener("click", e => {
    e.preventDefault()
    let favs = JSON.parse(localStorage.getItem("favs"))

    favs = []

    localStorage.setItem("favs", JSON.stringify(favs))
    window.open("/index.html", "_self")
})