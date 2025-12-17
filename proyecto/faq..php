<?php
$host = "127.0.0.1";
$usuario = "root";
$clave = "Alankrak22#";
$base = "proyectoFinal";   

$conn = new mysqli($host, $usuario, $clave, $base);
if ($conn->connect_error) {
    die("Error de conexión");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accidentes</title>
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


<section id="accidentes">
    <h2>Preguntas frecuentes</h2>
    <ul>
        <?php
        $sqlAccidentes = "SELECT pregunta, respuesta FROM Preguntas_frecuentes";
        $resultado = $conn->query($sqlAccidentes);

        if ($resultado && $resultado->num_rows > 0) {
            while ($fila = $resultado->fetch_assoc()) {
                echo "<li>";
                echo "<strong>".$fila['pregunta']."</strong>  ";
                echo "<br>";
                echo $fila['respuesta']."  ";
                echo "</li>";
            }
        } else {
            echo "<li>No hay preguntas frecuentes registradas</li>";
        }
        ?>
    </ul>
</section>

</body>
</html>
