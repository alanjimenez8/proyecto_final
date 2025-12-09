// ARRAYS SIMULADOS
let usuarios = [];
let cascos = [];
let accidentes = [];

// ================= CASCOS =================
document.getElementById("formCasco").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("cascoNombre").value;
    let tipo = document.getElementById("cascoTipo").value;
    let cert = document.getElementById("cascoCert").value;

    if(nombre === "" || tipo === "" || cert === ""){
        alert("Llena todos los campos");
        return;
    }

    cascos.push({nombre, tipo, cert});

    let li = document.createElement("li");
    li.textContent = nombre + " - " + tipo + " - " + cert;

    document.getElementById("listaCascos").appendChild(li);
    this.reset();
});

// ================= ACCIDENTES =================
document.getElementById("formAccidente").addEventListener("submit", function(e){
    e.preventDefault();

    let fecha = accFecha.value;
    let lugar = accLugar.value;
    let desc = accDesc.value;

    if(fecha === "" || lugar === "" || desc === ""){
        alert("Llena todos los campos");
        return;
    }

    accidentes.push({fecha, lugar, desc});

    let li = document.createElement("li");
    li.textContent = fecha + " - " + lugar + " - " + desc;
    listaAccidentes.appendChild(li);

    this.reset();
});

// ================= REGISTRO =================
document.getElementById("formRegistro").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = regNombre.value;
    let correo = regCorreo.value;
    let pass = regPass.value;

    usuarios.push({correo, pass});
    alert("Usuario registrado ✅");

    this.reset();
});

// ================= LOGIN =================
document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();

    let correo = loginCorreo.value;
    let pass = loginPass.value;

    let encontrado = usuarios.find(u => u.correo === correo && u.pass === pass);

    if(encontrado){
        alert("✅ Bienvenido");
    } else {
        alert("❌ Datos incorrectos");
    }
});

// ================= CONTACTO =================
document.getElementById("formContacto").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = conNombre.value;
    let correo = conCorreo.value;
    let msg = conMsg.value;

    if(nombre === "" || correo === "" || msg === ""){
        alert("Completa todo");
        return;
    }

    alert("✅ Compromiso recibido");
    this.reset();
});