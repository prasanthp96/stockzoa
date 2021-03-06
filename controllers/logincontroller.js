app.controller("logincontroller", function($scope, $http, $state ){
    
    //variables
    $scope.loginInfo = {
        username: undefined,
        password: undefined
    }
    
    //function
    $scope.loginuser = function() {
        
        var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password
        }
        
    //calling http post for php file
    $http.post("endpoints/login.php", data).success(function(response){
        console.log(response);
        //localStorage.setItem("current_user", JSON.stringify({response}));
        localStorage.setItem("current_user", response);
        if(localStorage.getItem("current_user") == "undefined") {
            localStorage.setItem("isadmin","NULL");
            localStorage.setItem("islabassist","NULL");
            $state.go("login");
        }
        else if(localStorage.getItem("current_user") == "admin"){
            localStorage.setItem("isadmin","TRUE");
            localStorage.setItem("islabassist","FALSE");
            $state.go("admin");
        }
        
        else if(localStorage.getItem("current_user") == "notfound"){
            localStorage.setItem("isadmin","NULL");
            localStorage.setItem("islabassist","NULL");
            $state.go("login");
        }

        else {
            localStorage.setItem("isadmin","FALSE");
            localStorage.setItem("islabassist","TRUE");
            $state.go("labassist");
        }
    }).error(function(error){
        console.error(error);
    });    
        
    };
    
})