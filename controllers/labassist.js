//contains all the controllers for the lab assistant's functionality

app.controller("labassistcontroller", function($scope, $http, $state){
    
    $scope.name = localStorage.getItem('current_user');
    console.log($scope.name);
    
	 $scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	 
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
     
    /*$scope.changestate1 = function() {
        //console.log("changestate1 called");
		
		
        $state.go("replacement");
        
    };
    
        $scope.changestate2 = function() {
       // console.log("changestate2 called");
        $state.go("labassist_history");
    }*/
    

})


app.controller("replacementcontroller", function($scope, $http, $state){

	$scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	 
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }

    
    //getting the lab information
    $scope.username = localStorage.getItem('current_user');
    
    console.log($scope.username);
    
    //initialisation
    $scope.replacement = {
        
        devicename: undefined,
        quantity: undefined,
        description: undefined
        
    }
    
    //function to call the php script and passing the arguments
    $scope.request_replacement = function() {
        
        var data = {
            
        username: $scope.username,
        devicename: $scope.replacement.devicename,
        quantity: $scope.replacement.quantity,
        description: $scope.replacement.description
    
         }
        
        
        $http.post("endpoints/replacement.php",
        data).success(function(response){
            
            console.log(response);
            $state.go("labassist");
            
            
        }).error(function(error){
            console.error(error);
            
        });  
             
    };
    
})


app.controller("labassist_historycontroller", function ($scope,$state, $http){
    
    //console.log("Inside the controller");
    
    $scope.user = localStorage.getItem('current_user');
	
		 $scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	 
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }

    
    //console.log($scope.user);
    
    $http.get("endpoints/labassist_viewrequest.php", {
        params: { current_user : $scope.user   }      
    
    }).success(function(data){
        
        $scope.data = data;
        console.log("Success");
        console.log($scope.data);
        
    })
    
    .error(function(){
        
        $scope.data = "error in fetching data";
        
    })
    
    
})