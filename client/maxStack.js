angular.module('stackVis.maxStack', [])

.controller('MaxStackController', function ($scope, $location, stackFac){
  $scope.len = stackFac.len;

  $scope.setNewLen = function(){
    if($scope.newLen){
      stackFac.len = Number(this.newLen);
      $scope.len = stackFac.len;
      $scope.newLen = '';
      if(stackFac.len < stackFac.stack.length){
        stackFac.conform();
      }
    }
  };

  $scope.back = function(){
    $location.path('/');
  };
})