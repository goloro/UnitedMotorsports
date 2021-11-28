const body = document.querySelector("body")

// VENTANA LOGIN
var login = `        
    <div id="ventanaLogin" class="claseLogin">
        <div class="LoginContent">
            <img id="CloseLogin" src="../Images/Close.png" alt="Close Icon" width="20" height="20">
            <img id="UserIcon" src="../Images/UserIcon.png" alt="User Icon" width="100" height="100">
            <form class="Formulario">
                <div class="CampoForm">
                    <img src="../Images/ProfileIconBlack.png" alt="Profle Icon" width="20" height="20">
                    <input id="username" type="text" placeholder="Username" minlength="2" maxlength="20" required>
                </div>
                <div class="CampoForm">
                    <img src="../Images/Lock.png" alt="Profle Icon" width="20" height="20">
                    <input id="password" type="password" placeholder="Password" maxlength="15" required>
                </div>
                <a>Forgot Password?</a>
                <p id="resultadoFormLogin"></p>
                <input id="LoginForm" type="submit" value="Login">
            </form>
        </div>
    </div>`

// VENTANA REGISTRO
var registro = `        
    <div id="ventanaSignUp" class="claseSignUp">
        <div class="SignUpContent">
            <img id="CloseSignUp" src="../Images/Close.png" alt="Close Icon" width="20" height="20">
            <img id="UserIcon" src="../Images/UserIcon.png" alt="User Icon" width="100" height="100">
            <form class="Formulario">
                <div class="CampoForm">
                    <img src="../Images/ProfileIconBlack.png" alt="Profle Icon" width="20" height="20">
                    <input id="nameSurname" type="text" placeholder="Name & Surname" minlength="4" maxlength="40" required>
                </div>
                <div class="CampoForm">
                    <img src="../Images/ProfileIconBlack.png" alt="Lock Icon" width="20" height="20">
                    <input id="usernameSU" type="text" placeholder="Username" minlength="2" maxlength="20" required>
                </div>
                <div class="CampoForm">
                    <img src="../Images/MailIcon.png" alt="Lock Icon" width="20" height="20">
                    <input id="email" type="email" placeholder="Email" minlength="10" maxlength="30" required>
                </div>
                <div class="CampoForm">
                    <img src="../Images/Lock.png" alt="Lock Icon" width="20" height="20">
                    <input id="passwordSU" type="password" placeholder="Password" minlength="4" maxlength="15" required>
                </div>
                <div class="CampoForm">
                    <img src="../Images/DateIcon.png" alt="Lock Icon" width="20" height="20">
                    <input id="birthday" type="date" placeholder="Birthday" required>
                </div>
                <p id="resultadoForm"></p>
                <input id="SignUpForm" type="submit" value="Sign Up">
            </form>
        </div>
    </div>`

// VENTANA PROFILE
var profile = `        
    <div id="ventanaProfile" class="claseProfile">
        <img id="CloseProfile" src="../Images/Close.png" alt="Close Icon" width="20" height="20">
        <h1 id="nombreProfile"></h1>
        <div class="claseProfileContent">
            <div class="datosProfile">
                <form class="Formulario">
                    <div class="CampoForm">
                        <img src="../Images/ProfileIconBlack.png" alt="Profle Icon" width="20" height="20">
                        <input id="nameSurnameProfile" type="text" placeholder="Name & Surname" maxlength="40" required>
                    </div>
                    <div class="CampoForm">
                        <img src="../Images/ProfileIconBlack.png" alt="Lock Icon" width="20" height="20">
                        <input id="usernameProfile" type="text" placeholder="Username" maxlength="20" required>
                    </div>
                    <div class="CampoForm">
                        <img src="../Images/MailIcon.png" alt="Lock Icon" width="20" height="20">
                        <input id="emailProfile" type="email" placeholder="Email" maxlength="30" required>
                    </div>
                    <div class="CampoForm">
                        <img src="../Images/Lock.png" alt="Lock Icon" width="20" height="20">
                        <input id="passwordProfile" type="password" placeholder="Password" maxlength="15" required>
                    </div>
                    <div class="CampoForm">
                        <img src="../Images/DateIcon.png" alt="Lock Icon" width="20" height="20">
                        <input id="birthdayProfile" type="date" placeholder="Birthday" required>
                    </div>
                    <p id="resultadoFormPerfil"></p>
                    <input id="UpdateProfileForm" type="submit" value="Update Profile">
                </form>
            </div>
            <div class="imagenProfile">
                <img id="imagenProfileSeleccionada" alt="Perfil image" width="200" height="200">
                <div class="SeccionImages">
                <img id="Perfil1" src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png" alt="Perfil_1" width="50" height="50">
                <img id="Perfil2" src="https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png" alt="Perfil_2" width="50" height="50">
                <img id="Perfil3" src="https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png" alt="Perfil_3" width="50" height="50">
                <img id="Perfil4" src="https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png" alt="Perfil_4" width="50" height="50">
                <img id="Perfil5" src="https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png.transform/2col/image.png" alt="Perfil_5" width="50" height="50">
                <img id="Perfil6" src="https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png" alt="Perfil_6" width="50" height="50">
                <img id="Perfil7" src="https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png" width="50" height="50">
                <img id="Perfil8" src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png" width="50" height="50">
                <img id="Perfil9" src="https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png" height="50">
                <img id="Perfil10" src="https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png" width="50" height="50">
                </div>
            </div>
        </div>
    </div>`

body.innerHTML += login
body.innerHTML += registro
body.innerHTML += profile