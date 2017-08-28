var app = angular.module('gridView', ['ngTouch', 'ui.grid', 'ui.grid.autoResize']);

app.controller('gridFormatCtrl', ['$scope','$http', function ($scope, $http) {
    $scope.gridOptions1 = {        
        rowHeight: 30,
        headerHeight: 30, 
        enableColumnMenus:false,
        enableScrollbars:false          
    };
    
   $http.get('http://localhost:8080/data.json')
     .success(function(data) {
        $scope.jsonData = data;

        var nameArray = new Array();
        for (var i=0; i<$scope.jsonData.length; i++) {
           if (nameArray.indexOf($scope.jsonData[i].name) == -1){
             nameArray.push($scope.jsonData[i].name);
            }
        }

        var categoryArray = new Array();
        var categoryJson = {};
        for (var i=0; i<nameArray.length; i++){
            categoryJson = {};
            categoryJson.name = nameArray[i];
            categoryJson.C1 = "-";
            categoryJson.C2 = "-";  
            categoryJson.C3 = "-";
            for(var j=0; j<$scope.jsonData.length; j++){
                if (nameArray[i] == $scope.jsonData[j].name){
                    switch ($scope.jsonData[j].category){
                        case "C1":
                                categoryJson.C1 = $scope.jsonData[j].amount;
                                break;
                        case "C2":
                                categoryJson.C2 = $scope.jsonData[j].amount;
                                break;
                        case "C3":
                                categoryJson.C3 = $scope.jsonData[j].amount;
                                break;
                    }
                }                
            }            
            categoryArray.push(categoryJson);           
        }
        $scope.gridOptions1.data = categoryArray;

  });  

 }]);