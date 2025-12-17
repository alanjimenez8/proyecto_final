<?php
$host = "127.0.0.1";
$usuario = "root";
$clave = "Alankrak22#";
$base = "proyectoFinal";     

$conn = new mysqli($host, $usuario, $clave, $base);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <script src="proyectofinal.js"></script>
  <link rel="stylesheet" href="proyecto.css">
</head>
<body>
  <h1>Proyecto Seguridad Vial</h1>
  <nav>
    <a href="inicio.php">Inicio</a> |
    <a href="practicas.php">Prácticas Seguras</a> |
    <a href="casco.php">Tipos de Cascos</a> |
    <a href="normas.php">Normativa</a> |
    <a href="accidentes.php">Accidentes</a> |
    <a href="faq..php">FAQ</a> |
    <a href="contacto.php">Contacto</a> |
    <a href="login.php">Login</a> |
    <a href="registro.php">Registro</a> |
    <a href="accidentes_admin.php">accidentes_admin</a> 
  </nav>
  <section id="contacto">
    <h2>Contacto / Compromiso de Conducción Segura</h2>
    <form>
      <input placeholder="Nombre"><br><br>
      <input placeholder="Correo"><br><br>
      <textarea placeholder="Compromiso"></textarea><br><br>
      <button>Enviar</button>
    </form>
  </section>
    
</body>
</html>