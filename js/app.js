var myApp= angular.module("myApp",[]);

myApp.controller("myController", function($scope){

	$scope.newUser={};
	$scope.users=[
		{userName:"Riyad", fullName:"Md. Mahmudullah Riyadh", email:"riyad@gmail.com"},
		{userName:"Riyad", fullName:"Md. Mahmudullah Riyadh", email:"riyad@gmail.com"},
		{userName:"Riyad", fullName:"Md. Mahmudullah Riyadh", email:"riyad@gmail.com"}
	 ];

	 $scope.message="";
	 $scope.saveUser=function(){

	 	console.log($scope.newUser);
	 	$scope.users.push($scope.newUser);
	 	$scope.newUser={};
	 	$scope.message="Successfully inserted user";
	 };

	 $scope.selectUser= function(user)
	 {
	 	console.log(user);
	 	$scope.clickedUser=user;

	 };

	 $scope.updateUser=function(){

	 	$scope.message="Successfully updated user";
	 };

	 $scope.deleteUser= function()
	 {
	 	$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
	 	$scope.message="Successfully deleted user";
	 };

	 $scope.alertMes=function()
	 {
	 	$scope.message="";
	 }
});