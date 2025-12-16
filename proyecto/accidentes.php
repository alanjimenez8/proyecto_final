<?php
$host = "127.0.0.1";
$usuario = "root";
$clave = "Alankrak22#";
$base = "proyectoFinal";   

$conn = new mysqli($host, $usuario, $clave, $base);
if ($conn->connect_error) {
    die("Error de conexión");
}

if (isset($_POST['registrar'])) {
    $fecha = $_POST['fecha'];
    $lugar = $_POST['lugar'];
    $descripcion = $_POST['descripcion'];

    $sqlInsert = "INSERT INTO Accidentes (fecha, lugar, descripcion)
                  VALUES ('$fecha', '$lugar', '$descripcion')";
    $conn->query($sqlInsert);
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
    <a href="registro.php">Registro</a>
  </nav>

<section id="accidentes">
    <h2>Accidentes en Motocicleta</h2>

    <h3>Registrar Accidente</h3>
    <form method="POST">
        <input type="date" name="fecha" required><br><br>
        <input name="lugar" placeholder="Lugar" required><br><br>
        <input name="descripcion" placeholder="Descripción" required><br><br>
        <button type="submit" name="registrar">Registrar</button>
    </form>

    <h3>Lista de Accidentes</h3>
    <ul>
        <?php
        $sqlAccidentes = "SELECT fecha, lugar, descripcion FROM Accidentes";
        $resultado = $conn->query($sqlAccidentes);

        if ($resultado && $resultado->num_rows > 0) {
            while ($fila = $resultado->fetch_assoc()) {
                echo "<li>";
                echo "<strong>".$fila['fecha']."</strong> - ";
                echo $fila['lugar']." - ";
                echo $fila['descripcion'];
                echo "</li>";
            }
        } else {
            echo "<li>No hay accidentes registrados</li>";
        }
        ?>
    </ul>
</section>

</body>
</html>
