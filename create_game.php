<?php include 'components/metaHead.php' ?>
<?php include 'controllers/authenticate.php' ?>
<?php include 'controllers/getUserInfo.php' ?>

<?php
	
	$userData = getAllUsers();
    
	$json_array = json_decode($userData, true);
	
	$htmlUserData = '';
	
	foreach($json_array as $item){
		
		$htmlUserData .= '<option value="'.$item["uid"].'">'.$item["email"].'</option>';
			
	}

?>

<link href="assets/css/material-bootstrap-wizard.css" rel="stylesheet" />
<link href="assets/css/material-icons.css" rel="stylesheet" />	
	
<div class="wrapper">

    <!-- Include Slide Bar Block -->
	<?php include 'components/sidebar.php' ?>

    <div class="main-panel">
	
        <!-- Include Navigator Block -->
		<?php include 'components/navigator.php' ?>
		
		<div class="image-container set-full-height" style="background-image: url('assets/images/wizard-city.jpg')">
			<div class="container-fluid">			
				<div class="row">					
					<div class="col-sm-8 col-sm-offset-2">
						<!--  Wizard container   -->
						<div class="wizard-container">
							<div class="card wizard-card" data-color="red" id="wizard">
								<form action="" method="">
							<!--   You can switch " data-color="blue" "  with one of the next bright colors: "green", "orange", "red", "purple"  -->

									<div class="wizard-header">
										<h3 class="wizard-title">
											Create a Game
										</h3>
										<h5>This information will let us help you define a game.</h5>
									</div>
									<div class="wizard-navigation">
										<ul>
											<li><a href="#details" data-toggle="tab">Choose Game</a></li>	
											<li><a href="#reward" data-toggle="tab">Edit Rewards</a></li>
											<li><a href="#launch" data-toggle="tab">Launch</a></li>
										</ul>
									</div>

									<div class="tab-content">
										<div class="tab-pane" id="details">
											<div class="row">
												<div class="col-sm-12">
													<h4 class="info-text"> Let's start with the basic details.</h4>
												</div>
												<div class="col-sm-6">
													<div class="input-group">
														<span class="input-group-addon">
															<i class="material-icons">style</i>
														</span>
														<div class="form-group label-floating">
															<label class="control-label">Game Name</label>
															<input name="name" type="text" class="form-control game-name">
														</div>
													</div>

													<div class="input-group">
														<span class="input-group-addon">
															<i class="material-icons">face</i>
														</span>													
														<div class="form-group label-floating">
															<label class="control-label">Choose Game Owner</label>
															<select class="form-control game-owner">
																<option disabled="" selected=""></option>
																<?php echo $htmlUserData; ?>
															</select>
														</div>
													</div>
													
													
												</div>
												<div class="col-sm-6">
												
													<div class="input-group">
														<span class="input-group-addon">
															<i class="material-icons">settings</i>
														</span>							
														<div class="form-group label-floating">
															<label class="control-label">Choose Game Type</label>
															<select class="form-control game-type">
																<option disabled="" selected=""></option>
																<option value="lottery"> Lottery </option>
																<option value="Albania"> Wheel Fortune </option>
																<option value="Algeria"> Starch Card </option>                                         	
															</select>
														</div>												
													</div>
													
													<div class="input-group">
														<span class="input-group-addon">
															<i class="material-icons">payment</i>
														</span>			
														<div class="form-group label-floating">
															<label class="control-label">Budget</label>
															<select class="form-control budget">
																<option disabled="" selected=""></option>
																<option value="< 10000000"> < 10,000,000 VNĐ </option>
																<option value="1000000 - 3000000"> 1,000,000 VNĐ - 3,000,000 VNĐ </option>
																<option value="5000000 - 9000000"> 5,000,000 VNĐ - 9,000,000 VNĐ </option>
																<option value="> 10000000"> > 10,000,000 VNĐ </option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="tab-pane" id="reward">
											<h4 class="info-text">Setup your game rewards</h4>
											<div class="row">											
												<div class="col-sm-3 list-prizes">
													<div id="1st" class="btn btn-warning btn-fill">1st prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
													<div class="clearfix"></div>
													<div id="2nd" class="btn btn-success btn-inactive btn-fill">2nd prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
													<div class="clearfix"></div>
													<div id="3rd" class="btn btn-primary btn-inactive btn-fill">3rd prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
												</div>
												
												<div class="col-sm-9">
												
													<div class="table-responsive" id="1st">          
														<table class="table">
															<thead>
																<tr>
																	<th>Func</th>
																	<th>Reward Name</th>														
																	<th>Reward Description</th>
																	<th>Reward Image</th>
																	<th>Quantity</th>
																</tr>
															</thead>
															<tbody>
															
																<tr>															
																	<td><i class="material-icons remove">cancel</i></td>
																	<td class="reward-name" ><input type="text" style="width:80%" /></td>
																	<td class="reward-description" ><input type="text" style="width:80%" /></td>
																	<td class="reward-image"><i class="material-icons">add_a_photo</i></td>
																	<td class="reward-qty" ><input type="number" style="width:40%" /></td>
																</tr>
																
															</tbody>														
														</table>
														
														<div class="btn btn-fill btn-warning btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>		
														
													</div>
													
													<div class="table-responsive hide" id="2nd">          
														<table class="table">
															<thead>
																<tr>
																	<th>Func</th>
																	<th>Reward Name</th>														
																	<th>Reward Description</th>
																	<th>Reward Image</th>
																	<th>Quantity</th>
																</tr>
															</thead>
															<tbody>
																<tr>															
																	<td><i class="material-icons remove">cancel</i></td>
																	<td class="reward-name" ><input type="text" style="width:80%" /></td>
																	<td class="reward-description" ><input type="text" style="width:80%" /></td>
																	<td class="reward-image"><i class="material-icons">add_a_photo</i></td>
																	<td class="reward-qty" ><input type="number" style="width:40%" /></td>
																</tr>
															</tbody>														
														</table>
														
														<div class="btn btn-fill btn-warning btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>		
													</div>
													
													<div class="table-responsive hide" id="3rd">            
														<table class="table">
															<thead>
																<tr>
																	<th>Func</th>
																	<th>Reward Name</th>														
																	<th>Reward Description</th>
																	<th>Reward Image</th>
																	<th>Quantity</th>
																</tr>
															</thead>
															<tbody>
																<tr>															
																	<td><i class="material-icons remove">cancel</i></td>
																	<td class="reward-name" ><input type="text" style="width:80%" /></td>
																	<td class="reward-description" ><input type="text" style="width:80%" /></td>
																	<td class="reward-image"><i class="material-icons">add_a_photo</i></td>
																	<td class="reward-qty" ><input type="number" value="1" style="width:40%" /></td>
																</tr>
															</tbody>														
														</table>
														
														<div class="btn btn-fill btn-warning btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>

													</div>
													
													
												</div>
											</div>								
										</div>
										<div class="tab-pane" id="launch">
											<div class="row">
												<h4 class="info-text">Add users and get link to play the game.</h4>
												
												<div class="col-sm-5">
													<div class="input-group">
														<span class="input-group-addon">
															<i class="material-icons">person_add</i>
														</span>
														<div class="form-group label-floating is-empty">
															<label class="control-label">Enter User's Phone</label>
															<input name="user-phone" type="tel" class="form-control phone-number">																				
														</div>
														
													</div>																
												</div>												
												<div class="col-sm-2">											
													<div class="btn btn-fill btn-warning pull-right add-user" style="position:absolute;top: 1em;"><i class="material-icons">add</i> Add</div>
												</div>
												
											</div>
											<div class="clearfix"></div>
											<div class="row">												
												
												<div class="col-sm-7">	
													<div class="table-responsive" id="list-users">          
														<table class="table">
															<thead>
																<tr>
																	<th>Func</th>
																	<th>User's Phone</th>														
																	<th>User's FullName</th>															
																</tr>
															</thead>
															<tbody>
																<!--<tr>															
																	<td><i class="material-icons remove">cancel</i></td>
																	<td class="user-phone" >
																		<input type="text" style="width:80%" />
																	</td>
																	<td class="user-fullname" >
																		<input type="text" style="width:80%" />
																	</td>														
																</tr>-->
															</tbody>														
														</table>													
														
													</div>
												</div>
												
												<div class="col-sm-5 pull-right">											
													<img src="assets/images/lottery_screen.png" class="img-responsive center-block" alt="Lottery Game" width="250" height="auto" />
													<div style="word-wrap: break-word; white-space: normal; display: inline-block; margin: 1em 0; width: 100%;">
														<a href="https://toolkit.tforce.xyz/hosting/beer" >https://toolkit.tforce.xyz/hosting/beer/index.html</a>
													</div>
												</div>		
											
											</div>
											
												
										</div>
									</div>
									<div class="wizard-footer">
										<div class="pull-right">
											<input type='button' class='btn btn-next btn-fill btn-danger btn-wd' name='next' value='Next' />
											<input type='button' class='btn btn-finish btn-fill btn-danger btn-wd' name='finish' value='Finish' />
										</div>
										<div class="pull-left">
											<input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />

											<div class="footer-checkbox">
												<div class="col-sm-12">
												  <!--<div class="checkbox">
													  <label>
														  <input type="checkbox" name="optionsCheckboxes">
													  </label>
													  Subscribe to our newsletter
												  </div>-->
											  </div>
											</div>
										</div>
										<div class="clearfix"></div>
									</div>
								</form>
							</div>
						</div> <!-- wizard container -->
					</div>
				</div> <!-- row -->				
			</div>         
		  
		
         <!-- Include Footer Block -->
		<?php include 'components/footer.php' ?>

    </div>
	</div>   
</div>

<?php include 'components/metaFooter.php' ?>
