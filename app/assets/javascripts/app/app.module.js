angular.module('app', [
  'app.core',
  'app.lists',
  'app.nodes',
  'app.arcs',
  'app.algorithms'
], configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider){
  authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
}
