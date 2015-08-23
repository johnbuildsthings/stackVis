angular.module('stackVis.vis', [])

.controller('VisController', function ($scope, stackFac){
  $scope.stack = stackFac.stack
})