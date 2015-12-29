/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 :
 */

once = function (fn, scope){

  var called;
  var result;

  return function(){
    if (called){
      return result;
    }

    called = true;

    return result = fn.apply(scope || this, arguments);
  }
};