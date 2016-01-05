(function(){
  'use strict';
  /*global angular: true*/

  angular.module('app').factory('logger', logger);

  logger.$inject = ['$log', 'toastr'];

  function logger($log, toastr) {

    var service = {
      error   : error,
      info    : info,
      success : success,
      warning : warning
    };

    return service;

    function error(message, data, title){
      toastr.error(message, title);
      $log.error('Error: '+ message, data);
    }

    function info(message, data, title){
      toastr.info(message, title);
    }

    function success(message, data, title){
      toastr.success(message, title);
    }

    function warning(message, data, title){
      toastr.warning(message, title);
      $log.warn('Error: '+ message, data);
    }
  }
}());
