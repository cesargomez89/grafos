(function() {
  "use strict";
  /*global angular: true*/

  angular.module('app.lists').
    controller('ShowListController', ShowListController);

  ShowListController.$inject = [];

  function ShowListController(){
    var vm = this;
    vm.list = {name: null, description: null};
    vm.saveList = saveList;
    vm.getList= getList;

    function saveList(data){
      debugger
    }

    function getList(list){
      vm.list = list;
    }
  }
}());
