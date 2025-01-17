
(function () {

  angular.module('app4').controller('groupController', groupController);

  groupController.$inject = ['$scope', '$http'];
  function groupController($scope, $http) {

    //Buttons Settings
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;

    //Getting Users List
    //$http GET function
    $http({
      method: 'GET',
      url: 'http://localhost:80/pRESTige-master/api/cus_groups'

    }).then(function successCallback(response) {

      $scope.users = response.data;

    }, function errorCallback(response) {

      alert("Error. Please Try Again!");

    });


    //Create New User
    $scope.createUser = function () {

      //$http POST function
      $http({

        method: 'POST',
        url: 'http://localhost:80/pRESTige-master/api/cus_groups',
        data: $scope.user

      }).then(function successCallback(response) {

        $scope.users.push(response.data);
        alert("Group has been created Successfully")

      }, function errorCallback(response) {

        alert("Error. while created group. Please Try Again!");

      });

    };


    //Update User
    $scope.updateUser = function () {

      //$http PUT function
      $http({

        method: 'PUT',
        url: 'http://localhost:80/pRESTige-master/api/cus_groups/' + $scope.user.group_id,
        data: $scope.user

      }).then(function successCallback(response) {

        alert("Group has updated Successfully")

      }, function errorCallback(response) {

        alert("Error. while updating group. Please Try Again!");

      });

    };


    //Delete User
    $scope.deleteUser = function (user) {

      //$http DELETE function
      $http({

        method: 'DELETE',
        url: 'http://localhost:80/pRESTige-master/api/cus_groups/' + user.group_id

      }).then(function successCallback(response) {

        alert("Group has been deleted Successfully");
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);

      }, function errorCallback(response) {

        alert("Error. while deleting group. Please Try Again!");

      });

    };

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

    //////////////////Shortcut methods for $http//////

    //$http GET
    //$http.get('https://jsonplaceholder.typicode.com/users', function successCallback(response) {
    //
    //  alert("User has updated Successfully")
    //
    //}, function errorCallback(response) {
    //
    //  alert("Error. while updating user Try Again!");
    //
    //});


    //$http POST
    //$http.post('https://jsonplaceholder.typicode.com/users', $scope.user, function successCallback(response) {
    //
    //  $scope.users.push(response.data);
    //alert("User has created Successfully")
    //
    //}, function errorCallback(response) {
    //
    //  alert("Error. while created user Try Again!");
    //
    //});


    //$http PUT
    //$htp.put('https://jsonplaceholder.typicode.com/users/' + $scope.user.id, $scope.user, function successCallback(response) {
    //
    //  alert("User has updated Successfully")
    //
    //}, function errorCallback(response) {
    //
    //  alert("Error. while updating user Try Again!");
    //
    //});


    //$http DELETE
    //$http.delete('https://jsonplaceholder.typicode.com/users/' + user.id, function successCallback(response) {
    //
    //  alert("User has deleted Successfully");
    //var index = $scope.users.indexOf(user);
    //$scope.users.splice(index, 1);
    //
    //  }, function errorCallback(response) {
    //
    //  alert("Error. while deleting user Try Again!");
    //
    //  });


  }
})();