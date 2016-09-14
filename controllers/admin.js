//contains all the controllers for views of the admin



//admin page controller
app.controller("admincontroller", function($scope, $http, $state){
    
     $scope.name = localStorage.getItem('current_user');
    
     $scope.statechange = function() {
         $state.go("admin_newrequest");
     }
     
    
})


//controller for admin_newrequest.html
app.controller("admin_newrequestcontroller", function($scope, $http, $state){
    
    //getting the data from database    
    $http.get("endpoints/admin_viewrequest.php" , { params: { statusValue : "new" }   }).success(function(data){
        $scope.data = data;
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
            
            //getting the new contents after updating
            $http.get("endpoints/admin_viewrequest.php" , { params: { statusValue : "new" }   }).success(function(data){
                $scope.data = data;
                var length = data.length;
                //setting a flag value (check in the admin_newrequest.html)
                if( length > 0){
                    $scope.displaytable = 1;
                } else {
                    $scope.displaytable = 0;
                }
                
                console.log("Success");
                console.log($scope.data);   
            })
            .error(function() {
                $scope.data = "error in fetching data";
            });
    };
    
    
    $scope.statechange = function() {
        $state.go("admin_history");
    }
    
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


    
