<?php

/******************** Functions updateUserInfo *************************/

function updateUserInfo($objData) {
    
	// Confirm and open session for user
	session_start();
	$_SESSION['loggedin'] = true;
	$_SESSION['uid'] = $objData->facebookId;	
		
	try {
		
		global $conn; 
		
		$sql = "SELECT email FROM user WHERE  uid=". $objData->facebookId;
		
		// Prepare statement
		$stmt = $conn->prepare($sql);
		
		// execute the query
		$stmt->execute();
		
		$result = $stmt->rowCount();	
		
		if($result > 0) {
			
			//Update exist User
			$sql = "UPDATE user SET 
			
				firstname='". $objData->firstName ."',  
				lastname='". $objData->lastName ."',  
				email='". $objData->email ."',  
				role=1, 			
				latest_updated=now()		
				WHERE uid='". $objData->facebookId ."'";
			
			// Prepare statement
			$stmt = $conn->prepare($sql);

			// execute the query
			$stmt->execute();

			// echo a message to say the UPDATE succeeded
			return $stmt->rowCount() . " records UPDATED successfully";
	
		} else {
			
			// Insert new user			
			$role = 1;
			
			$sql = "INSERT INTO user (uid,  firstname, lastname, email, password, role, created_date, latest_updated) VALUES ('". $objData->facebookId . "', '". $objData->firstName . "', '". $objData->lastName . "', '". $objData->email ."', '', '" . $role . "', now(), now())";
			
			$conn->exec($sql);
			
			return 'New record created successfully';
			
		}
		
	} catch(PDOException $e) {
		
		echo $sql . "<br>" . $e->getMessage();
		
    }
	
}
/******************** //Functions updateUserInfo *************************/

?>