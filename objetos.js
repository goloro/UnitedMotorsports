export class Objeto {
    constructor (deporte, tipo, nombre, url, descrip, id) {
        this.deporte = deporte
        this.tipo = tipo
        this.nombre = nombre
        this.url = url
        this.id = id
        this.valor = (Math.random()*1).toFixed(2)
        this.descrip = descrip
    }
}

export function estructura(obj) {
    var section = document.querySelector("section")
    var content = document.createElement("div")
    content.className = "content"

    for (let i=0; i<obj.length; i++) {
        var content2 = document.createElement("div")
        content2.className = "content2"
        var contenido = `
        <div class="item">
            <img class="itemF1" src="${obj[i].url}">
            <div class="TituloItems">
                <h3>${obj[i].nombre}</h3>
                <p id="descrip">${obj[i].descrip}</p>
                <div class="creadorFav">
                    <img id="um" src="../Images/ethereum-brands.svg">
                    <p id="valor">${obj[i].valor}</p>
                    <p id="valor">ETH</p>
                    <div class="fav">
                        <img id="${obj[i].id}" class="fav-icon" src="../Images/Favorito.svg">
                    </div>
                </div>
            </div>
        </div>`
        content2.innerHTML += contenido
        content.appendChild(content2)
    }
    section.appendChild(content)
}


export function crearF1Normales() {
    var ArrNormales = []
    ArrNormales.push(new Objeto("F1", "F1 2021", "Alfa Romeo 2021", "../Images/F1/Normal/AlfaRomeo.png", "2021 F1 Alfa Romeo Livery", 1))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Alpha Tauri 2021", "../Images/F1/Normal/AlphaTauri.png", "2021 F1 Alpha Tauri Livery", 2))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Alpine 2021", "../Images/F1/Normal/Alpine.png", "2021 F1 Alpine Livery", 3))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Aston Martin 2021", "../Images/F1/Normal/AstonMartin.png", "2021 F1 Alston Martin Livery", 4))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Ferrari 2021", "../Images/F1/Normal/Ferrari.png", "2021 F1 Ferrari Livery", 5))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Hass 2021", "../Images/F1/Normal/Hass.png", "2021 F1 Hass Livery", 6))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Mclaren 2021", "../Images/F1/Normal/Maclaren.png", "2021 F1 Mclaren Livery", 7))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Mercedes 2021", "../Images/F1/Normal/Mercedes.png", "2021 F1 Mercedes Livery", 8))
    ArrNormales.push(new Objeto("F1", "F1 2021", "RedBull 2021", "../Images/F1/Normal/RedBull.png", "2021 F1 RedBull Livery", 9))
    ArrNormales.push(new Objeto("F1", "F1 2021", "Williams 2021", "../Images/F1/Normal/Williams.png", "2021 F1 Williams Livery", 10))

    return ArrNormales
}

export function crearF1Motos() {
    var ArrF1Motos = []
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Alfa Romeo Moto", "../Images/F1/Motos/AlfaRomeo.png", "Alfa Romeo F1 Team 2021 Livery in MotoGP", 11))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Alpha Tauri Moto", "../Images/F1/Motos/AlphaTauri.png", "Alpha Tauri F1 Team 2021 Livery in MotoGP", 12))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Alpine Moto", "../Images/F1/Motos/Alpine.png", "Alpine F1 Team 2021 Livery in MotoGP", 13))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Aston Martin Moto", "../Images/F1/Motos/AstonMartin.png",  "Aston Martin F1 Team 2021 Livery in MotoGP", 14))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Ferrari Moto", "../Images/F1/Motos/Ferrari.png", "Ferrari F1 Team 2021 Livery in MotoGP", 15))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Hass Moto", "../Images/F1/Motos/Hass.png", "Hass F1 Team 2021 Livery in MotoGP", 16))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Mclaren Moto", "../Images/F1/Motos/Maclaren.png", "Mclaren F1 Team 2021 Livery in MotoGP", 17))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Mercedes Moto", "../Images/F1/Motos/Mercedes.png", "Mercedes F1 Team 2021 Livery in MotoGP", 18))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "RedBull Moto", "../Images/F1/Motos/RedBull.png", "RedBull F1 Team 2021 Livery in MotoGP", 19))
    ArrF1Motos.push(new Objeto("F1", "F1 Motos", "Williams Moto", "../Images/F1/Motos/Williams.png", "Williams F1 Team 2021 Livery in MotoGP", 20))

    return ArrF1Motos
}

