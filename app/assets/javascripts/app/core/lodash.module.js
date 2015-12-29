(function(){
  'use strict';
  /*global angular: true*/

  angular.module('app.lodash', []).factory('_', function(){
    return window._;
  });
}());
