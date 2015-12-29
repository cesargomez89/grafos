angular.module('app', [
  'app.core',
], configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider){
  authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
}
