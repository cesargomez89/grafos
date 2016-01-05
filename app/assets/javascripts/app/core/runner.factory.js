(function(){
  'use strict';
  /*global angular: true*/
  angular.module('app.core').run(runBlock);

  runBlock.$inject = ['editableOptions', 'editableThemes'];

  function runBlock(editableOptions, editableThemes) {
    editableOptions.theme = 'bs3';
    editableThemes.bs3.buttonsClass = 'btn-xs';
  }
}());
