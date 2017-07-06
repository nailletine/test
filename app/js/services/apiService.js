angular.module('app')
    .service('ApiService', function($http) {
        return {

            getCollection: function(id) {
                return $http.get('https://api.themoviedb.org/3/collection/' + id +"?api_key=4b5769d9c114b4c008e50bc35c1d64f8");
            }

        };
    });
