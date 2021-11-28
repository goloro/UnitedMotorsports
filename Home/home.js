const nav = document.querySelector("nav")
const footer = document.querySelector("footer")

// CAMBIA COLOR DE NAV Y FOOTER AL PASAR POR ENCIMA
function botonInF1() {
    nav.style.backgroundColor = "#ff1601"
    footer.style.backgroundColor = "#ff1601"
}
function botonInMGP() {
    nav.style.backgroundColor = "#d90042"
    footer.style.backgroundColor = "#d90042"
}
function navDefault() {
    nav.style.backgroundColor = "#1c1b24"
    footer.style.backgroundColor = "#1c1b24"
}

// FUNCIÓN AUTOEJECUTABLE QUE CAMBIA LAS IMÁGENES DE LAS TARJETAS PRINCIPALES
(function cambiarIMGF1()  {
    let imagenesF1 = ["Images/F1/Normal/Ferrari.png", "Images/F1/Especial/Porsche.png", "Images/F1/Especial/Hass.png", "Images/F1/Motos/AlfaRomeo.png", "Images/F1/Francesco/Alpine.png", "Images/F1/Normal/Maclaren.png"]
    let imagenesMGP = ["Images/MotoGP/Normal/RedBullKTM.png", "Images/MotoGP/Cascos/RedBullMarc.png", "Images/MotoGP/Especial/MVAgusta.png", "Images/MotoGP/Especial/ViñalesMclaren.png", "Images/MotoGP/Normal/RedBullKTMFactory.png", "Images/MotoGP/Cascos/Valentino.png"]
    
    const imgF1 = document.getElementById("coleccionF1")
    const imgMGP = document.getElementById("coleccionMGP")  
    
    imgF1.src = "../Images/F1/Normal/Ferrari.png"
    imgMGP.src = "../Images/MotoGP/Normal/RedBullKTM.png"

    var i=0
    setInterval(function(){
        if (i == imagenesF1.length-1)
            i = 0
        else
            i++
        imgF1.src = imagenesF1[i]
    },5000) 
    
    var j=0
    setInterval(function(){
        if (j == imagenesMGP.length-1)
            j = 0
        else
            j++
        imgMGP.src = imagenesMGP[i]
    },5000) 
}) ()