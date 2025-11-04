<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Successful</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Registration Successful 🎉</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = htmlspecialchars($_POST['name']);
      $email = htmlspecialchars($_POST['email']);
      $phone = htmlspecialchars($_POST['phone']);
      $gender = htmlspecialchars($_POST['gender']);
      $address = htmlspecialchars($_POST['address']);

      echo "<div class='output'>";
      echo "<p><strong>Full Name:</strong> $name</p>";
      echo "<p><strong>Email:</strong> $email</p>";
      echo "<p><strong>Phone:</strong> $phone</p>";
      echo "<p><strong>Gender:</strong> $gender</p>";
      echo "<p><strong>Address:</strong> $address</p>";
      echo "</div>";
    } else {
      echo "<p>No data received.</p>";
    }
    ?>

    <a href="index.html"><button>Go Back</button></a>
  </div>
</body>
</html>
