var app = angular.module("userauth", ["ui.router","ngFileUpload"]);

app.config(function($stateProvider){
    
    $stateProvider
        .state("home", {
        url: "",
        controller: "logincontroller",
        templateUrl: "views/login.html"
        
    })
        .state("login", {
        url: "/",
        controller: "logincontroller",
        templateUrl: "views/login.html"
    })
        .state("admin", {
        url: "/admin",
        controller: "admincontroller",
        templateUrl: "views/admin.html"        
    })
        .state("labassist", {
        url: "/labassist",
        controller: "labassistcontroller",
        templateUrl: "views/labassist.html"
        
        
    })
      .state("replacement", {
        url: "/replacement",
        controller: "replacementcontroller",
        templateUrl: "views/replacement.html"
    })
      .state("admin_newrequest", {
        url: "/admin_newrequest",
        controller: "admin_newrequestcontroller",
        templateUrl: "views/admin_newrequest.html"
        
    })
       .state("admin_history", {
        url: "/admin_history",
        controller: "admin_historycontroller",
        templateUrl: "views/admin_history.html"
    })
      .state("labassist_history", {
        url: "/labassist_history",
        controller: "labassist_historycontroller",
        templateUrl: "views/labassist_history.html"
        
    })
      .state("view_stock", {
        url: "/view_stock",
        controller: "view_stockcontroller",
        templateUrl: "views/view_stock.html"
    })
       .state("add_stock", {
        url: "/add_stock",
        controller: "add_stockcontroller",
        templateUrl: "views/add_stock.html"        
    }) 
})




