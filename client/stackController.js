angular.module('stackVis.vis', [])

.controller('VisController', function ($scope, $location, stackFac){
  $scope.data = {
    stack : stackFac.stack,
    errorMessage : '',
    len : stackFac.len
  }

  // $scope.stackInit = function(){    
  //   while($scope.data.stack.length > $scope.data.len){
  //     stackFac.stack.shift();
  //   }
  // }

  // $scope.stackInit();

  $scope.push = function(){
    if($scope.newElement){
      if(stackFac.len > $scope.data.stack.length){
        stackFac.stack.unshift(this.newElement);
      }else{
        $scope.data.errorMessage = 'max stack length exceeded';
      }
    }
    $scope.newElement = '';
  }

  $scope.pop = function(){

    if($scope.data.stack.length > 0){
      stackFac.stack.shift();
      if($scope.data.errorMessage.length > 0){
        $scope.data.errorMessage = '';
      }
    }
  }
  $scope.lenView = function(){
    $location.path('/len');
    console.log('changing view');
  }
})