angular.module('stackVis', ['stackVis.vis', 'stackVis.stackFac', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/stackView.html',
      controller: 'VisController'
    })
})
