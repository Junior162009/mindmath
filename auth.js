function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (!user || !pass) {
        alert("Completa los campos");
        return;
    }

    if (localStorage.getItem(user)) {
        alert("Usuario ya existe");
        return;
    }

    localStorage.setItem(user, pass);
    alert("Cuenta creada ✅ Ahora inicia sesión");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (localStorage.getItem(user) === pass) {
        localStorage.setItem("loggedUser", user);
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos ❌");
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}