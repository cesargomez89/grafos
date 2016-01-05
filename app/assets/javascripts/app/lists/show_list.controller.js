(function() {
  "use strict";
  /*global angular: true*/

  angular.module('app.lists').
    controller('ShowListController', ShowListController);

  ShowListController.$inject = ['nodeService', 'arcService'];

  function ShowListController(nodeService, arcService){
    var vm = this;
    vm.list  = {name: null, description: null};
    vm.nodes = [];
    vm.arcs  = [];
    vm.newNode = { info: '', next_id: null };
    vm.newArc = { weight: 1, heuristic_value: null, node_id: null, next_id: null };

    vm.saveList = saveList;
    vm.getInfo  = getInfo;
    vm.addNode  = addNode;
    vm.addArc   = addArc;
    vm.saveNode = saveNode;
    vm.saveArc  = saveArc;

    function saveList(data){
    }

    function getInfo(list, nodes, arcs){
      vm.list  = list;
      vm.nodes = nodes;
      vm.arcs  = arcs;
    }

    function addNode(){
      vm.nodes.push(angular.copy(vm.newArc));
    }

    function addArc(){
      vm.arcs.push(angular.copy(vm.newArc));
    }

    function saveNode(data){
      if(data.id){
        nodeService.update(data);
      } else{
        nodeService.create(data).then(function(response){
          var node = _.find(vm.nodes, {id: response.data.id});
          node = response.data;
        });
      }
    }

    function saveArc(data){
      if(data.id){
        arcService.update(data);
      } else{
        arcService.create(data).then(function(response){
          var arc = _.find(vm.arcs, {id: response.data.id});
          arc = response.data;
        });
      }
    }

  }
}());
