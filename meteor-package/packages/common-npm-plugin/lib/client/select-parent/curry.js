/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

curry = function (fn, n){

  if (typeof n !== 'number'){
    n = fn.length;
  }

  function getCurryClosure(prevArgs){

    function curryClosure() {

      var len  = arguments.length;
      var args = [].concat(prevArgs);

      if (len){
        args.push.apply(args, arguments);
      }

      if (args.length < n){
        return getCurryClosure(args);
      }

      return fn.apply(this, args);
    }

    return curryClosure;
  }

  return getCurryClosure([]);
};