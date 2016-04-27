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
 /** 
 * Icons Ionic http://www.tutorialspoint.com/ionic/ionic_icons.htm
 *	ion-ios-telephone
 *	ion-home
 *	ion-wifi
 *	ion-card
 **/
.controller('HomeCtrl', function($scope) {
	$scope.title = 'Welcome';
	$scope.features = [
						{id: 1, title: 'refresh', ico:'ion-refresh'},
						{id: 2, title: 'localize', ico:'ion-location'},//ion-navigate
						{id: 3, title: 'status', ico:'ion-flash'},
						{id: 4, title: 'arm', ico:'ion-locked', ico2:'ion-unlocked'},
						{id: 5, title: 'lock', ico: 'ion-key'},//ion-minus-circled
						{id: 6, title: 'audio', ico:'ion-mic-a'},//ion-headphone
						{id: 7, title: 'mode', ico:'ion-email', ico2: 'ion-stats-bars'},
						{id: 8, title: 'config', ico:'ion-gear-a'},//ion-wrench, ion-settings, ion-gear-a, ion-gear-b
						{id: 9, title: 'help', ico:'ion-help-circled'}
						
					  ]
})

.controller('FeatureCtrl', function($scope, $stateParams) {
	//get service for id feature
	$scope.id = $stateParams.featureId;
})

.controller('ParamVeiculolistsCtrl',['$ionicPlatform', function($scope, $cordovaSms, $ionicPlatform) {
	$scope.paramveiculolists = [
		{ placa: 'JKH9580',  modelo:'I/GM Classic Life', ano: '2006/2007' , cor:'Prata', renavan:'00893427349', chassi: '8AGSA19907R102453', foto:'corsa.jpg', id: 1 }
	]
	$scope.sms = [{ number:'556186075892', message:'Teste SMS' }]
    console.log('sms ');
	$ionicPlatform.ready(function (){
		  console.log('sms init');
		  
		  var options = {
			  replaceLineBreaks: false, // true to replace \n by a new line, false by default
			  android: {
				intent: 'INTENT' // send SMS with the native android SMS messaging
				  //intent: '' // send SMS without open any other app
				  //intent: 'INTENT' // send SMS inside a default SMS app
			  }
			};
		  
		  $scope.sendSMS = function() {
		  console.log('sms send click');
		  $cordovaSms
			.send($scope.sms[0].number, $scope.sms[0].message, options)
			.then(function() {
			  alert('Success');
			  // Success! SMS was sent
			   console.log('Success');
			}, function(error) {
			  alert('Error');
			  // An error occurred
			  console.log('Error');
			});
		  }
		  
	});
	
    
 
    
	
}])

.controller('ParamModuloVeiculolistsCtrl', function($scope) {
	$scope.parammodulolists = [{modelo: 'tk103B', imei: '85697855', telefone: '556186000012', operadora: 'Claro'}]
})

.controller('PrefUsuariolistsCtrl', function($scope) {
})

.controller('PlaylistCtrl', function($scope) {
})

.controller('ComandoVeiculolistsCtrl', function($scope, $ionicPopup, $ionicLoading, $timeout) {
	var i = 0;
	
	$scope.comandoveiculolists = [
	{ title: 'Sirene silenciosa/Ativar',  comando:'silent+senha', id: i++ },
	{ title: 'Sirene silenciosa/Inativar',  comando:'disarm+senha', id: i++ },
	{ title: 'Posição SMS/Visualizar',  comando:'call number of module track', id: i++ },
	{ title: 'Áudio/Ativar',  comando:'monitor+senha', id: i++ },
	{ title: 'Áudio/Inativar',  comando:'tracker+senha', id: i++ },
	{ title: 'Corta Corrente/Ativar ',  comando:'stop+senha', id: i++ },
	{ title: 'Corta Corrente/Inativar',  comando:'resume+senha', id: i++ },
	{ title: 'Alarme/Ativar',  comando:'arm+senha', id: i++},
	{ title: 'Alarme/Inativar',  comando:'disarm+senha', id: i++},
	{ title: 'Pânico/Ativar',  comando:'press button panic', id: i++},
	{ title: 'Pânico/Desativar',  comando:'help+_+me+_+ok+senha', id: i++}
	];
	
	$scope.checkAllComandoList = function(){
		angular.forEach($scope.comandoveiculolists, function(value, key){
			//toogle list command			
			if($scope.comandoveiculolists[key].checked){
			   $scope.comandoveiculolists[key].checked = !$scope.comandoveiculolists[key].checked;
			}else{
				$scope.comandoveiculolists[key].checked = true;
			}
		});
	};
	

	
})

