angular.module('stackVis', ['stackVis.vis', 'stackVis.stackFac', 'stackVis.maxStack', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/stackView.html',
      controller: 'VisController'
    })
    .when('/len', {
      templateUrl: 'views/maxStack.html',
      controller: 'MaxStackController'
    })
})
