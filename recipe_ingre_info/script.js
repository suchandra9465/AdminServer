(function() {

    angular.module('app4').controller('planController', planController);
    
    planController.$inject = ['$scope', '$http'];
    
    
    function planController($scope, $http) {
    
      //Buttons Settings
      $scope.submit = true;
      $scope.update = false;
      $scope.cancel = false;
      $scope.userid = true;
    
      //Getting Users List
      //$http GET function
      $http({
        method: 'GET',
        url: 'http://localhost:80/pRESTige-master/api/recipe_ingreinfo'
    
      }).then(function successCallback(response) {
    
        $scope.users = response.data;
    
      }, function errorCallback(response) {
    
        alert("Error. Try Again!");
    
      });
    
    
      //Create New User
      $scope.createUser = function () {
    
        //$http POST function
        $http({
    
          method: 'POST',
          url: 'http://localhost:80/pRESTige-master/api/recipe_ingreinfo',
          data: $scope.user
    
        }).then(function successCallback(response) {
    
          $scope.users.push(response.data);
          alert("Plan has created Successfully")
    
        }, function errorCallback(response) {
    
          alert("Error. while created plan Try Again!");
    
        });
    
      };
    
    
      //Update User
      $scope.updateUser = function () {
    
        //$http PUT function
        $http({
    
          method: 'PUT',
          url: 'http://localhost:80/pRESTige-master/api/recipe_ingreinfo/' + $scope.user.plan_code,
          data: $scope.user
    
        }).then(function successCallback(response) {
    
          alert("Plan has updated Successfully")
    
        }, function errorCallback(response) {
    
          alert("Error. while updating plan Try Again!");
    
        });
    
      };
    
    
      //Delete User
      $scope.deleteUser = function(user) {
    
        //$http DELETE function
        $http({
    
          method: 'DELETE',
          url: 'http://localhost:80/pRESTige-master/api/recipe_ingreinfo/' + user.plan_code
    
        }).then(function successCallback(response) {
    
          alert("Plan has deleted Successfully");
          var index = $scope.users.indexOf(user);
          $scope.users.splice(index, 1);
    
        }, function errorCallback(response) {
    
          alert("Error. while deleting plan Try Again!");
    
        });
    
      }
    
      //Set $scope on Edit button click
      $scope.editUser = function (user) {
    
        $scope.user = user;
        $scope.submit = false;
        $scope.update = true;
        $scope.cancel = true;
        $scope.userid = false;
    
      };
    
    
      //cancel Uodate
      $scope.cancelUpdate = function () {
        $scope.user = null;
        $scope.submit = true;
        $scope.update = false;
        $scope.cancel = false;
        $scope.userid = true;
      };
    
    }
    })();
    