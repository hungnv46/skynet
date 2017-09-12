<?php
  require_once('../connection.php');
  require_once('updateUserInfo.php');  
?>

<?php

/******************** POST Request Handler ********************/

$jsonData = json_decode(file_get_contents("php://input"));

if($jsonData != null) {
	
	if($jsonData->actionType == 'updateUserInfo') {
		
		$json_result['result'] = updateUserInfo($jsonData);		
		
		echo json_encode($json_result);
		
	} else if ($jsonData->actionType == 'updateGameData') {	
		
		echo 'A';
		
	}
	
}
	
/******************** //POST Request Handler ********************/

?>