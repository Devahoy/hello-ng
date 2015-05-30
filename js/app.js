var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {

	$scope.message = "Hello AngularJS";
	$scope.name = '';


	$scope.pirates = [
    {
      "id": 1,
      "username": "goldroger",
      "name": "Gol D. Roger",
      "position": "Pirate King"
    },
    {
      "id": 2,
      "username": "mrzero",
      "name": "Sir Crocodile",
      "position": "Former-Shichibukai"
    },
    {
      "id": 3,
      "username": "luffy",
      "name": "Monkey D. Luffy",
      "position": "Captain"
    },
    {
      "id": 4,
      "username": "law",
      "name": "Trafalgar D. Water Law",
      "position": "Shichibukai"
    },
    {
      "id": 5,
      "username": "shanks",
      "name": "'Red-Haired' Shanks",
      "position": "The 4 Emperors"
    }
	];

});