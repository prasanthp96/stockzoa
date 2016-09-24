//contains all the controllers for views of the admin



//admin page controller
app.controller("admincontroller", function($scope, $http, $state){
    
     $scope.name = localStorage.getItem('current_user');
    
     $scope.statechange = function(newstate) {
         
         console.log(changeto);
         var changeto = newstate;
         $state.go(changeto);
     }
     
    
})


//controller for admin_newrequest.html
app.controller("admin_newrequestcontroller", function($scope, $http, $state, $window){
    
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
    
    $scope.update = function(id,status) {
        
            var data = {
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
    
    
    $scope.statechange = function() {
        $state.go("admin_history");
    };
    
})


//controller to view past requests by admin
app.controller("admin_historycontroller", function($scope, $http){
    
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
    
    
    $http.get("endpoints/view_stock.php").success(function(data){
        
        $scope.data = data;
        console.log("read successfully");
        console.log($scope.data);
        
    })
    
    .error(function(){
        
        $scope.data = "error in fetching data";
        
    });

    //changing the state to 
    $scope.statechange = function() {
        $state.go("add_stock");
    };

})

    
app.controller("add_stockcontroller", function($scope, $http, $state){
    
    console.log("add_stockcontroller called!");
    
    $scope.add = {
        
        name: undefined,
        quantity: undefined
    }
    
    
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
    
})