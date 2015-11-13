var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController(#scope) {

  $scope.author = {
    'name'    : 'David Ar',
    'title'   : 'Founder',
    'company' : 'Veecho' 
  }
});