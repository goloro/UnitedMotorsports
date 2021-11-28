import { estructura  } from '../objetos.js';
import { crearF1Normales } from '../objetos.js';
import { crearF1Francesco } from '../objetos.js';
import { crearF1Motos } from '../objetos.js';
import { crearF1Especial } from '../objetos.js';

const section = document.querySelector("section")

// F12021
var titulo_F1_2021 = document.createElement("p")
titulo_F1_2021.innerHTML = "F1 2021";
titulo_F1_2021.className = "titulo";
section.appendChild(titulo_F1_2021)
const F1_2021 = crearF1Normales()
estructura(F1_2021)

// F1 Especial
var titulo_F1_Especial = document.createElement("p")
titulo_F1_Especial.innerHTML = "F1 Special Livery"
titulo_F1_Especial.className = "titulo"
section.appendChild(titulo_F1_Especial)
const F1_Especial = crearF1Especial()
estructura(F1_Especial)

// F1 Francesco
var titulo_F1_Francesco = document.createElement("p")
titulo_F1_Francesco.innerHTML = "F1 Francesco"
titulo_F1_Francesco.className = "titulo"
section.appendChild(titulo_F1_Francesco)
const F1_Francesco = crearF1Francesco()
estructura(F1_Francesco)

// F1Motos
var titulo_F1_Motos = document.createElement("p")
titulo_F1_Motos.innerHTML = "F1 Motos"
titulo_F1_Motos.className = "titulo"
section.appendChild(titulo_F1_Motos)
const F1_Motos = crearF1Motos()
estructura(F1_Motos)

// CONCATENAR ARRAYS F1
var arrF1 = F1_2021.concat(F1_Francesco, F1_Motos)

//SELECCIONAR LOS FAVORITOS
let perfiles = JSON.parse(localStorage.getItem("perfiles"))

if (perfiles != null) {
    perfiles.forEach(e => {
        if(e.registrado === true) {
            let favoritos = e.favs
    
            favoritos.forEach(f => {
                if (f.deporte === "F1") {
                    var favorito = arrF1.filter(j => j.id === f.id)
                    document.getElementById(favorito[0].id).src = "../Images/FavoritoClick.svg"
                }
            });
        }
    });
}