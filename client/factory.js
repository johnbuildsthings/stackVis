angular.module('stackVis.stackFac', [])

.factory('stackFac', function() {

  var stack = ['hello', 'there', 'world'];


  return ({
    stack: stack,
  })
})