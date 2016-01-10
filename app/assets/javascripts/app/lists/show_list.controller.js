(function() {
  "use strict";
  /*global angular: true*/

  angular.module('app.lists').
    controller('ShowListController', ShowListController);

  ShowListController.$inject = ['nodeService', 'arcService', 'algorithmService'];

  function ShowListController(nodeService, arcService, algorithmService){
    var vm = this;
    vm.list  = {name: null, description: null};
    vm.nodes = [];
    vm.arcs  = [];
    vm.newNode = { info: '' };
    vm.newArc = { weight: 1, heuristic_value: 0, node_id: null };
    vm.algorithm = null;
    vm.result = null;

    vm.saveList = saveList;
    vm.getInfo  = getInfo;
    vm.addNode  = addNode;
    vm.addArc   = addArc;
    vm.saveNode = saveNode;
    vm.saveArc  = saveArc;
    vm.calculate= calculate;
    vm.nodeInfo = nodeInfo;
    vm.removeNode = removeNode;
    vm.removeArc = removeArc;

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

    function saveNode(data, index){
      data.list_id = vm.list.id;
      if(data.id){
        nodeService.update(data);
      } else{
        nodeService.create(data).then(function(response){
          vm.nodes.splice(index, 1, response.data);
        });
      }
    }

    function saveArc(data, index){
      data.list_id = vm.list.id;
      if(data.id){
        arcService.update(data);
      } else{
        arcService.create(data).then(function(response){
          vm.arcs.splice(index, 1, response.data);
        });
      }
    }

    function calculate(){
      var params = {
        list_id: vm.list.id, start_id: vm.start.id, finish_id: vm.finish.id
      };
      algorithmService.calculate(vm.algorithm, params)
      .then(function(response){
        vm.result = JSON.stringify(response.data);
      });
    }

    function nodeInfo(id){
      var node = _.findWhere(vm.nodes, {id: id});
      return node ? node.info : null;
    }

    function removeNode(id, index){
      nodeService.remove(id).then(function(response){
        vm.nodes.splice(index, 1);
      });
    }

    function removeArc(id, index){
      arcService.remove(id).then(function(response){
        vm.arcs.splice(index, 1);
      });
    }

  }
}());
