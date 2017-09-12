<?php
	
	
?>	

	<!-- Init Facebook JS SDK -->
	<script>
		(function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
	
	<!--   Core JS Files   -->	
	<script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/webAPI.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/business.js"></script>

	
	<!-- Login Hanlder -->
	<script>
	
	webAPI.social.initFBComponents(function(FB) {

        siteBusiness.checkFBUserStatus(function(userStatus) {

            // Here we specify what we do with the response anytime this event occurs.
            if (userStatus === 'connected') {           

                var userInfo = siteBusiness.getFBUserInfo(function(data) {

                    console.log(data.email);

                });
                
            } else if (userStatus === 'not_authorized') {
                console.log('Logged in with facebook but not authorized your app');
            } else {
                console.log('Not login facebook');
            }
        });

        $('.omb_btn-facebook').on('click', function() {

            siteBusiness.loginWithFB();
            
        });

    });
	
	</script>
	<!-- //Login Hanlder -->
	
	<!--  Plugin for the Wizard -->
	<script src="assets/js/jquery.bootstrap.js"></script>
	<script src="assets/js/material-bootstrap-wizard.js"></script>
	
	<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
	<script src="assets/js/jquery.validate.min.js"></script>
	
	<!-- Custom Behaviors -->
	<script src="assets/js/layout.js"></script>
	
</body>

	
</html>
