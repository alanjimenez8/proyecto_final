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
    <a href="registro.php">Registro</a> |
    <a href="accidentes_admin.php">accidentes_admin</a> 
  </nav>
  <nav>
    <a href="accidentes_admin.php">accidentes</a> 
    <a href="cascos_admin.php">Cascos</a> 
    <a href="preguntas_admin.php">Preguntas</a> 
  </nav>


<section id="accidentes">
    <h2>Tipos de cascos</h2>

    <h3>Registrar Casco</h3>
    <form method="POST">
  <input name="modelo" placeholder="Modelo">
  <input name="tipo" placeholder="Tipo">
  <input name="certificacion" placeholder="Certificación">
  <button type="submit" name="guardar">Guardar</button>
  </form>

    <h3>Lista de Cascos</h3>
    <ul>
        <?php
    if (isset($_POST['guardar'])) {
        $modelo = $_POST['modelo'];
        $tipo = $_POST['tipo'];
        $certificacion = $_POST['certificacion'];

        $sql = "INSERT INTO Cascos (modelo, tipo, certificacion)
                VALUES ('$modelo', '$tipo', '$certificacion')";

        $conn->query($sql);
    }
  $sqlCascos = "SELECT id, modelo, tipo, certificacion FROM Cascos";
  $resultadoCascos = $conn->query($sqlCascos);
  if ($resultadoCascos && $resultadoCascos->num_rows > 0) {
      while ($fila = $resultadoCascos->fetch_assoc()) {
          echo "<tr>";
          echo "<td>".$fila['id']."</td>";
          echo "  ";
          echo "<td>".$fila['modelo']."</td>";
          echo "  ";
          echo "<td>".$fila['tipo']."</td>";
          echo "  ";
          echo "<td>".$fila['certificacion']."</td>";
          echo "  ";
          echo "</tr>";
          echo "<br>";
      }
  } else {
      echo "<tr><td colspan='4'>No hay cascos registrados</td></tr>";
  }
        ?>
    </ul>
</section>

</body>
</html>
