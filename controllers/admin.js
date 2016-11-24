//contains all the controllers for views of the admin



//admin page controller
app.controller("admincontroller", function($scope, $http, $state){
    
     $scope.name = localStorage.getItem('current_user');
    
     $scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	 
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
     
    
})


//controller for admin_newrequest.html
app.controller("admin_newrequestcontroller", function($scope, $http, $state, $window){
		
	$scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	
	
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
	 
    //getting the data from database    
    $http.get("endpoints/admin_viewrequest.php" , { params: { statusValue : "new" }   }).success(function(data){
        $scope.data = data;
        var length = data.length;
        if( length > 0){
            $scope.displaytable = true;
        } else {
            $scope.displaytable = false;
        }
                
        console.log("Success");
        console.log($scope.data);   
    })
    .error(function() {
        $scope.data = "error in fetching data";
    });
    
    $scope.update = function(name,quantity,id,status) {
        
            var data = {
				update_name: name,
				update_quantity: quantity,
                update_id: id,
                update_status : status
            }
            
            //console.log(data);
            //calling update.php for updating the database
            $http.post("endpoints/update.php",data ).success(function(response){
                console.log(response);
            })
            
            //reloading the page after updating the element
            $window.location.reload();
        
    };
    
})


//controller to view past requests by admin
app.controller("admin_historycontroller", function($scope,$state, $http){
    
	$scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
		 
     }
	
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
	
	$http.get("endpoints/admin_viewrequest.php" , { params: { statusValue : "all"  } }).success(function(data){
        
        $scope.data = data;
        console.log("Success");
        console.log($scope.data);
        
    })
    
    .error(function(){
       $scope.data = "error in fetching data"; 
    });
       
})



//controller to view the current stock 
app.controller("view_stockcontroller", function($scope, $http, $state){
    
     $scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
	
	
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
	
    $http.get("endpoints/view_stock.php").success(function(data){
        
        $scope.data = data;
        console.log("read successfully");
        console.log($scope.data);
        
    })
    
    .error(function(){
        
        $scope.data = "error in fetching data";
        
    });


})

/*
app.controller("add_stockcontroller", ['$scope','Upload', function($scope, $http, $state, Upload) {
    
    console.log("add_stockcontroller called!");
    
	$scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }

	
	 $scope.logout = function() {
		 
		 localStorage.clear();
		 $state.go("home");
		 
	 }
	
    $scope.add = {
        
        name: undefined,
        quantity: undefined
    }
    
    
    //adding stock using form
    $scope.add_stock = function() {
        
        var data = {
            
            name: $scope.add.name,
            quantity: $scope.add.quantity
            
        }
        
        $http.post("endpoints/add_stock_single.php",data).success(function(response){
            
            console.log(response);
            $state.go("view_stock");
            
            
        }).error(function(error){
            console.error(error);
        });
        
        
    };
    
    
    //importing the stock by using excel sheet
    $scope.add_file = function() {
        
        if($scope.form.file.$valid && $scope.file) {   
            $scope.upload($scope.file);
        }
    };
                                       
    var upload = Upload.upload({
                                       
        url: './endpoints/add_stock_file.php',
                            
        data: {key: file}                                              
    })
                                       
        upload.then(function(resp){
                                       
                                       
                                       
    });
    
}])
*/


//adding new controller using file upload


app.controller("add_stockcontroller", function($scope, $http, $state, fileUploadService ) {
               
    console.log("add_stockcontroller called!");
    
    $scope.add = {
        
        name: undefined,
        quantity: undefined
    }
    
    
    //adding stock using form
    $scope.add_stock = function() {
        
        var data = {
            
            name: $scope.add.name,
            quantity: $scope.add.quantity
            
        }
        
        $http.post("endpoints/add_stock_single.php",data).success(function(response){
            
            console.log(response);
            $state.go("view_stock");
            
            
        }).error(function(error){
            console.error(error);
        });
        
        
    };
    
        $scope.uploadFile = function () {
            
            console.log("calling file upload function");
            var file = $scope.myFile;
            var uploadUrl = "./endpoints/add_stock_file.php", //Url of web service
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

            promise.then(function (response) {
                $scope.serverResponse = response;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
        };

               
})