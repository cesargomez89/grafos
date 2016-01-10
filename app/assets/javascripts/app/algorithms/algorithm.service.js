(function() {
  'use strict';
  /* global angular: true */

  angular.module('app.algorithms').factory('algorithmService', algorithmService);

  algorithmService.$inject = ['$http', 'logger', '$q'];

  function algorithmService($http, logger, $q) {

    var service = {
      calculate: calculate
    };

    return service;

    function calculate(name, params) {
      return $q(function(resolve, reject){
        $http.get('/algorithms/'+ name +'.json', {params: params})
        .then(getComplete, getFailed);

        function getComplete(response) {
          return resolve(response);
        }

        function getFailed(error) {
          logger.error('Algorithm not calculated.', error, 'Algorithms');
          return reject(error);
        }
      });
    }

  }
}());
