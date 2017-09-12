if (!window.siteComp) {
	window.siteComp = {};
};


siteComp.wizard = {
	
	lottery : {
		
		globalFunctions : {
		
			addUserPhone : function () {
				
				var phoneNumber = $('#launch .phone-number').val();
				var rowDataHtml = '<tr><td><i class="material-icons remove">cancel</i></td><td class="user-phone" ><input type="text" value="'+ phoneNumber +'" style="width:95%" /></td><td class="user-fullname" ><input type="text" style="width:95%" placeholder="Enter Full Name" /></td></tr>';
				
				$('#list-users tbody').append(rowDataHtml);
				
				$('#launch .phone-number').val('');
				$('#launch .phone-number').focus();
				
				siteComp.wizard.lottery.unbindEvents();
				siteComp.wizard.lottery.bindEvents();
				
			},
			
			updateGameData : function (jsonData) {
				
				siteBusiness.updateGameData(jsonData, function(response) {
					
					
					
				}, function(xhr, status) {
					
					
				});
			}
		},
		
		
		bindEvents : function() {
			
			// List prizes click event
			$('.list-prizes .btn').bind('click', function() {
				
				var tableId = $(this).attr('id');
				
				$('.list-prizes .btn').addClass('btn-inactive');
				$(this).removeClass('btn-inactive');
				
				$('#reward.tab-pane .table-responsive').removeClass('show');
				$('#reward.tab-pane .table-responsive').addClass('hide');
				$('#reward.tab-pane .table-responsive[id="'+ tableId +'"]').addClass('show');
				
			});
			
			// Add more row on reward grid
			$('#reward .add-more').bind('click', function() {
				
				var rowDataHtml = '<tr><td><i class="material-icons remove">cancel</i></td><td class="reward-name"><input type="text" style="width:80%"></td><td class="reward-description"><input type="text" style="width:80%"></td><td class="reward-image"><i class="material-icons">add_a_photo</i></td><td class="reward-qty"><input type="number" value="1" style="width:40%"></td></tr>';
				
				$(this).parent().find('.table tbody').append(rowDataHtml);
				
				siteComp.wizard.lottery.unbindEvents();
				siteComp.wizard.lottery.bindEvents();
				
			});		
			
			// Add row click events	
			
			// Remove Icon
			$('.table-responsive .remove').bind('click', function() {
				
				$(this).parent().parent().remove();
				
			});
			
			// Photo Icon
			$('.table-responsive .reward-image').bind('click', function() {
				
				
			});
			
			// Add user phone
			$('#launch .phone-number').bind('keypress', function(e) {
				
				if(e.which == 13) {
					
					siteComp.wizard.lottery.globalFunctions.addUserPhone();
					
				}
				
			});
			
			$('#launch .tab-pane .add-user').bind('click', function() {
				
				siteComp.wizard.lottery.globalFunctions.addUserPhone();
				
			});
			
			// Complete wizard
			$('input[name="finish"]').bind('click', function() {
				siteComp.wizard.lottery.globalFunctions.updateGameData({'name':'a'});
			});
			
		},
		
		unbindEvents : function() {
			
			$('#reward .add-more').unbind('click');	
			$('.table-responsive .remove').unbind('click');	
			$('.table-responsive .reward-image').unbind('click');
			$('#launch .phone-number').unbind('keypress');
			$('.tab-pane .add-user').unbind('click');
			
		}
	
	}
		
};


$(document).ready(function() {	
	
	siteComp.wizard.lottery.bindEvents();
	
	// Set active menu inside the sidebar
	var activeMenu = $('.nav').attr('active-menu');
	
	$('.nav li').each(function() {
		
		var currentMenu = $(this).find('a').attr('href');
		
		if(currentMenu.indexOf(activeMenu) > -1) {
			
			$(this).addClass('active');
			
		}
		
	});
	
});