import { allObjects } from '../objetos.js';
import { estructura  } from '../objetos.js';

// LEEMOS LA PALABRA DESEADA Y PINTAMOS LOS PRODUCTOS ENCONTRADOS
var buscador = localStorage.getItem("buscador")
document.getElementById("buscador").value = buscador
if (buscador != null && buscador != "" && buscador != " ") {
    encontrarObjetos(buscador)
}

// BUSCAR ELEMENTOS CON BUSCADOR
var encontradosBuscar
function encontrarObjetos(txt) {
    let objetos = allObjects()
    let encontrados = []

    for (let i=0; i<objetos.length; i++) {
        if (((objetos[i].nombre).toLowerCase()).includes(txt.toLowerCase())) {
            encontrados.push(objetos[i])
        } 
    }

    if (encontrados.length != 0) {
        estructura(encontrados)
        encontradosBuscar = encontrados
    } else {
        document.getElementById("resultado").style.display = "flex"
    }
}

//SELECCIONAR LOS FAVORITOS
let perfiles = JSON.parse(localStorage.getItem("perfiles"))

if (perfiles != null) {
    perfiles.forEach(e => {
        if(e.registrado === true) {    
            f(e.favs).forEach(f => {
                if (f.deporte === "F1") {
                    var favorito = encontradosBuscar.filter(j => j.id === f.id)
                    document.getElementById(favorito[0].id).src = "../Images/FavoritoClick.svg"
                }
            });
        }
    });
}