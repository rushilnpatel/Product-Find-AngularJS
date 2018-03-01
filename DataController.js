/**
 * Created by sapana on 7/19/2017.
 */
(function () {
    'use strict';
    var app=angular.module('myapp');
    app.controller('DataController',['dataService',DataController]);

    function DataController(dataService) {
        var vm = this;

        dataService.fetchData().success(function (edata) { //call back function
            vm.empl = edata;

        });

    }

})();

/*

(function(){
    'use strict';

    var app = angular.module('myApp');

    app.controller('DataController',['dataService',DataController]);

    function DataController(dataService){
        var vm=this;

        dataService.fetchData().success(function(edata){
            vm.empl = edata;
        });



        /*    $http.get('url').success(function(edata){
         vm.empl=edata;
         })*/