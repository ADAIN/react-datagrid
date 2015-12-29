/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

findIndexBy = function findIndexBy(arr, fn){

  var i   = 0;
  var len = arr.length;

  for (; i < len; i++){
    if (fn(arr[i]) === true){
      return i;
    }
  }

  return -1;
};