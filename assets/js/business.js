if (!window.siteConfig) {
	window.siteConfig = {};
};

siteConfig = {
	domain: location.href.substring(0, location.href.lastIndexOf("/")+1), 
	apiPath : {
		
		updateDB : 'controllers/controller.php'		
		
	}	
	
}

if (!window.siteBusiness) {
	window.siteBusiness = {};
};


siteBusiness.checkFBUserStatus = function(userStatus) {
		
	FB.getLoginStatus(function (response) {
		console.log('FB.getLoginStatus callback response', response);
	});

	// auth.authResponseChange event is fired for any authentication related change, such as login, logout or session refresh
	FB.Event.subscribe('auth.authResponseChange', function (response) {
		console.log('auth.authResponseChange callback response: ', response);

		userStatus(response.status);

	});
	
}

siteBusiness.getFBUserInfo = function(userInfo) {
	
	FB.api('/me', {fields: 'name, email'}, function(response) {
		userInfo(response);
	});	
	
}

siteBusiness.loginWithFB = function() {
	
	FB.login(function(response) {
		if (response.authResponse) {
			
			var accessToken = response.authResponse.accessToken;
			
			FB.api('/me', {fields: 'name, first_name, last_name, email, picture'}, function(response) {				
				
				var data = webAPI.xmlHttpRequest.data({
					'facebookId' : response.id,
					'firstName' : response.first_name,
					'lastName' : response.last_name,
					'email' : response.email,
					'picture' : response.picture.data.url,
					'actionType' : 'updateUserInfo'
				});
				
				webAPI.xmlHttpRequest.request(siteConfig.apiPath.updateDB, data, 'POST', function (response) {
									
					console.log(response);
					
					webAPI.utils.pageRedirect('home.php');
					

				}, function (xhr, status) {

					console.log(xhr);
					
				});			
				
			});
			
		} else {
			
			console.log('User cancelled login or did not fully authorize.');
			
		}
	}, {scope: 'email'});
	
}


siteBusiness.updateGameData = function (jsonData, success, error) {
	
	var data = webAPI.xmlHttpRequest.data({		
		'actionType' : 'updateGameData'
	});
	
	webAPI.xmlHttpRequest.request(siteConfig.apiPath.updateDB, data, 'POST', function (response) {
						
		success(response);		

	}, function (xhr, status) {

		 error(xhr, xhr.status);
		
	});
	
}