.controller('ComandolistsCtrl', function($scope, $ionicPopup, $ionicLoading, $timeout) {
	var i = 0;
  $scope.comandolists = [
    { title: 'Senha/Adicionar', comando:'begin+senha', id: i++ },
	{ title: 'Senha/Alterar', comando:'password+senhaatual+_+novasenha', id: i++ },
    { title: 'Número Telefone/Adicionar', comando:'admin+senha+_+telefone', id: i++ },
	{ title: 'Número Telefone/Remover', comando:'noadmin+senha+_+telefone', id: i++ },
	{ title: 'Autorizar Número Telefone', comando:'call number of module track 10x', id: i++ },
	{ title: 'Intervalo por Tempo x quantidade/Ativar',comando:'fix030s005n',  id: i++ },
	{ title: 'Intervalo por Tempo/Ativar', comando:'fix030s***n',  id: i++ },
	{ title: 'Intervalo por Tempo x quantidade/Inativar', comando:'nofix+senha',  id: i++ },
	{ title: 'Intervalo por Distância/Ativar', comando:'distance+senha+_+0100',  id: i++ },
	{ title: 'Intervalo por Angulo/Ativar', comando:'angle+senha+_+045', id: i++ },
	{ title: 'Bateria Baixa/Ativar', comando:'lowbattery+senha+_+on', id: i++ },
	{ title: 'Bateria Baixa/Inativar', comando:'lowbattery+senha+_+off',  id: i++ },
	{ title: 'GPS/Ativar',  comando:'nosuppress+senha', id: i++ },
	{ title: 'GPS/Inativar',  comando:'suppress+senha', id: i++ },
	{ title: 'Bateria Veículo Desconectada/Ativar',  comando:'extpower+senha+_+on', id: i++ },
	{ title: 'Bateria Veículo Desconectada/Inativar',  comando:'extpower+senha+_+off', id: i++ },
	{ title: 'GPS Inoperante/Ativar',  comando:'gpssignal+senha+_+on', id: i++ },
	{ title: 'GPS Inoperante/Inativar',  comando:'gpssignal+senha+_+off', id: i++ },
	{ title: 'Saldo SIM Chip/Visualizar',  comando:'balance+senha+_+telefone+code', id: i++ },
	{ title: 'Velocidade Máxima/Ativar',  comando:'speed+senha+_+080', id: i++ },
	{ title: 'Velocidade Máxima/Inativar',  comando:'nospeed+senha', id: i++ },
	{ title: 'Ignição Ligada - Pós chave/Ativar',  comando:'ACC+senha', id: i++ },
	{ title: 'Ignição Ligada - Pós chave/Inativar',  comando:'noACC+senha', id: i++ },
	{ title: 'Número IMEI/Vizualizar',  comando:'imei+senha', id: i++ },
	{ title: 'Corta Corrente Imediato/Ativar',  comando:'quicksatop+senha', id: i++ },
	{ title: 'Corta Corrente Imediato/Inativar',  comando:'noquicksatop+senha', id: i++ },
	{ title: 'APN IP/Ativar',  comando:'adminip+senha+_+ip+_+porta', id: i++ },
	{ title: 'APN Usuário-Senha/Ativar',  comando:'up+senha+_+usuarioApn+_+senhaApn', id: i++ },
	{ title: 'Min Tráfego GPRS/Ativar',  comando:'less+gprs+senha+on', id: i++ },
	{ title: 'Min Tráfego GPRS/Inativar',  comando:'less+gprs+senha+off', id: i++ },
	{ title: 'Min Consumo Bateria/Ativar',  comando:'sleep+senha+_+on', id: i++ },
	{ title: 'Min Consumo Bateria/Inativar',  comando:'sleep+senha+_+off', id: i++ },
	{ title: 'GPRS/Ativar',  comando:'GPRS+senha', id: i++ },
	{ title: 'SMS/Ativar',  comando:'SMS+senha', id: i++ },
	{ title: 'Check Status/Visualizar',  comando:'check+senha', id: i++ },
	{ title: 'Time Zone/Ativar',  comando:'time+_+zone+senha+_+UTC', id: i++ }
	
  ];
  
	$scope.checkAllComandoList = function(){
		angular.forEach($scope.comandolists, function(value, key){
			//toogle list command			
			if($scope.comandolists[key].checked){
			   $scope.comandolists[key].checked = !$scope.comandolists[key].checked;
			}else{
				$scope.comandolists[key].checked = true;
			}
		});
	};
  
	$scope.showConfirmSave = function() {
		
		angular.forEach($scope.comandolists, function(value, key){
				$scope.comandolists[key].sended = false;
		});
		
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
				  console.log('Send commands successfully');
				  
				  var timeoutVal = $scope.comandolists.length+'000';
				  
				  $ionicLoading.show({ templateUrl: 'templates/sending-comandolist.html', scope: $scope});

				  $timeout(function() {
				    angular.forEach($scope.comandolists, function(value, key){
						if(value.checked)
							$scope.comandolists[key].sended = true;
				    });
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



