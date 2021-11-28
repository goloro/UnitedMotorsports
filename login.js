// CONSTANTES
    // SECTION
    const section = document.querySelector("section")
    // OPCIONES MENU PERFIL
    const Login = document.getElementById("Login")
    const SignUp = document.getElementById("SignUp")
    const Profile = document.getElementById("Profile")
    const Favoritos = document.getElementById("Favoritos")
    const Logout = document.getElementById("Logout")
    // VENTANAS
    const ventanaLogin = document.getElementById("ventanaLogin")
    const ventanaSignUp = document.getElementById("ventanaSignUp")
    const ventanaProfile = document.getElementById("ventanaProfile")
    const closeLogin = document.getElementById("CloseLogin")
    const closeSignUp = document.getElementById("CloseSignUp")
    const closeProfile = document.getElementById("CloseProfile")
    // ICON PERFIL
    const IconPerfil = document.getElementById("PerfilIcon")
    // PERFIL LOGUEADO
    var logueado

    // SECCION IMAGENES PERFIL
    const seccionImages = document.querySelector(".SeccionImages")

// CLASE PERFIL
class PerfilUM {
    constructor (registrado, nameSurname, username, email, password, birthday) {
        this.id = Math.random()*100
        this.registrado = registrado
        this.nameSurname = nameSurname
        this.username = username
        this.email = email
        this.password = password
        this.birthday = birthday
        this.image = "https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png.transform/2col/image.png"
        this.favs = []
    }
}

// FUNCIÓN AL CARGAR LA PÁGINA - REVISA SI HAY ALGÚN USUARIO CON SESIÓN INICIADA
(() => {
    let perfiles = leerPerfil()
    if (perfiles != null) {
        for(let i=0; i<perfiles.length; i++) {
            if (perfiles[i].registrado === true) {
                logueado = perfiles[i]
                IconPerfil.src = perfiles[i].image
                usuLogueado()
            } else {
                noLogueado()
            }
        }
    } else {
        noRegistrados()
    }

})()

// NO HAY USUARIOS
function noRegistrados() {
    noLogueado()
    Login.style.display = "none"
}
// NO LOGUEADO
function noLogueado() {
    Login.style.display = "block"
    SignUp.style.display = "block"
    Profile.style.display = "none"
    Logout.style.display = "none"
    Favoritos.style.display = "none"
}
// LOGUEADO
function usuLogueado() {
    Login.style.display = "none"
    SignUp.style.display = "none"
    Profile.style.display = "block"
    Favoritos.style.display = "block"
    Logout.style.display = "block"
}

// LEER PERFILES DEL LOCAL STORAGE
function leerPerfil() {
    let perfiles = JSON.parse(localStorage.getItem('perfiles'))

    if (perfiles === null)
        console.log("No hay perfiles logueados")
    else 
        return perfiles
}

// FUNCIONALIDAD MENU
    // Abrir menu pulsando en icono
    const Perfil = document.getElementById("profileIcon")
    Perfil.addEventListener("click", function() {
        document.getElementById("idMenu").classList.toggle("show")
    })
        // Mostrar login
        function mostrarLogin() {
            ventanaLogin.style.display = "block"
            section.style.filter = "blur(6px)"
        }
        Login.addEventListener("click", function() {
            mostrarLogin()
            ventanaSignUp.style.display = "none"
        })
        // Cerrar login
        function cerrarLogin() {
            ventanaLogin.style.display = "none"
            section.style.filter = "none"
        }
        closeLogin.addEventListener("click", function() {
            cerrarLogin()
        })

        // Mostrar registro
        function mostrarSignUp() {
            ventanaSignUp.style.display = "block"
            section.style.filter = "blur(10x)"
        }
        SignUp.addEventListener("click", function() {
            mostrarSignUp()
            ventanaLogin.style.display = "none"
        })
        // Cerrar registro
        function cerrarSignUp() {
            ventanaSignUp.style.display = "none"
            section.style.filter = "none"
        }
        closeSignUp.addEventListener("click", function() {
            cerrarSignUp()
        })

        // Mostrar perfil
        function mostrarProfile() {
            ventanaProfile.style.display = "block"
            section.style.filter = "blur(6px)"
            document.getElementById("nombreProfile").innerHTML = logueado.username
            document.getElementById("nameSurnameProfile").value = logueado.nameSurname
            document.getElementById("usernameProfile").value = logueado.username
            document.getElementById("emailProfile").value = logueado.email
            document.getElementById("passwordProfile").value = logueado.password
            document.getElementById("birthdayProfile").value = logueado.birthday
            document.getElementById("imagenProfileSeleccionada").src= logueado.image
        }
        Profile.addEventListener("click", function() {
            mostrarProfile()
        })
        // Cerrar perfil
        function cerrarProfile() {
            ventanaProfile.style.display = "none"
            section.style.filter = "none"
        }
        closeProfile.addEventListener("click", function() {
            cerrarProfile()
        })

// GUARDAR PERFIL
function guardarPerfil(perfil) {
    let perfiles
    if (localStorage.getItem('perfiles') === null) {
        perfiles = []
        perfiles.push(perfil)
        localStorage.setItem('perfiles', JSON.stringify(perfiles))
    } else {
        perfiles = JSON.parse(localStorage.getItem('perfiles'))
        perfiles.push(perfil)
        localStorage.setItem('perfiles', JSON.stringify(perfiles))
    }    
}

