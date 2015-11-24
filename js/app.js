// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
myApp.config(function($stateProvider) {
$stateProvider
.state('home', {
url:'/',
templateUrl: 'templates/home.html',
controller: 'HomeController',
})

// Configure states for "interests" and "aboutme"
.state('aboutme', {
url:'/aboutme',
templateUrl: 'templates/aboutme.html',
controller: 'AboutmeController',
})

.state('interests', {
url:'/interests',
templateUrl: 'templates/interests.html',
controller: 'InterestsController',
})

})

// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope){
$scope.number = 27;
})

// About page controller: define $scope.about as a string
myApp.controller('AboutmeController', function($scope){
$scope.about = "About Me";
})

// Content controller: define $scope.url as an image
myApp.controller('InterestsController', function($scope){
$scope.url = '';
})