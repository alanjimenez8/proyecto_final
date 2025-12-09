/**************************************
 SISTEMA SIMULADO - SEGURIDAD VIAL
 Ejecutar desde la consola del navegador
**************************************/

console.log("✅ Sistema de Seguridad Vial iniciado...");

// ==============================
// BASE DE DATOS SIMULADA
// ==============================
let usuarios = [];
let cascos = [];
let accidentes = [];
let faq = [];


// ==============================
// CONTADOR DE VISITAS
// ==============================
if(localStorage.visitas){
    localStorage.visitas++;
}else{
    localStorage.visitas = 1;
}
console.log("👀 Visitas en este navegador:", localStorage.visitas);


// ==============================
// VALIDACIÓN CONTACTO
// ==============================
function validarContacto(nombre, correo, mensaje){
    if(nombre === "" || correo === "" || mensaje === ""){
        console.log("❌ Todos los campos son obligatorios");
        return false;
    }
    if(!correo.includes("@")){
        console.log("❌ Correo inválido");
        return false;
    }
    console.log("✅ Formulario válido");
    return true;
}


// ==============================
// REGISTRO DE USUARIOS
// ==============================
function registrarUsuario(usuario, correo, password){
    usuarios.push({usuario, correo, password});
    console.log("✅ Usuario registrado:", usuario);
}


// ==============================
// LOGIN
// ==============================
function login(usuario, password){
    let encontrado = usuarios.find(u => u.usuario === usuario && u.password === password);
    if(encontrado){
        console.log("✅ Bienvenido:", usuario);
    } else {
        console.log("❌ Usuario o contraseña incorrectos");
    }
}


// ==============================
// CRUD DE CASCOS
// ==============================
function agregarCasco(marca, modelo, tipo, certificacion){
    cascos.push({marca, modelo, tipo, certificacion});
    console.log("✅ Casco agregado");
}

function mostrarCascos(){
    console.table(cascos);
}

function editarCasco(indice, nuevaMarca){
    if(cascos[indice]){
        cascos[indice].marca = nuevaMarca;
        console.log("✏️ Casco actualizado");
    } else {
        console.log("❌ No existe ese casco");
    }
}

function eliminarCasco(indice){
    if(cascos[indice]){
        cascos.splice(indice, 1);
        console.log("🗑️ Casco eliminado");
    } else {
        console.log("❌ Índice inválido");
    }
}


// ==============================
// CRUD ACCIDENTES
// ==============================
function agregarAccidente(fecha, lugar, causa, gravedad){
    accidentes.push({fecha, lugar, causa, gravedad});
    console.log("✅ Accidente registrado");
}

function mostrarAccidentes(){
    console.table(accidentes);
}

function eliminarAccidente(indice){
    if(accidentes[indice]){
        accidentes.splice(indice,1);
        console.log("🗑️ Accidente eliminado");
    } else {
        console.log("❌ Índice inválido");
    }
}


// ==============================
// CRUD FAQ
// ==============================
function agregarPregunta(pregunta, respuesta){
    faq.push({pregunta, respuesta});
    console.log("✅ Pregunta agregada");
}

function mostrarFAQ(){
    console.table(faq);
}

function eliminarPregunta(indice){
    if(faq[indice]){
        faq.splice(indice,1);
        console.log("🗑️ Pregunta eliminada");
    } else {
        console.log("❌ Índice inválido");
    }
}


// ==============================
// VALIDAR CONTRASEÑA
// ==============================
function validarPassword(password){
    if(password.length < 6){
        console.log("❌ Contraseña débil");
    } else {
        console.log("✅ Contraseña segura");
    }
}


// ==============================
// LIMPIAR TODO
// ==============================
function limpiarTodo(){
    usuarios = [];
    cascos = [];
    accidentes = [];
    faq = [];
    console.log("🧹 Sistema reiniciado");
}


// ==============================
// MENÚ DE AYUDA
// ==============================
function ayuda(){
    console.log(`
========= COMANDOS DISPONIBLES =========

registrarUsuario("usuario","correo","pass")
login("usuario","pass")

agregarCasco("Marca","Modelo","Tipo","Certificación")
mostrarCascos()
editarCasco(0,"Nueva marca")
eliminarCasco(0)

agregarAccidente("fecha","lugar","causa","gravedad")
mostrarAccidentes()
eliminarAccidente(0)

agregarPregunta("pregunta","respuesta")
mostrarFAQ()
eliminarPregunta(0)

validarContacto("nombre","correo","mensaje")
validarPassword("password")
limpiarTodo()
ayuda()

======================================
    `);
}

// MOSTRAR AYUDA AUTOMÁTICA
ayuda();