// ACTUALIZAR PERFILES
function actualizarPerfiles(perfil) {
    let perfiles = JSON.parse(localStorage.getItem("perfiles"))

    for (let i=0; i<perfiles.length; i++) {
        if(perfiles[i].id === perfil.id) {
            perfiles.splice(i,1)
            perfiles.push(perfil)
            localStorage.setItem('perfiles', JSON.stringify(perfiles))
        }
    }
}

// REGISTRO
document.querySelector("#SignUpForm").addEventListener("click", (e) => {
    e.preventDefault()
    const nameSurname = document.getElementById("nameSurname").value;
    const usernameSU = document.getElementById("usernameSU").value;
    const email = document.getElementById("email").value;
    const passwordSU = document.getElementById("passwordSU").value;
    const birthday = document.getElementById("birthday").value;
    
    const perfil = new PerfilUM (true, nameSurname, usernameSU, email, passwordSU, birthday);
    if (comprobarDatos(perfil)) {
        if (comprobarDatos2(perfil)) {
            logueado = perfil
            IconPerfil.src = perfil.image
            usuLogueado()
        
            guardarPerfil(perfil)
            cerrarSignUp();
        }   
    }
})
    // COMPROBAR DATOS REGISTRO
    function comprobarDatos(perfil) {
        let mensaje = "error"
        let flag
        if (perfil.nameSurname != "" && perfil.nameSurname != " ") {
            if (perfil.username != "" && perfil.username != " ") {
                let regEmail = '[^@ \t\r\n]+@gmail\.com'
                if (perfil.email != "" && perfil.email != " " && perfil.email.match('[^@ \t\r\n]+@gmail\.com') != null) {
                    if (perfil.password != "" && perfil.password != " ") {
                        flag = true
                    } else {
                        mensaje = "Password incorrect"
                        flag = false
                    }
                } else {
                    mensaje = "Email incorrect"
                    flag = false
                }
            } else {
                mensaje = "Username incorrect"
                flag = false
            }
        } else {
            mensaje = "Name and Surname incorrect"
            flag = false
        }
        
        if(flag)
            return true
        else {
            ponerMensaje(mensaje)
            return false
        }

    }
    // COMPROBAR QUE NO EXISTAN USUARIO CON ESOS DATOS
    function comprobarDatos2(perfil) {
        let perfiles = leerPerfil()
        let flag 

        if (perfiles != null) {
            for (let i=0; i<perfiles.length; i++) {
                if (perfil.username != perfiles[i].nameSurname && perfil.email != perfiles[i].email) {
                    flag = true
                } else {
                    flag = false
                    break
                }
            }
        } else {
            flag = true
        }

        if (flag)
            return true
        else {
            ponerMensaje("User already exists")
            return false
        }
    }
    // PONER MENSAJE ERROR REGISTRO
    function ponerMensaje(mensaje) {
        let resultado = document.getElementById("resultadoForm")
        resultado.innerHTML = mensaje
        resultado.style.display="block"
    }

// LOGIN
document.querySelector("#LoginForm").addEventListener("click", (e) => {
    e.preventDefault()
    let perfiles = leerPerfil()
    var usernameL = document.getElementById("username")
    var passwordL = document.getElementById("password")
    let bandera = false
    let perfil

    for (let i=0; i<perfiles.length; i++) {
        if (perfiles[i].username === usernameL.value && perfiles[i].password === passwordL.value) {
            bandera = true
            perfil = perfiles[i]
            break
        } else {
            bandera = false
        }
    }

    if(bandera) {
        logueado = perfil
        logueado.registrado = true
        IconPerfil.src = perfil.image
        actualizarPerfiles(logueado)
        cerrarLogin()
        usuLogueado()
    } else {
        let resultado = document.getElementById("resultadoFormLogin")
        resultado.innerHTML = "Username or password incorrect"
        resultado.style.display="block"
        passwordL.value = ""
    }
})

// DATOS PERFIL
document.getElementById("UpdateProfileForm").addEventListener("click", (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nameSurnameProfile").value
    let username = document.getElementById("usernameProfile").value
    let email = document.getElementById("emailProfile").value
    let password = document.getElementById("passwordProfile").value
    let birthday = document.getElementById("birthdayProfile").value

    var perfil = new PerfilUM(true, nombre, username, email, password, birthday)
    let resultado = document.getElementById("resultadoFormPerfil")

    if(comprobarDatos(perfil)){
        perfil.image = logueado.image
        perfil.id = logueado.id
        perfil.favs = logueado.favs
        actualizarPerfiles(perfil)
        logueado = perfil
        cerrarProfile()
    } else {
        resultado.innerHTML = "Something incorrect"
        resultado.style.display="block"
    }
})
    // MENU IMAGENES PERFIL
    seccionImages.addEventListener("click", function(e) {
        if (e.target.tagName == 'IMG') {
            logueado.image = e.target.src
            actualizarPerfiles(logueado)
            IconPerfil.src = e.target.src
            document.getElementById("imagenProfileSeleccionada").src = e.target.src
            e.target.style.filter = "saturate(30%)"
        }
    })

// LOGOUT
Logout.addEventListener("click", (e) => {
    e.preventDefault()
    cerrarLogin()
    cerrarSignUp()
    cerrarProfile()
    logueado.registrado = false
    IconPerfil.src = "../Images/ProfileIcon.png"
    actualizarPerfiles(logueado)
    noLogueado()
    window.open("/index.html", "_self")
})