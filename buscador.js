// EVENT LISTENER BUSCADOR
const buscador = document.getElementById("buscador")
document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault();

    let txt = buscador.value

    if (txt != "" && txt != " ") {
        localStorage.setItem("buscador", txt)
        window.open("/Buscador/buscar.html", "_self")
    }
})

document.querySelector(".searchRes").addEventListener("submit", e => {
    e.preventDefault();

    let txt = buscador.value

    if (txt != "" && txt != " ") {
        localStorage.setItem("buscador", txt)
        window.open("/Buscador/buscar.html", "_self")
    }
})