(function(){
    'use strict';
    var app = angular.module('myapp');

    app.service("dataService",['$http',dataService]);

    function dataService($http){

        function fetchData(){
            return $http.get('data.json')
        }

        return{
            fetchData:fetchData
        }

    }

})();