export function crearF1Francesco() {
    var ArrF1Francesco = []
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Alfa Romeo Francesco", "../Images/F1/Francesco/AlfaRomeo.png", "Alfa Romeo F1 Team 2021 Livery in Francesco of Cars Movie", 21))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Alpha Tauri Francesco", "../Images/F1/Francesco/AlphaTauri.png", "AlphaTauri F1 Team 2021 Livery in Francesco of Cars Movie", 22))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Alpine Francesco", "../Images/F1/Francesco/Alpine.png", "Alpine F1 Team 2021 Livery in Francesco of Cars Movie", 23))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Aston Martin Francesco", "../Images/F1/Francesco/AstonMartin.png", "AstonMartin F1 Team 2021 Livery in Francesco of Cars Movie", 24))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Ferrari Francesco", "../Images/F1/Francesco/Ferrari.png", "Ferrari F1 Team 2021 Livery in Francesco of Cars Movie", 25))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Hass Francesco", "../Images/F1/Francesco/Hass.png", "Hass F1 Team 2021 Livery in Francesco of Cars Movie", 26))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Mclaren Francesco", "../Images/F1/Francesco/Maclaren.png", "Mclaren F1 Team 2021 Livery in Francesco of Cars Movie", 27))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Mercedes Francesco", "../Images/F1/Francesco/Mercedes.png", "Mercedes F1 Team 2021 Livery in Francesco of Cars Movie", 28))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "RedBull Francesco", "../Images/F1/Francesco/RedBull.png", "RedBull F1 Team 2021 Livery in Francesco of Cars Movie", 29))
    ArrF1Francesco.push(new Objeto("F1", "F1 Francesco", "Williams Francesco", "../Images/F1/Francesco/Williams.png", "Williams F1 Team 2021 Livery in Francesco of Cars Movie", 30))

    return ArrF1Francesco
}

export function crearF1Especial() {
    var ArrF1Francesco = []
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Hass 1950", "../Images/F1/Especial/Hass.png", "Hass Livery in a F1 1950 car", 51))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Aston Martin 1950", "../Images/F1/Especial/AstonMartin.png", "Aston Martin Livery in a F1 1950 car", 52))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Alfa Romeo 1950", "../Images/F1/Especial/AlfaRomeo.png", "Alfa Romeo Livery in a F1 1950 car", 53))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Ferrari 1950", "../Images/F1/Especial/Ferrari.png", "Ferrari Livery in a F1 1950 car", 54))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Squid Game F1", "../Images/F1/Especial/SquidGame.png", "Squid Game Livery in a F1 car", 55))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Google F1", "../Images/F1/Especial/Google.png", "Google Livery in a F1 car", 56))
    ArrF1Francesco.push(new Objeto("F1", "F1 Especial", "Porsche F1", "../Images/F1/Especial/Porsche.png", "Porsche Livery in a F1 car", 57))

    return ArrF1Francesco
}

export function crearMGP2021() {
    var ArrMGP2021 = []
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "RedBull KTM 2021", "../Images/MotoGP/Normal/RedBullKTM.png", "2021 MotoGP RedBull KTM Livery", 31))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "RedBull KTMF 2021", "../Images/MotoGP/Normal/RedBullKTMFactory.png", "2021 MotoGP RedBull KTM Factory Livery", 32))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "Aprilia 2021", "../Images/MotoGP/Normal/Aprilla2020.png", "2021 MotoGP Aprilia Livery", 33))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "Repsol 2021", "../Images/MotoGP/Normal/Repsol.png", "2021 MotoGP Repsol Livery", 34))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "Ducati 2021", "../Images/MotoGP/Normal/Ducati.png", "2021 MotoGP Ducati Livery", 35))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "Yamaha 2021", "../Images/MotoGP/Normal/Yamaha.png", "2021 MotoGP Yamaha Livery", 36))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "KTM 2021", "../Images/MotoGP/Normal/KTM.PNG", "2021 MotoGP KTM Livery", 37))
    ArrMGP2021.push(new Objeto("MotoGP", "MotoGP 2021", "Suzuki 2021", "../Images/MotoGP/Normal/Suzuki.jpg", "2021 MotoGP Suzuki Livery", 38))

    return ArrMGP2021
}

