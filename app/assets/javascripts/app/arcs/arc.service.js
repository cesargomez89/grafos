(function() {
  'use strict';
  /* global angular: true */

  angular.module('app.arcs').factory('arcService', arcService);

  arcService.$inject = ['$http', 'logger', '$q'];

  function arcService($http, logger, $q) {

    var service = {
      create: create,
      update: update,
      remove: remove
    };

    return service;

    function create(arc) {
      return $q(function(resolve, reject){
        $http.post('/arcs.json', { arc: arc })
        .then(createComplete, createFailed);

        function createComplete(response) {
          logger.success('Arc was successfully created.', response, 'Arcs');
          return resolve(response);
        }

        function createFailed(error) {
          logger.error('Arc not created.', error, 'Arcs');
          return reject(error);
        }
      });
    }

    function update(arc) {
      return $http.put('/arcs/' + arc.id + '.json', {arc: arc})
      .then(updateComplete)
      .catch(updateFailed);

      function updateComplete(response) {
        logger.success('Arc updated correctly.', null, 'Arcs');
        return response;
      }

      function updateFailed(error) {
        logger.error('Error updating the Arc.', error, 'Arcs');
        return error;
      }
    }

    function remove(id) {
      return $q(function(resolve, reject){
        $http.delete('/arcs/'+ id +'.json')
        .then(removeComplete, removeFailed);

        function removeComplete(response) {
          logger.success('Arc was successfully deleted.', response, 'Arcs');
          return resolve(response);
        }

        function removeFailed(error) {
          logger.error('Arc not deleted.', error, 'Arcs');
          return reject(error);
        }
      });
    }

  }
}());
