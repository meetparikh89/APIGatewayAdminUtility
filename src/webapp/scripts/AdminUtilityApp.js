angular.module('AdminUtilityApp', ['ngRoute'])

.controller('AdminLoginController',['$scope', '$location',
    function($scope,$location) {
       /* window.alert("Controller Called :)");
        $scope.submitForm = function() {
            window.alert("Login successfully");
            $location.path('#/views/home');
        };
        $scope.resetLogin() = function(){
            $scope.loginUserNameError = "";
            $scope.loginPasswordError = "";
            $scope.loginEnvironmentError = "";
        };*/

    }])

/*.config(['$routeProvider',
        function($routeProvider) {
                  $routeProvider
                    .when('/', {
                        controller: AdminLoginController,
                        templateUrl: 'views/subindex.html'
                    })
                    .when('/home', {
                        controller: AdminLoginController,
                        templateUrl: 'views/home.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
                  }
      ])*/




