// FUNCIONALIDAD MENU
const menuRes = document.getElementById("menuRes")
menuRes.addEventListener("click", function() {
    document.getElementById("idSubMenuRes").classList.toggle("showMenuRes")
    document.querySelector("section").classList.toggle("filtro")
})