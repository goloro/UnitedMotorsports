import { estructura  } from '../objetos.js';
import { crearMGP2021 } from '../objetos.js';
import { crearMGPCascos } from '../objetos.js';
import { crearMGPEspecial } from '../objetos.js';

const section = document.querySelector("section")

// Moto GP 2021
var titulo_MGP_2021 = document.createElement("p")
titulo_MGP_2021.innerHTML = "Moto GP 2021"
titulo_MGP_2021.className = "titulo"
section.appendChild(titulo_MGP_2021)
const MGP2021 = crearMGP2021()
estructura(MGP2021)

// Moto GP Especial
var titulo_MGP_Especial = document.createElement("p")
titulo_MGP_Especial.innerHTML = "Moto GP Special Livery"
titulo_MGP_Especial.className = "titulo"
section.appendChild(titulo_MGP_Especial)
const MGPEspecial = crearMGPEspecial()
estructura(MGPEspecial)

// Moto GP Cascos
var titulo_MGP_Cascos = document.createElement("p")
titulo_MGP_Cascos.innerHTML = "Cascos Moto GP"
titulo_MGP_Cascos.className = "titulo"
section.appendChild(titulo_MGP_Cascos)
const MGPCascos = crearMGPCascos()
estructura(MGPCascos)

// CONCATENAR ARRAYS MOTOGP
var arrMGP = MGP2021.concat(MGPCascos)

// SELECCIONAR LOS FAVORITOS
let favs = JSON.parse(localStorage.getItem("favs"))

if (favs != null) {
    favs.forEach(e => {   
        if (e.deporte === "MotoGP") {
            var favorito = arrMGP.filter(j => j.id === e.id)
            document.getElementById(favorito[0].id).src = "../Images/FavoritoClick.svg"
        }
    });
}