export function crearMGPCascos() {
    var ArrMGPCascos = []
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Cascos", "Valentino Helmet", "../Images/MotoGP/Cascos/Valentino.png", "Valentino Helmet", 39))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Cascos", "Alex Márquez Helmet", "../Images/MotoGP/Cascos/RedBullAlex.png", "Alex Márquez Helmet", 40))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Cascos", "Marc Márquez Helmet", "../Images/MotoGP/Cascos/RedBullMarc.png", "Marc Márquez Helmet", 41))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Cascos", "Viñales Helmet", "../Images/MotoGP/Cascos/viñales.jpg", "Viñales Helmet", 42))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Cascos", "Suzuki Arai Helmet", "../Images/MotoGP/Cascos/SuzukiArai.jpg", "Suzuki Arai Helmet", 43))

    return ArrMGPCascos
}

export function crearMGPEspecial() {
    var ArrMGPCascos = []
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Valentino F1", "../Images/MotoGP/Especial/ValentinoF1.png", "Valentino Livery in a F1 car", 44))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Suzuki Pepsi", "../Images/MotoGP/Especial/SuzukiPepsi.png", "Suzuki RGV500 Pepsi Livery", 45))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "MV Agusta", "../Images/MotoGP/Especial/MVAgusta.png", "MV Agusta Red and Silver", 46))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Yamaha Marlboro", "../Images/MotoGP/Especial/YamahaMarlboro.png", "Yamaha Marlboro 1988 Livery", 47))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Honda Rothmans", "../Images/MotoGP/Especial/HondaRothmans.png", "Honda Rothmans 1985 Livery", 48))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Suzuki GP Racer", "../Images/MotoGP/Especial/SuzukiGrandPrixRacer.jpg", "Suzuki Grand Prix Racer Livery", 49))
    ArrMGPCascos.push(new Objeto("MotoGP", "Moto GP Especial", "Viñales Mclaren", "../Images/MotoGP/Especial/ViñalesMclaren.png", "Viñales Mclaren Livery", 50))

    return ArrMGPCascos
}

// CONCATENAR TODOS LOS ARRAYS
export function allObjects() {
    var arr1 = crearF1Normales()
    var arr2 = crearF1Motos()
    var arr3 = crearF1Francesco()
    var arr4 = crearMGP2021()
    var arr5 = crearMGPCascos()
    var arr6 = crearMGPEspecial()
    var arr7 = crearF1Especial()
    var objects = arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7)

    return objects
}

// EVENT LISTENER FAVORITOS
var section = document.querySelector("section");

section.addEventListener('click', e=> {
    const icon = e.target;
    if (icon.classList.contains('fav-icon')) {
        if(icon.src.endsWith('/Images/FavoritoClick.svg')) {
            icon.src = "../Images/Favorito.svg"
            removeFavorito(icon.id)
        }
        else {
            icon.src = "../Images/FavoritoClick.svg"
            addFavorito(icon.id)
        }
    }

})

// ENCONTRAR OBJETOS POR NOMBRE
function encontrarObjeto(nombre) {
    var id = parseInt(nombre)
    var objetos = allObjects()
    let encontrado
    objetos.forEach(e => {
        if(e.id ===  id) {
            encontrado = e
        }
    });
    return encontrado
}

// HOVER FAVORITOS
section.addEventListener('mouseover', e=> {
    const icon = e.target;
    if (icon.classList.contains('fav-icon')) {
        if(icon.src.endsWith('/Images/Favorito.svg')) {
            icon.src = "../Images/FavoritoHover.svg"
        }
    }
})
section.addEventListener('mouseout', e=> {
    const icon = e.target;
    if (icon.classList.contains('fav-icon')) {
        if(icon.src.endsWith('/Images/FavoritoHover.svg')) {
            icon.src = "../Images/Favorito.svg"
        }
    }
})

// GUARDAR FAVORITOS
function addFavorito(id) {
    let favorito = encontrarObjeto(id)
    let favs

    if (JSON.parse(localStorage.getItem("favs")) == null) {
        favs = []

    } else {
        favs = JSON.parse(localStorage.getItem("favs"))
    }

    favs.push(favorito)

    localStorage.setItem("favs", JSON.stringify(favs))
}

// ELIMINAR FAVORITOS
function removeFavorito(id) {
    let favs = JSON.parse(localStorage.getItem("favs"))

    for (let i=0; i<favs.length; i++) {
        if (favs[i].id == id) {
            favs.splice(i, 1)
        }
    };

    localStorage.setItem("favs", JSON.stringify(favs))
    location.reload()
}