<?php
  
  
/******************** Functions getUserInfo *************************/

function getAllUsers() {
		
	try {
		
		global $conn; 
		
		$sql = "SELECT * FROM user";
		
		// Prepare statement
		$stmt = $conn->prepare($sql);
		
		// execute the query
		$stmt->execute();
		
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);	
   
		return json_encode($result);
		
	} catch(PDOException $e) {
		
		echo $sql . "<br>" . $e->getMessage();
		
    }
	
}
/******************** //Functions getUserInfo *************************/

?>