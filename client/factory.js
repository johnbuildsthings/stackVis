angular.module('stackVis.stackFac', [])

.factory('stackFac', function() {

  var stack = ['hello'];

  var len = 10;

  var conform = function(){
    while(this.stack.length > this.len){
      this.stack.shift();
    }
  }

  return ({
    stack: stack,
    len: len,
    conform: conform,
  })
})