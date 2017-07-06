angular.module('app')
    .controller('MainController', function($scope, ApiService) {
        $scope.currentCollection = {};
        $scope.loadCollection = function(id) {
            ApiService.getCollection(id).then(function(res) {
                $scope.currentCollection = res.data;
            });
        };
        $scope.displayMovie = function (movie){
          $scope.currentMovie = movie;
        }; 

        $scope.collections = [{
                id: 10,
                name: "Star Wars collection"
            },
            {
                id: 8945,
                name: "Mad max collection"
            }
        ];
    });
