/* The following is used to create users */

angular.module('userServices', [])
.factory('oneUser', function($http){
    userFactory = {};
    /* Below is the declaration of a custom application to be used
        throughout my whole webapp */
    userFactory.create = function(registrationData) {
        // console.log('Test userServices.... OK');
        return $http.post('api/users', registrationData);
    }
    return userFactory;

});
