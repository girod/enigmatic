'use strict';

//Global service for global variables
angular.module('sampleApp').factory('Global', function($http){
    return {
        getSessions: function() {
            return $http.get('/isconnected');
        }
    };
});