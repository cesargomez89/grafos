(function() {
  'use strict';
  /* global angular: true */

  angular.module('app.nodes').factory('nodeService', nodeService);

  nodeService.$inject = ['$http', 'logger', '$q'];

  function nodeService($http, logger, $q) {

    var service = {
      create: create,
      update: update,
      remove: remove
    };

    return service;

    function create(node) {
      return $q(function(resolve, reject){
        $http.post('/nodes.json', { node: node })
        .then(createComplete, createFailed);

        function createComplete(response) {
          logger.success('Node was successfully created.', response, 'Nodes');
          return resolve(response);
        }

        function createFailed(error) {
          logger.error('Node not created.', error, 'Nodes');
          return reject(error);
        }
      });
    }

    function update(node) {
      return $http.put('/nodes/' + node.id + '.json', {node: node})
      .then(updateComplete)
      .catch(updateFailed);

      function updateComplete(response) {
        logger.success('Node updated correctly.', null, 'Nodes');
        return response;
      }

      function updateFailed(error) {
        logger.error('Error updating the Node.', error, 'Nodes');
        return error;
      }
    }

    function remove(id) {
      return $q(function(resolve, reject){
        $http.delete('/nodes/'+ id +'.json')
        .then(removeComplete, removeFailed);

        function removeComplete(response) {
          logger.success('Node was successfully deleted.', response, 'Nodes');
          return resolve(response);
        }

        function removeFailed(error) {
          logger.error('Node not deleted.', error, 'Nodes');
          return reject(error);
        }
      });
    }

  }
}());
