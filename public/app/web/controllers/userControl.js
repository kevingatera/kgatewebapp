angular.module('userControllers', ['userServices'])
.controller('registrationController', function($http, $location, $timeout, oneUser){ // Pass in '$http'
    var app = this;
    this.registerUser = function(registrationData){
        console.log(registrationData);
        app.errorMessage = false; // toggle for the message div
        app.loading = true; // toggle for the loading icon
        console.log('Registration Form submitted ... OK');
        // Always add 'this' i orger to successfully work outside this function
        // console.log(this.registrationData);

        /* The following is used to connect to the backend using ""$http"
        the reference is "router.post('/users', function(req, res)"
        which can be found in "~/serverapp/routes/api.js */
        // $http.post('api/users', this.registrationData)
        console.log(registrationData);
        oneUser.create(app.registrationData)
            // Execute the code below to do something with the data obtained from server responde
            .then(function(data){
                // console.log(data.data.success);
                // console.log(data.data.message);
                if(data.data.success === true){
                    // Create a success message then redirect to homepage
                    app.successMessage = data.data.message + '... Redirecting';
                    // Then redirect the user to the homepage with a 2sec timeout
                    $timeout(function(){
                        $location.path('/');
                    }, 2000);
                } else {
                    // Create error message
                    app.errorMessage = data.data.message;
                }
                app.loading = false;
            });
    }
})

// Facebook login mechanism
.controller('facebookController', function($routeParams, Auth, $location, $window){
    var app = this; // declare app as we will use it
    console.log('Testing facebook controller.... OK');
    if($window.location.pathname === '/fberror'){
        // return error variable because login failed
        app.errorMessage = 'Facebook email NOT found in database';
    } else {
        /* The following will use the Auth.facebook function to login the user after */
        console.log('The token: ' + $routeParams.token)
        Auth.facebook($routeParams.token);
        // Redirect the user to the home page
        $location.path('/');
    }
})

// Twitter Login mechanism
.controller('twitterController', function($routeParams, Auth, $location, $window){
    var app = this; // declare app as we will use it
    console.log('Testing twitterController.... OK');
    if($window.location.pathname === '/twittererror'){
        // return error variable because login failed
        app.errorMessage = 'Twitter email NOT found in database';
    } else {
        /* The following will use the Auth.facebook function to login the user after */
        console.log('The token: ' + $routeParams.token)
        Auth.twitter($routeParams.token);
        // Redirect the user to the home page
        $location.path('/');
    }
})

// Google Login mechanism
.controller('googleController', function($routeParams, Auth, $location, $window){
    var app = this; // declare app as we will use it
    console.log('Testing googleController.... OK');
    if($window.location.pathname === '/googleerror'){
        // return error variable because login failed
        app.errorMessage = 'Google email NOT found in database';
    } else {
        /* The following will use the Auth.facebook function to login the user after */
        console.log('The token: ' + $routeParams.token)
        Auth.twitter($routeParams.token);
        // Redirect the user to the home page
        $location.path('/');
    }
})

/*
    .config(function(){
        console.log('Testing USERCONTROL');
    });
*/