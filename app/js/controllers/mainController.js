angular.module('app')
    .controller('MainController', function($scope, ApiService) {
  ApiService.getMovie();

  $scope.collections=[
    {
      id:10,
      name: "Star Wars collection"
    },
    {
        id: 8945,
        name: "Mad max collection"
    }


  ];
    });
