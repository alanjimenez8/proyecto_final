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
    <a href="registro.php">Registro</a>
  </nav>
    
  <section id="normativa">
    <h2>Normativa y Reglamento Vial</h2>
    <ul>
      <li>Uso obligatorio del casco</li>
      <li>Licencia vigente</li>
      <li>Prohibido manejar en estado de ebriedad</li>
    </ul>
  </section>
</body>
</html>