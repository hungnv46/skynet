<?php
  require_once('config.php');
?>

<?php
	
	try {
		$conn = new PDO('mysql:host=' . $servername . ';dbname='. $dbname, $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
		$conn->exec("SET CHARACTER SET utf8");
		//echo "Connected successfully"; 
	}
	catch(PDOException $e) 
	{
		//echo "Connection failed: " . $e->getMessage();
	}
	
	
?>
