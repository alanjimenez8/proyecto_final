// Mensaje inicial
console.log("✅ Proyecto Seguridad Vial cargado correctamente");

// ================================
// UTILIDADES GENERALES
// ================================
function mostrarMensaje(mensaje, tipo = "info") {
  if (tipo === "error") {
    console.error("❌ " + mensaje);
  } else if (tipo === "warning") {
    console.warn("⚠️ " + mensaje);
  } else {
    console.log("ℹ️ " + mensaje);
  }
}

// ================================
// VALIDACIONES
// ================================
function validarTexto(texto, campo) {
  if (!texto || texto.trim() === "") {
    mostrarMensaje("El campo '" + campo + "' está vacío", "error");
    return false;
  }
  return true;
}

function validarCorreo(correo) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo)) {
    mostrarMensaje("Correo inválido: " + correo, "error");
    return false;
  }
  return true;
}

function validarPassword(password) {
  if (password.length < 6) {
    mostrarMensaje("La contraseña debe tener al menos 6 caracteres", "warning");
    return false;
  }
  return true;
}

// ================================
// FORMULARIO DE CASCOS
// ================================
function guardarCasco(nombre, tipo, certificacion) {
  mostrarMensaje("Intentando guardar casco...");

  if (
    !validarTexto(nombre, "Nombre del casco") ||
    !validarTexto(tipo, "Tipo de casco") ||
    !validarTexto(certificacion, "Certificación")
  ) {
    mostrarMensaje("No se pudo guardar el casco", "error");
    return;
  }

  console.log("🪖 Casco guardado:", {
    nombre: nombre,
    tipo: tipo,
    certificacion: certificacion
  });

  mostrarMensaje("Casco registrado correctamente");
}

// ================================
// FORMULARIO DE ACCIDENTES
// ================================
function registrarAccidente(fecha, lugar, descripcion) {
  mostrarMensaje("Registrando accidente...");

  if (
    !validarTexto(fecha, "Fecha") ||
    !validarTexto(lugar, "Lugar") ||
    !validarTexto(descripcion, "Descripción")
  ) {
    mostrarMensaje("Error al registrar accidente", "error");
    return;
  }

  console.log("🚨 Accidente registrado:", {
    fecha: fecha,
    lugar: lugar,
    descripcion: descripcion
  });

  mostrarMensaje("Accidente registrado con éxito");
}

// ================================
// LOGIN
// ================================
function login(correo, password) {
  mostrarMensaje("Intentando iniciar sesión...");

  if (!validarCorreo(correo) || !validarPassword(password)) {
    mostrarMensaje("Login fallido", "error");
    return;
  }

  // Simulación de error del sistema
  if (correo === "admin@error.com") {
    mostrarMensaje("Error del servidor (simulado)", "error");
    return;
  }

  console.log("👤 Usuario autenticado:", correo);
  mostrarMensaje("Inicio de sesión exitoso");
}

// ================================
// REGISTRO
// ================================
function registrarUsuario(nombre, correo, password) {
  mostrarMensaje("Registrando usuario...");

  if (
    !validarTexto(nombre, "Nombre") ||
    !validarCorreo(correo) ||
    !validarPassword(password)
  ) {
    mostrarMensaje("Registro fallido", "error");
    return;
  }

  console.log("📝 Usuario registrado:", {
    nombre: nombre,
    correo: correo
  });

  mostrarMensaje("Usuario registrado correctamente");
}

// ================================
// SIMULACIÓN DE ERRORES DEL HTML
// ================================
function simularErrorHTML() {
  mostrarMensaje("Simulando fallo del HTML...", "warning");

  let elemento = document.getElementById("elementoInexistente");
  if (!elemento) {
    mostrarMensaje("Elemento HTML no encontrado", "error");
  }
}

// ================================
// PRUEBAS AUTOMÁTICAS EN CONSOLA
// ================================
console.log("🧪 Ejecuta estas pruebas desde la consola:");
console.log("guardarCasco('', 'Integral', 'DOT')");
console.log("registrarAccidente('2025-01-01', '', 'Choque')");
console.log("login('correo@mal', '123')");
console.log("registrarUsuario('Juan', 'juan@mail.com', '123')");
console.log("simularErrorHTML()");