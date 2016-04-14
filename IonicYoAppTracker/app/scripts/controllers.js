angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope) {
})

.controller('ComandolistsCtrl', function($scope, $ionicPopup, $ionicLoading, $timeout) {
  $scope.comandolists = [
    { title: 'Attr Password', sended: false, checked: true, id: 1 },
	{ title: 'Num Master', sended: false, checked: true, id: 2 },
    { title: 'Event ACC', sended: false, checked: true, id: 3 },
	{ title: 'Event Move', sended: false, checked: false, id: 4 },
	{ title: 'Event SOS', sended: false, checked: true, id: 5 },
	{ title: 'Event Low Batery', sended: false, checked: true, id: 6 },
	{ title: 'Event Low Fuel', sended: false, checked: true, id: 7 }
  ];
  
	$scope.showConfirmSave = function() {
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Question',
		 template: 'Save the commands selected in the list?',
		 scope: $scope,
		 buttons: [
			{ text: 'No' },
			{ text: '<b>Yes</b>',
			  type: 'button-positive',
			  onTap: function(res){
				  console.log('Saved commands successfully');
				  
					var confirmSaved = $ionicPopup.alert({
								  title: 'Success',
								  template: 'Saved commands successfully',
								   buttons: [
										{ text: '<b>OK</b>',
										  type: 'button-positive'
										}
								   ]
					});
							  
					confirmSaved.then(function(res) {
						if(res){
							e.preventDefault();
						}else{
							console.log('D\'not Saveded commands');
						}
					});
				  
			  }
			}
		]
	   });
	 };
	 
	 $scope.showConfirmSend = function() {
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Question',
		 template: 'Send the commands now?',
		 scope: $scope,
		 buttons: [
			{ text: 'No' },
			{ text: '<b>Yes</b>',
			  type: 'button-positive',
			  onTap: function(res){
				  console.log('Saved commands successfully');
				  
				  var timeoutVal = $scope.comandolists.length+'000';
				  
				  $ionicLoading.show({ templateUrl: 'templates/sending-comandolist.html', scope: $scope});
				  
				  $timeout(function() {
					  //close the popup after comandolists.length seconds for some reason
					  $ionicLoading.hide(1000);
					  
					  var confirmSend = $ionicPopup.alert({
								  title: 'Success',
								  template: 'Sended commands successfully!',
								  buttons: [
										{ text: '<b>OK</b>',
										  type: 'button-positive'
										}
								   ]
				      });
					  
					  confirmSend.then(function(res) {
						if(res){
							
							e.preventDefault();
						}else{
							console.log('D\'not Sended commands');
						}
					  });
					  
				  }, timeoutVal);
				  
			  }
			}
		]
	   });
	 };
});



