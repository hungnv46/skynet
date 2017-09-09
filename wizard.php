<?php include 'components/metaHead.php' ?>

<link href="assets/css/material-bootstrap-wizard.css" rel="stylesheet" />
<link href="assets/css/material-icons.css" rel="stylesheet" />	
	
<div class="image-container set-full-height" style="background-image: url('assets/images/wizard-city.jpg')">
	   

	    <!--   Big container   -->
	    <div class="container">
	        <div class="row">
		        <div class="col-sm-8 col-sm-offset-2">
		            <!--      Wizard container        -->
		            <div class="wizard-container">
		                <div class="card wizard-card" data-color="red" id="wizard">
		                    <form action="" method="">
		                <!--        You can switch " data-color="blue" "  with one of the next bright colors: "green", "orange", "red", "purple"             -->

		                    	<div class="wizard-header">
		                        	<h3 class="wizard-title">
		                        		Create a Game
		                        	</h3>
									<h5>This information will let us help you define your game.</h5>
		                    	</div>
								<div class="wizard-navigation">
									<ul>
			                            <li><a href="#details" data-toggle="tab">Choose Game</a></li>	
			                            <li><a href="#captain" data-toggle="tab">Edit Rewards</a></li>
			                            <li><a href="#description" data-toggle="tab">Launch</a></li>
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
		                            <div class="tab-pane" id="captain" style="display:block!important">
		                                <h4 class="info-text">Setup your game rewards</h4>
		                                <div class="row">											
		                                    <div class="col-sm-3">
												<div id="1st" class="btn btn-warning btn-fill">1st prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
												<div id="2st" class="btn btn-success btn-fill">2nd prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
												<div id="3st" class="btn btn-primary btn-fill">3rd prize<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>
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
													
													<div class="btn btn-fill btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>		
													
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
													
													<div class="btn btn-fill btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>		
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
																<td class="reward-qty" ><input type="number" style="width:40%" /></td>
															</tr>
														</tbody>														
													</table>
													
													<div class="btn btn-fill btn-block add-more"><i class="material-icons">add</i> Add more<div class="ripple-container"><div class="ripple ripple-on ripple-out"></div></div></div>

												</div>
												
												
											</div>
		                                </div>								
		                            </div>
		                            <div class="tab-pane" id="description">
		                                <div class="row">
		                                    <h4 class="info-text"> Drop us a small description.</h4>
		                                    <div class="col-sm-6 col-sm-offset-1">
	                                    		<div class="form-group">
		                                            <label>Room description</label>
		                                            <textarea class="form-control" placeholder="" rows="6"></textarea>
		                                        </div>
		                                    </div>
		                                    <div class="col-sm-4">
		                                    	<div class="form-group">
		                                            <label class="control-label">Example</label>
		                                            <p class="description">"The room really nice name is recognized as being a really awesome room. We use it every sunday when we go fishing and we catch a lot. It has some kind of magic shield around it."</p>
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
											  <div class="checkbox">
												  <label>
													  <input type="checkbox" name="optionsCheckboxes">
												  </label>
												  Subscribe to our newsletter
											  </div>
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
		</div> <!--  big container -->

	</div>
	

<?php include 'components/metaFooter.php' ?>
