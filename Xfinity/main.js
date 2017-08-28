/*
Author: Himanshi Trivedi
This defines angular application module with required packages.
It also defines application controller function.
*/
var app = angular.module('mainView', ['ngTouch', 'ui.grid', 'ui.grid.autoResize']);

app.controller('mainCtrl', ['$scope','$http', function ($scope, $http) {
    $scope.gridOptions = {        
        rowHeight: 30,
        headerHeight: 30,
        enableColumnMenus:false,
        enableScrollbars:false,
        enableVerticalScrollbar:0    
    };
      //used $http service to get json data from data.json and display on grid
    $http.get('http://localhost:8080/data.json')
        .success(function(data) {
        $scope.gridOptions.data = data;
    });    

}]);
