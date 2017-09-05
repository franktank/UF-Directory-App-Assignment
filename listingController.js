angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Array.from(Listings);
    $scope.detailedInfo = undefined;
    $scope.newCode = undefined;
    $scope.newName = undefined;
    $scope.newLatitude = undefined;
    $scope.newLongitude = undefined;
    $scope.newAddress = undefined;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      console.log("FUCK UF");
      var newListing = {
        code: $scope.newCode,
        name: $scope.newName,
        coordinates: {
           latitude: $scope.newLatitude,
           longitude: $scope.newLongitude
        },
        address: $scope.newAddress
      };

      for (var i = 0; i < $scope.listings.length; ++i) {
        if ($scope.listings[i].code.toLowerCase() > newListing.code.toLowerCase()) {
          $scope.listings.splice(i, 0, newListing);
          break
        }
      }

      $scope.newCode = undefined;
      $scope.newName = undefined;
      $scope.newLatitude = undefined;
      $scope.newLongitude = undefined;
      $scope.newAddress = undefined;
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index]
      console.log($scope.detailedInfo)
    };
  }
]);
